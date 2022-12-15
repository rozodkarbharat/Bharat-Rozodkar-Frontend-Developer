import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  "../css/pagination.css"
import { pageChange } from "../Redux/action";
// var page=1
const Pagination = ({arr}) => {
   const {totalPages,page} = useSelector((state) => state);
 
   const dispatch = useDispatch();
  function handlepagechange(change){
  dispatch(pageChange(change));
  }
  return (
    <div className={"box"}>
      <button
        disabled={page === 1 ? true : false}
        onClick={() => handlepagechange(page -1)}
        className={"button"}
      >
        {"<"}
      </button>
      {arr &&
        arr.map((elem, index) => {
          return (
            <button
              className={"button"}
              key={index}
              onClick={() => handlepagechange(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      <button
        disabled={totalPages === page ? true : false}
        onClick={() => handlepagechange(page+1)}
        className={"button"}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
