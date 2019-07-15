import { CHANGE_INPUT_VALUE } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value  // == value: value
})