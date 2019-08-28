import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const noButtonClickedID = -1;
const otherButtonID = 5;
const isInteger = (n) => n % 1 === 0;
const buttonClickedAppendZero = (id) => id !== noButtonClickedID && id !== otherButtonID;

const defaultState = fromJS({
    clickedButtonId: noButtonClickedID,
    currentDonationAmount: "0.00",
    donationAmountInputFocus: false
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_DONATION_AMOUNT_INPUT_FOCUS:
            return state.set("donationAmountInputFocus", action.inputFocus);
        case actionTypes.MONEY_BUTTON_CLICKED:
            return state.set("clickedButtonId", parseInt(action.buttonID));
        case actionTypes.DONATION_AMOUNT_CHANGED:
            const amount = action.donationAmount

            if (buttonClickedAppendZero && amount.indexOf(".") !== -1)
                return state.set("currentDonationAmount", amount);

            var newDonationAmount;
            if (buttonClickedAppendZero(state.get("clickedButtonId")) && isInteger(amount))
                newDonationAmount = amount + ".00"
            else 
                newDonationAmount = amount
            return state.set("currentDonationAmount", newDonationAmount);
        default:
            return state;
    }
}