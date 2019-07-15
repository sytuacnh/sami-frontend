import { CHANGE_INPUT_VALUE } from './actionTypes'

const defaultState = {
    inputValue: 'store is added'
}

export default (state=defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        // reducer不可以修改state, 所以得深拷贝, 修改新的state
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    return state;
}