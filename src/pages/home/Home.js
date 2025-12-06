import { projectFirestore } from '../../firebase/config' 
import EventList from '../../components/EventList'
import './Home.css'
import { useEffect,useState } from 'react'
function Home() {

  const [data,setData] = useState(null)
  const [isPending,setIsPending] = useState(false)
  const [error,setError] = useState(false)

   useEffect(()=>{
    setIsPending(true)

    const unsub = projectFirestore.collection('trips').onSnapshot((snapshot)=>{
      if(snapshot.empty){
        setError("No Events to load")
        setIsPending(false)
      }else{
        let results=[]
        snapshot.docs.forEach(doc =>{
          results.push({id:doc.id,...doc.data()})
        })
        setData(results)
        setIsPending(false)
      }
    },(err)=>{
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()

   },[])

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <EventList trips={data}/>}
    </div>
  )
}
export default Home