import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../css/grid.css"
import { getDataError, getDataLoading, getDataSuccess } from '../Redux/action'
const Grid = ({data}) => {
 
  return (
    <div>
      <h1>grid</h1> 
      <div className='grid-main'>
        {data && data.map((elem,index)=>{
          // console.log(elem)
          if(index<10){
          return (
            <div className="grid-signleItem" key={index}>
              <div className={"grid-data"}>
                <h3>Capsule Id :</h3>
                <p>{elem.capsule_serial}</p>
              </div>
              <div className={"grid-data"}>
                <h3>Status :</h3>
                <p>{elem.status}</p>
              </div>
              <div className={"grid-data"}>
                <h3>Type :</h3>
                <p>{elem.type}</p>
              </div>
              <div className={"grid-data"}>
                <h3>Detail :</h3>
                <p>{elem.details}</p>
              </div>
              <div className={"grid-data"}>
                <h3>Original Launch :</h3>
                <p>{elem.original_launch}</p>
              </div>
            </div>
          );
          }
        })}
      </div>
    </div>
  )
}

export default Grid
