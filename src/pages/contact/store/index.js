// import { createStore, combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';

// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form"
// });
// const store = (window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore)(reducer);

// export default store;


import reducer from './reducer';
import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators';
// import headerSagas from './sagas.js';

// export { reducer, actionTypes, actionCreators, headerSagas };
export { reducer, actionTypes, actionCreators };
