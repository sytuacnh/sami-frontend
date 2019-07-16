import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store' // refers to ../common/header/store/index.js

// export default combineReducers({
//     header: headerReducer
// })
const reducer = combineReducers({
    header: headerReducer
})


export default reducer;

