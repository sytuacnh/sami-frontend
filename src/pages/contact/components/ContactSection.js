import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import PinDrop from "@material-ui/icons/PinDrop";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import Phone from "@material-ui/icons/Phone";
import withStyles from "@material-ui/core/styles/withStyles";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";
import SendMessageForm from "./SendMessage/SendMessageForm";
import showResults from './SendMessage/showResults';
// import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { actionCreators } from "../store";

// <p className={classNames(classes.label, classes.contactFont}>
class ContactSection extends PureComponent {

    render() {
        const {
            classes,
            handleMessageSubmit
        } = this.props;

        return <div>New Features Coming Soon!</div>

        // return (
        //     <div className={classNames(classes.contactContent)}>
        //       <div className={classes.container}>
        //           <SendMessageForm onSubmit={handleMessageSubmit} />
        //       </div>
        //     </div>
        // );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMessageSubmit(e) {
            const action = actionCreators.submitMessage();
            alert("submit")
            dispatch(action);
        }
    }
}

// export default withStyles(contactUsStyle)(ContactSection)
export default compose(
    // withStyles(style),
    withStyles(contactUsStyle),
    connect(mapStateToProps, mapDispatchToProps),
)(ContactSection)
