import './App.css';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Grid from './components/Grid';
import { useEffect, useState } from 'react';
import { getDataError, getDataLoading, getDataSuccess } from './Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Pagination from './components/Pagination';

function App() {
  const [page, setpage] = useState(1)
   const { data, totalPage, griddata,isLoading,isError } = useSelector((state) => state);
   const dispatch = useDispatch();

   useEffect(() => {
    (async function (){
 dispatch(getDataLoading());
 await axios
   .get(`https://api.spacexdata.com/v3/capsules?limit=30`)
   .then((res) => {
     dispatch(getDataSuccess(res.data));
   })
   .catch(() => dispatch(getDataError()));

    })()
    
   }, []);

  return (
    <div>
      <Banner />
      <SearchBar />
      {isLoading ? (
        <h1>Loading</h1>
      ) : isError ? (
        <h1>Something Went Wrong</h1>
      ) : (
        <Grid data={griddata} />
      )}
      <Pagination
        arr={new Array(Math.ceil(data.length / 10)).fill(0)}
        totalPage={totalPage}
        page={page}
        setpage={setpage}
      />
    </div>
  );
}

export default App;
