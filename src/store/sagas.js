import { takeEvery, put } from 'redux-saga/effects';
import { CHANGE_INPUT_VALUE } from './actionTypes';
// import axios from 'axios'
// import * as actionCreators from './actionCreators';

// async example
// function* getInitList() {
//     try {
//         const res = yield axios.get('/list.json');
//         const action = initListAction(res.data);
//         yield put(action);
//     } catch(e) {
//         console.log('list.json request failed')
//     }
// }

function* getInputChangeAction() {
    console.log('hello saga!')
}

function* samiSaga() {
    yield takeEvery(CHANGE_INPUT_VALUE, getInputChangeAction);
}

export default samiSaga;