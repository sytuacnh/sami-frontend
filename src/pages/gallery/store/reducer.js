import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    showDialog: false,
    clickedImgName: "summer_camp_img_15",
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.CLOSE_DIALOG:
            return state.set("showDialog", false);
        case actionTypes.IMG_CLICKED:
            return state.merge({
                showDialog: true,
                clickedImgName: action.imgName,
            });
        default:
            return state;
    }
}
