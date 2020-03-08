import { SUBMIT_MESSAGE, MESSAGE_SENT } from './actionTypes';
import { createFormAction } from 'redux-form-saga';

export const submitMessage = (message) => ({
    type: SUBMIT_MESSAGE
})

export const messageSent = (message) => ({
    type: MESSAGE_SENT
})

export const contact = createFormAction('CONTACT');

// export const getCurrentProgram = () => ({
//     type: GET_CURRENT_PROGRAM
// })

// export const changeCurrentNav = (nav) => ({
//     type: CHANGE_CURRENT_NAV,
//     nav
// })
