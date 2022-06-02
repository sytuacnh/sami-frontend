/*!

=========================================================
* Material Kit PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {
  dangerColor,
  successColor,
  whiteColor,
  blackColor,
  roseColor,
  grayColor,
  defaultFont
} from "assets/jss/material-kit-pro-react.jsx";

const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: grayColor[11] + " !important",
      borderBottomWidth: "1px !important"
    },
    "&:after": {
      borderBottomColor: roseColor[0]
    }
  },
  underlineError: {
    "&:after": {
      borderBottomColor: dangerColor[0]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderBottomColor: successColor[0]
    }
  },
  labelRoot: {
    ...defaultFont,
    color: grayColor[0] + " !important",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "0.01em",
    // top: "20px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px",
    }
  },
  labelRootError: {
    color: dangerColor[0] + " !important"
  },
  labelRootSuccess: {
    color: successColor[0] + " !important"
  },
  feedback: {
    position: "absolute",
    bottom: "4px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  formControl: {
    // margin: "0 0 17px 0",
    margin: "0 0 17px 0",
    // paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: grayColor[13]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: whiteColor
    },
    "&:after": {
      borderBottomColor: whiteColor
    }
  },
  input: {
    color: blackColor,
    height: "unset",
    // fontSize: "14px",
    "&,&::placeholder": {
      // top: "10px",
      fontSize: "18px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.52857",
      opacity: "1",
    },
    "&::placeholder": {
      color: grayColor[12]
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: whiteColor,
      opacity: "1"
    }
  }
};

export default customInputStyle;
