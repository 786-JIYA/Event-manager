
import {useFetch} from '../../hooks/useFetch';
import {useParams} from 'react-router-dom';
import './Description.css';
function Description() {
    const {id} = useParams();
    const url = `http://localhost:3000/trips/`+id;
  
    const{error,data:trip,isPending,}= useFetch(url);

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
    </div>
  )
}
export default Description
