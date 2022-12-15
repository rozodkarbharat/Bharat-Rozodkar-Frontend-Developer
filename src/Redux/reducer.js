import { GET_DATA_SUCCESS, PAGE_CHANGE } from "./actiontypes";

const initialState={
    data:[],
    isLoading:false,
    isError:false,
    page:1,
    totalPages:1,
    griddata:[]
}

export const reducer = (state = initialState, action) => {
const { type, payload } = action;
  switch (type) {
    case GET_DATA_SUCCESS:{
        var temp=payload.filter((elem,index)=>{
            if(index<state.page*10&&index>=(state.page*10)-10){
                return elem
            }
        })
        var totalpage=Math.ceil((payload.length)/10)
        return {
          ...state,
          griddata: temp,
          data: payload,
          isLoading: false,
          isError: false,
          totalPages: totalpage,
        };
    }
    case PAGE_CHANGE:{
         let temp = state.data.filter((elem, index) => {
           if (
             index < action.payload * 10 &&
             index >= action.payload * 10 - 10
           ) {
             return elem;
           }
         });
        return {
          ...state,
          griddata: temp,
          isLoading: false,
          isError: false,
          page:action.payload
        };
    }
    default :{
        return state
    }
  }
}