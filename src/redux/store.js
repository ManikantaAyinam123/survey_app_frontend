// import { applyMiddleware } from 'redux';
// import { legacy_createStore as createStore } from "redux";
// import {thunk} from 'redux-thunk';
// import reducer from '../redux/reducer/reducer'

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../redux/reducer/rootReducer';  

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



