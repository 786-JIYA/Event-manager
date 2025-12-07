
import {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import './Description.css';
import { useState } from 'react';
import { projectFirestore } from '../../firebase/config';
function Description() {
    const {id} = useParams();
    const [trip,setTrip] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [error,setError] = useState(false)

   useEffect(()=>{
    setIsPending(true);

    const unsub = projectFirestore.collection('trips').doc(id).onSnapshot((doc)=>{
      if(doc.exists){
        setIsPending(false)
        setTrip(doc.data())
      }else{
        setIsPending(false)
        setError("Could not find Event")
      }
    })

    return () => unsub()

   },[id])

   const handleClick=(()=>{
    projectFirestore.collection('trips').doc(id).update({
      title:'New Title Here'
    })
   })
  
  return (
    <div className='events'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='load'>Loading...</p>}
      {trip &&  (
        <>
          <h2 className='page-title'>{trip.title}</h2>
          <p>Event is at {trip.time}</p>
          <ul>
            {trip.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p className='detail'>{trip.description}</p>
        </>
      )}
      <button className='button' onClick={()=>handleClick()}>Update me</button>
      </div>
  )
}
export default Description
