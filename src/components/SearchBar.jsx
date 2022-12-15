import axios from 'axios'
import React, { useState } from 'react'
import "../css/searchbar.css"
const SearchBar = () => {
const [type, settype] = useState("")
const [status, setstatus] = useState("")
const [Origin, setOrigin] = useState("")
  const handleClick=()=>{
  axios.get("")
  }
  return (
    <div className="search-main">
      <div className="form-box">
        <form className="form" onSubmit={handleClick}>
          <input placeholder="Status" type="text" />
          <input placeholder="Type" type="text" />
          <input placeholder="Original Launch" type="text" />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}

export default SearchBar
