import { all } from 'redux-saga/effects';
import { headerSagas } from '../common/header/store';
import { ResigterProgramSagas } from '../pages/register_program/store';
// function* getInputChangeAction() {
//     console.log('hello saga!')
// }

export default function* rootSaga() {
    yield all([
        headerSagas(),
    ])

    // yield takeEvery(CHANGE_INPUT_VALUE, getInputChangeAction);
}
