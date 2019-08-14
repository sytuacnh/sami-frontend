import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    clickedButtonId: -1,
    currentDonationAmount: 0    
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.MONEY_BUTTON_CLICKED:
            return state.set("clickedButtonId", parseInt(action.buttonID));
        case actionTypes.DONATION_AMOUNT_CHANGED:
            console.log('DONATION_AMOUNT_CHANGED!!!!');
            return state.set("currentDonationAmount", parseInt(action.donationAmount));
        default:
            return state;
    }
}