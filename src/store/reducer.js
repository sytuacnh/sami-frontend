import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store'; // refers to ../common/header/store/index.js
import { reducer as registerProgramReducer } from '../pages/register_program/store';
import { reducer as donateReducer } from '../pages/donate/store';
import { reducer as galleryReducer } from '../pages/gallery/store';
// import { reducer as ContactReducer } from '../pages/contact/store';
import { reducer as formReducer } from 'redux-form/immutable'

// export default combineReducers({
//     header: headerReducer
// })
const reducer = combineReducers({
    header: headerReducer,
    registerProgram: registerProgramReducer,
    donate: donateReducer,
    gallery: galleryReducer,
    form: formReducer
})


export default reducer;

