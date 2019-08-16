import { GET_CURRENT_PROGRAM, INIT_CURRENT_PROGRAM, CHANGE_CURRENT_NAV } from './actionTypes';

export const initCurrentProgram = (program) => ({
    type: INIT_CURRENT_PROGRAM,
    program
})

export const getCurrentProgram = () => ({
    type: GET_CURRENT_PROGRAM
})

export const changeCurrentNav = (nav) => ({
    type: CHANGE_CURRENT_NAV,
    nav
})
