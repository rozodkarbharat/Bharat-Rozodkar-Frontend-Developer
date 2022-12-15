import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, PAGE_CHANGE } from "./actiontypes"


export const getDataSuccess=(payload)=>(dispatch)=>{
dispatch({type:GET_DATA_SUCCESS,payload})
}

export const getDataLoading = () => (dispatch) => {
  dispatch({ type: GET_DATA_LOADING });
};
export const getDataError = () => (dispatch) => {
  dispatch({ type: GET_DATA_ERROR });
};

export const pageChange=(page)=>(dispatch)=>{
  dispatch({ type: PAGE_CHANGE,payload:page});
}