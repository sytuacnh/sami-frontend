// import { takeEvery } from 'redux-saga/effects';
import { takeEvery, put } from 'redux-saga/effects';
// import { SUBMIT_MESSAGE } from './actionTypes';
import axios from 'axios'
import { 
    // sendMessageSucceeded, 
    // sendMessageFailed, 
    contact 
} from './actionCreators'
// import { SubmissionError } from 'redux-form';

function* sendMessageToBackend(action) {
    try {
        // get values from form
        const senderName = action.payload.get('senderName')
        const senderEmail = action.payload.get('senderEmail')
        const messageContent = action.payload.get('messageContent')

        const contactMessage = {
            "name": senderName,
            "email": senderEmail,
            "content": messageContent
        };

        // yield axios.post("/api/contactmessages/", contactMessage);
        yield axios.post("/api/contactmessages/", contactMessage);
        // const res = yield axios.post("/api/contactmessages/", contactMessage);
        // do not need to use res.data here
        // console.log('Message sent successfully   !!!!!!!!!!!!!!!!')
        // patch action when succeed to send message
        yield put(contact.success());
    } catch(e) {
        // patch action when fail to send message
        // console.log('Message failed to send.')

        // const formError = new SubmissionError({
        //   contact: 'User with this login is not found', // specific field error
        //   _error: 'Login failed, please check your credentials and try again', // global form error
        // });

        // yield put(login.failure(formError));

        // patch action when fail to send message
        yield put(contact.failure(e));
    }
}
export default function* contactSagas() {
    // call backend api
    yield takeEvery(contact.REQUEST, sendMessageToBackend);
}
