import { GET_CURRENT_PROGRAM, INIT_CURRENT_PROGRAM } from './actionTypes';

export const initCurrentProgram = (program) => ({
    type: INIT_CURRENT_PROGRAM,
    program
})

export const getCurrentProgram = () => ({
    type: GET_CURRENT_PROGRAM
})