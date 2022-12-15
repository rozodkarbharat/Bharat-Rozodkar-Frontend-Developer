import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "../css/searchbar.css"
import { searchResult } from '../Redux/action'
const SearchBar = () => {
const [type, settype] = useState("")
const [status, setstatus] = useState("")
const [Origin, setOrigin] = useState("")
const dispatch=useDispatch()
  const handleClick=(e)=>{
    e.preventDefault()
    var searchparam=""
  if(type.length>0){
    searchparam += '?type='+type
  
  }
  if (status.length > 0) {
   
    if(searchparam){
   searchparam += '&status='+status
    }
    else{
    searchparam = searchparam + '?status='+status;
    console.log(searchparam)
    }
  }
  if (Origin.length > 0) {
    if (searchparam) {
      searchparam += '&original_launch='+Origin;
    } else {
      searchparam += 'original_launch='+Origin
    }
  }
  console.log(searchparam);
  axios.get("https://api.spacexdata.com/v3/capsules"+searchparam).then((res)=>{dispatch(searchResult(res.data))||console.log(res.data,"hello")}).catch((err)=>console.log(err))
  }
  return (
    <div className="search-main">
      <div className="form-box">
        <form className="form" onSubmit={handleClick}>
          <input
            placeholder="Status"
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            type="text"
          />
          <input
            placeholder="Type"
            value={type}
            onChange={(e) => settype(e.target.value)}
            type="text"
          />
          <input
            placeholder="Original Launch"
            value={Origin}
            onChange={(e) => setOrigin(e.target.value)}
            type="text"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}

export default SearchBar
