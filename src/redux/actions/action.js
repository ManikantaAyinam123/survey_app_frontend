import { 
  FETCH_ALL_VOTERS_REQUEST, FETCH_ALL_VOTERS_SUCCESS, FETCH_ALL_VOTERS_FAILURE, 
  SEARCH_BY_NAME_REQUEST, SEARCH_BY_NAME_SUCCESS, SEARCH_BY_NAME_FAILURE, 
  FILTER_BY_CASTED_STATUS_REQUEST, FILTER_BY_CASTED_STATUS_SUCCESS, FILTER_BY_CASTED_STATUS_FAILURE 
} from './actionTypes';
import { fetchAllVotersData, searchByNameData, filterByCastedStatusData } from '../api/getData'; 

export const fetchAllVotersAction = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ALL_VOTERS_REQUEST });
    try {
      const data = await fetchAllVotersData(page);
      dispatch({ type: FETCH_ALL_VOTERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_ALL_VOTERS_FAILURE, payload: error.message });
    }
  };
};

export const searchByNameAction = (searchName) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_BY_NAME_REQUEST });
    try {
      const data = await searchByNameData(searchName); 
      console.log(searchName);
      console.log("this is name search")
      dispatch({ type: SEARCH_BY_NAME_SUCCESS, payload: data });

    } catch (error) {
      dispatch({ type: SEARCH_BY_NAME_FAILURE, payload: error.message });
    }
  };
};

export const filterByCastedStatusAction = (casted, page = 1) => {
  return async (dispatch) => {
    dispatch({ type: FILTER_BY_CASTED_STATUS_REQUEST });
    try {
      const data = await filterByCastedStatusData(casted, page); 
      dispatch({ type: FILTER_BY_CASTED_STATUS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FILTER_BY_CASTED_STATUS_FAILURE, payload: error.message });
    }
  };
};
