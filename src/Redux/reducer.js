import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, PAGE_CHANGE, SEARCH_RESULT } from "./actiontypes";

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
    case GET_DATA_SUCCESS: {
      var temp = payload.filter((elem, index) => {
        if (index < state.page * 10 && index >= state.page * 10 - 10) {
          return elem;
        }
      });
      //  console.log(temp);
      var totalpage = Math.ceil(payload.length / 10);
      return {
        ...state,
        griddata: temp,
        data: payload,
        isLoading: false,
        isError: false,
        totalPages: totalpage,
      };
    }
    case GET_DATA_LOADING:{
      return {
        ...state,
        data:[],
        griddata: temp,
        isLoading: true,
        isError: false,
        totalPages: 1,
      };
    }
    case GET_DATA_ERROR:{
       return {
         ...state,
         data: [],
         griddata: temp,
         isLoading: false,
         isError: true,
         totalPages: 1,
       };
    }
    case PAGE_CHANGE: {
      let temp = state.data.filter((elem, index) => {
        if (index < action.payload * 10 && index >= action.payload * 10 - 10) {
          return elem;
        }
      });

      return {
        ...state,
        griddata: temp,
        isLoading: false,
        isError: false,
        page: action.payload,
      };
    }
    case SEARCH_RESULT: {
      console.log(payload,"rweducer")
       var temp = payload.filter((elem, index) => {
         if (index < state.page * 10 && index >= state.page * 10 - 10) {
           return elem;
         }
       });
       let totalpage = Math.ceil(payload.length / 10);
      return {
        ...state,
        data: payload,
        totalPages: totalpage,
        page: 1,
        griddata: temp,
      };
    }
    default: {
      return state;
    }
  }
}