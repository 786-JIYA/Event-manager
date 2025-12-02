import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'
function SearchBar() {

    const[term, setTerm] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${term}`);
    }

  return (
    <div className="searchBar">
        <form onSubmit={handleSubmit}>
            <lable htmlFor="search" >Search :</lable>
            <input 
            type="text"
            id="search"
            name="search"
            onChange={(e)=>{setTerm(e.target.value)}}
            required
            />
        </form>
    </div>
  )
}
export default SearchBar