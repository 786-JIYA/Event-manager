import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import EventList from "../../components/EventList";

function Search() {
  const query = new URLSearchParams(useLocation().search).get("q");
  const { data, isPending, error } = useFetch("http://localhost:3000/trips");

  // Filter data based on partial match in multiple fields
  const filteredData = data?.filter(trip =>
    (trip.title?.toLowerCase().includes(query.toLowerCase()) ||
     trip.location?.toLowerCase().includes(query.toLowerCase()) ||
     trip.description?.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div>
      <h2>Events including "{query}"</h2>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {filteredData && <EventList trips={filteredData} />}
    </div>
  );
}

export default Search;
