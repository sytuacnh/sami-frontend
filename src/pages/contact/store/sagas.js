import { takeEvery, put } from 'redux-saga/effects';
import { SUBMIT_MESSAGE } from './actionTypes';
import axios from 'axios'
import { messageSent, contact } from './actionCreators'
import { SubmissionError } from 'redux-form';

function* sendMessageToBackend(action) {
    console.log('inside sagas!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!v')
    try {
        // get values from form
        const senderName = action.payload.get('senderName')
        const senderEmail = action.payload.get('senderEmail')
        const messageContent = action.payload.get('messageContent')

        const contactMessage = {
            "name": senderName,
            "content": messageContent,
            "email": senderEmail
        };
        const res = yield axios.post("/api/contactmessages/", contactMessage);
        // console.log(res.data) // => an object of program
        
        // patch action when succeed to send message
        // const action = messageSent(res.data);
        // yield put(action);
        console.log('Message sent successfully   !!!!!!!!!!!!!!!!')
    } catch(e) {
        // patch action when fail to send message
        console.log('Message failed to send.')

        // const formError = new SubmissionError({
        //   contact: 'User with this login is not found', // specific field error
        //   _error: 'Login failed, please check your credentials and try again', // global form error
        // });

        // yield put(login.failure(formError));
    }
}
export default function* contactSagas() {
    // call backend api
    yield takeEvery(contact.REQUEST, sendMessageToBackend);
    // yield takeEvery(SUBMIT_MESSAGE, sendMessageToBackend);
}
