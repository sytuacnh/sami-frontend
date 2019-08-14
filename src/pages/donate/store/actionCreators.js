import { MONEY_BUTTON_CLICKED, DONATION_AMOUNT_CHANGED } from './actionTypes';

export const moneyButtonClicked = (buttonID, donationAmount) => ({
    type: MONEY_BUTTON_CLICKED,
    buttonID,
    donationAmount
})

export const donationAmountChanged = (donationAmount) => ({
    type: DONATION_AMOUNT_CHANGED,
    donationAmount
})