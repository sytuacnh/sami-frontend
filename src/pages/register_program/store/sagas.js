// import { takeEvery, put } from 'redux-saga/effects';
// import { GET_CURRENT_PROGRAM } from './actionTypes';
// import axios from 'axios'
// import { initCurrentProgram } from './actionCreators'

// function* getCurrentProgramFunc() {
    // // console.log('enter headerSagas!!!')
    // try {
    //     const res = yield axios.get("/api/programs/1");
    //     // console.log(res.data) => an object of program
    //     const action = initCurrentProgram(res.data);
    //     yield put(action);
    // } catch(e) {
    //     console.log('Get current program API request failed')
    // }
// }

export default function* ResigterProgramSagas() {
    // yield takeEvery(GET_CURRENT_PROGRAM, getCurrentProgramFunc);
}
