import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    currentProgram: {}, // an object
    hoverColor: 'primary',
    currentNav: "homeNav" 
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.INIT_CURRENT_PROGRAM:
            return state.set("currentProgram", action.program);
        case actionTypes.CHANGE_CURRENT_NAV:
            return state.set("currentNav", action.nav);
        default:
            return state;
    }
}