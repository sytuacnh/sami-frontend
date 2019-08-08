import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    selectedForm: 0,
    formClicked: false
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.FORM_SIGN_UP_CLICK:
            return state.merge({
                selectedForm: action.FormID,
                formClicked: true
            });
        default:
            return state;
    }
}