import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    messageSubmitButtonClicked: false,
    sentMessageSucceed: true
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.CONTACT_REQUEST:
            return state.set("messageSubmitButtonClicked", true);
        case actionTypes.CONTACT_SUCCESS:
            return state.set("sentMessageSucceed", true);
        case actionTypes.CONTACT_FAILURE:
            return state.set("sentMessageSucceed", false);
        default:
            return state;
    }
}