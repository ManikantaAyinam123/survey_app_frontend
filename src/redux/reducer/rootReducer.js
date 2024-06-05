import { combineReducers } from 'redux';
import fetchAllVoters from './fetchAllVoters';

import searchByNameReducer from './searchByNameReducer';
import filterByCastedStatusReducer from './filterByCastedStatusReducer';
import constituencyNameReducer from './constituencyNameReducer';
import boothNameReducer from './boothNameReducer';


const rootReducer = combineReducers({
  fetchAllVoters,
   searchByNameReducer,
   filterByCastedStatusReducer,
   constituencyNameReducer,
   boothNameReducer,
});

export default rootReducer;
