import { 
  FETCH_ALL_VOTERS_REQUEST, FETCH_ALL_VOTERS_SUCCESS, FETCH_ALL_VOTERS_FAILURE, 
  SEARCH_BY_NAME_REQUEST, SEARCH_BY_NAME_SUCCESS, SEARCH_BY_NAME_FAILURE, 
  FILTER_BY_CASTED_STATUS_REQUEST, FILTER_BY_CASTED_STATUS_SUCCESS, FILTER_BY_CASTED_STATUS_FAILURE ,UPDATE_VOTER_REQUEST,
  UPDATE_VOTER_SUCCESS,
  UPDATE_VOTER_FAILURE,
  FETCH_CONSISTENCY_NAMES_REQUEST,
  FETCH_CONSISTENCY_NAMES_SUCCESS,
  FETCH_CONSISTENCY_NAMES_FAILURE,

} from './actionTypes';
import { fetchAllVotersData, searchByNameData, filterByCastedStatusData, updateVoter,fetchConsistencyNamesData } from '../api/getData'; 

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
  console.log("name in action",searchName);
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
  console.log("page", page);
  
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


export const updateVoterAction = (voterId, updatedFields) => {
  console.log("this is action for update",updatedFields)
  return async (dispatch) => {
    dispatch({ type: UPDATE_VOTER_REQUEST });
    try {
      const data = await updateVoter(voterId, updatedFields); 
      console.log('Voter updated successfully:', data);
      dispatch({ type: UPDATE_VOTER_SUCCESS, payload: data });
    } catch (error) {
      console.error('Error updating voter:', error);
      dispatch({ type: UPDATE_VOTER_FAILURE, payload: error.message });
    }
  };
};

export const fetchConsistencyNamesAction = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CONSISTENCY_NAMES_REQUEST });
    try {
      const data = await fetchConsistencyNamesData();
      dispatch({ type: FETCH_CONSISTENCY_NAMES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_CONSISTENCY_NAMES_FAILURE, payload: error.message });
    }
  };
};

