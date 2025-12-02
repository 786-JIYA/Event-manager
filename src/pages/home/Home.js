import {useFetch} from '../../hooks/useFetch'
import EventList from '../../components/EventList'
import './Home.css'
function Home() {

  const {data ,isPending, error} = useFetch('http://localhost:3000/trips')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <EventList trips={data}/>}
    </div>
  )
}
export default Home