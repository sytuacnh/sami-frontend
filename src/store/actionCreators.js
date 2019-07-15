import { CHANGE_INPUT_VALUE } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: 'change_input_value',
    value  // == value: value
})