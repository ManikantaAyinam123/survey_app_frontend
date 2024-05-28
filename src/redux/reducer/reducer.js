// import {
//   FETCH_ALL_VOTERS_REQUEST,
//   FETCH_ALL_VOTERS_SUCCESS,
//   FETCH_ALL_VOTERS_FAILURE,
//   SEARCH_BY_NAME_REQUEST,
//   SEARCH_BY_NAME_SUCCESS,
//   SEARCH_BY_NAME_FAILURE,
//   FILTER_BY_CASTED_STATUS_REQUEST,
//   FILTER_BY_CASTED_STATUS_SUCCESS,
//   FILTER_BY_CASTED_STATUS_FAILURE
// } from '../actions/actionTypes';

// const initialState = {
//   loading: false,
//   data: [],
//   error: null
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_ALL_VOTERS_REQUEST:
//     case SEARCH_BY_NAME_REQUEST:
//     case FILTER_BY_CASTED_STATUS_REQUEST:
//       return { ...state, loading: true, error: null };
//     case FETCH_ALL_VOTERS_SUCCESS:
//     case SEARCH_BY_NAME_SUCCESS:
//     case FILTER_BY_CASTED_STATUS_SUCCESS:
//        console.log("reducer",action.payload)
//       return { ...state, loading: false, data: action.payload, error: null };
//     case FETCH_ALL_VOTERS_FAILURE:
//     case SEARCH_BY_NAME_FAILURE:
//     case FILTER_BY_CASTED_STATUS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default reducer;