import { all } from 'redux-saga/effects';
// import { headerSagas } from '../common/header/store';
import { donateSagas } from '../pages/donate/store';
import { contactSagas } from '../pages/contact/store';
import formActionSaga from 'redux-form-saga';

// function* getInputChangeAction() {
//     console.log('hello saga!')
// }

export default function* rootSaga() {
    yield all([
        // headerSagas(),
        donateSagas(),
        contactSagas(),
        formActionSaga()
    ])
}
