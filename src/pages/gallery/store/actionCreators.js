import { CLOSE_DIALOG, IMG_CLICKED } from './actionTypes';

export const closeDialog = () => ({
    type: CLOSE_DIALOG,
})

export const imgClicked = (imgName) => ({
    type: IMG_CLICKED,
    imgName
})

