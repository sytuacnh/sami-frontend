import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store'; // refers to ../common/header/store/index.js
import { reducer as registerProgramReducer } from '../pages/register_program/store';
import { reducer as donateReducer } from '../pages/donate/store';

// export default combineReducers({
//     header: headerReducer
// })
const reducer = combineReducers({
    header: headerReducer,
    registerProgram: registerProgramReducer,
    donate: donateReducer,
})


export default reducer;

