import { combineReducers } from 'redux';
import fetchAllVoters from './fetchAllVoters';

import searchByNameReducer from './searchByNameReducer';
import filterByCastedStatusReducer from './filterByCastedStatusReducer';
import constituencyNameReducer from './constituencyNameReducer';

const rootReducer = combineReducers({
  fetchAllVoters,
   searchByNameReducer,
   filterByCastedStatusReducer,
   constituencyNameReducer,
});

export default rootReducer;
