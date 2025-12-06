import { useState}  from 'react';
import { useEffect} from 'react';
import{useNavigate} from 'react-router-dom';
import {useRef} from 'react';
import { projectFirestore } from '../../firebase/config' 
import './Create.css'
function Create() {
  const [title,setTitle]= useState('');
  const [date,setDate]= useState('');
  const [description,setDescription]= useState('');
  const [topics,setTopics]= useState([]);
  const [newTopic,setNewTopic]= useState('');
  const navigate=useNavigate();

  const topicInput= useRef(null);


  const handleSubmit= async(e)=>{
    e.preventDefault();
    const doc = ({title , date , description , topics});

    try{
    await projectFirestore.collection('trips').add(doc)
    navigate('/')
    }catch(err){
      console.log(err)
    }
  }

  const handleAdd=(e)=>{
    e.preventDefault();
   const topic= newTopic.trim();

    if(topic && !topics.includes(newTopic)){
      setTopics(prevTopics => [...prevTopics,newTopic]);
    }
    setNewTopic('');
    topicInput.current.focus();
  }

 

  return (
    <div className='create'>
      <h2 className='page-title'>Add new Event</h2>

      <form onSubmit={handleSubmit} className='form' >
        <lable>
          <span >Event Title</span>
          <input 
          type="text"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          />
        </lable>

        <lable>
          <span>Event Topics</span>
          <div className='topics'>
            <input 
            type="text"
            onChange={(e)=>setNewTopic(e.target.value)}
            value={newTopic}
            ref={topicInput}
            />
            <div className='b'>
            
             <p>Current topics : {topics.map(i=><em>{i},</em>)} </p>
             <button onClick={handleAdd} className='btn'>add topic</button>
             </div>
          </div>
        </lable>
       

        <lable>
          <span className='d' >Event Description</span>
          <textarea 
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          className='t'
          ></textarea>
        </lable>

          <lable>
          <span>Event Time</span>
          <input
          type="date"
          onChange={(e)=>{setDate(e.target.value)}}
          value={date}
          required
          />
        </lable>

        <button className='btn' >Add Event</button>

      </form>
    </div>
  )
}
export default Create