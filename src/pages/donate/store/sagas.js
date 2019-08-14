import { takeEvery, put } from 'redux-saga/effects';
import { MONEY_BUTTON_CLICKED } from './actionTypes';
import { donationAmountChanged } from './actionCreators'

function* handleDonationAmountChanged(action) {
    yield put(donationAmountChanged(action.donationAmount));
}

export default function* donateSagas() {
    // console.log("action: ", action)
    yield takeEvery(MONEY_BUTTON_CLICKED, handleDonationAmountChanged);
}
