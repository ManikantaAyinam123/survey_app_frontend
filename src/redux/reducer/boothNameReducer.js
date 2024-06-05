import {
  FETCH_BOOTH_NAMES_REQUEST,
  FETCH_BOOTH_NAMES_SUCCESS,
  FETCH_BOOTH_NAMES_FAILURE,
} from '../actions/actionTypes';

const initialBoothNamesState = {
  loading: false,
  names: [],
  error: null,
};

const boothNameReducer = (state = initialBoothNamesState, action) => {
  switch (action.type) {
    case FETCH_BOOTH_NAMES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_BOOTH_NAMES_SUCCESS:
      return { ...state, loading: false, names: action.payload, error: null };
    case FETCH_BOOTH_NAMES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default boothNameReducer;
