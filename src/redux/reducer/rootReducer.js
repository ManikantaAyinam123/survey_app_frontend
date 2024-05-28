import { combineReducers } from 'redux';
import fetchAllVoters from './fetchAllVoters';

import searchByNameReducer from './searchByNameReducer';
import filterByCastedStatusReducer from './filterByCastedStatusReducer';

const rootReducer = combineReducers({
  fetchAllVoters,
   searchByNameReducer,
   filterByCastedStatusReducer,
});

export default rootReducer;
