import './EventList.css'
import { Link } from 'react-router-dom'
function EventList({trips}) {

   if(trips.length==0){
    return <div className='error'>No such events yet..</div>
   }

  return (
    <div className='event-list'>
        {trips.map(trip=>(
            <div key={trip.id} className='card'>
               <p className='date'>Date : {trip.date}</p>
                <h2>{trip.title}</h2>
                <p className='host'>Hosted by: {trip.host}</p>
                <div className='des'>{trip.description.substring(0,100)}...</div>
                <div className='arrange'><p>{trip.attendees}+ Attendees</p>
                <Link to={`/trips/${trip.id}`} className="link">Read more</Link>
                </div>
            </div>
        ))}
        
    </div>
  )
}
export default EventList