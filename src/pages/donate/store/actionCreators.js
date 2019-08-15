import { MONEY_BUTTON_CLICKED, DONATION_AMOUNT_CHANGED, CHANGE_DONATION_AMOUNT_INPUT_FOCUS } from './actionTypes';

export const moneyButtonClicked = (buttonID, donationAmount) => ({
    type: MONEY_BUTTON_CLICKED,
    buttonID,
    donationAmount
})

export const donationAmountChanged = (donationAmount) => ({
    type: DONATION_AMOUNT_CHANGED,
    donationAmount
})

export const changeDonationAmountInputFocus = (inputFocus) => ({
    type: CHANGE_DONATION_AMOUNT_INPUT_FOCUS,
    inputFocus
})