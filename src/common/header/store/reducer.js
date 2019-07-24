import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    currentProgram: {}, // an object
    hoverColor: 'primary'
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.INIT_CURRENT_PROGRAM:
            const newState = JSON.parse(JSON.stringify(state))
            newState.program = action.program;
            // console.log(newState.program);
            return newState;
        default:
            return state;
    }
}