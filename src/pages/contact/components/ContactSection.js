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
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const theme = createMuiTheme();

class ContactSection extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div className={classNames(classes.contactContent)}>
              <div className={classes.container}>
                <p className={classes.label}>
                  You can email us at <b>sanantoniomathinclude@gmail.com</b>. Or send us a message below. Either way, we will contact you ASAP. 
                  <br />
                  <br />
                </p>
                  <MuiThemeProvider muiTheme={createMuiTheme()}>
                    <div>
                      <SendMessageForm onSubmit={showResults} />
                    </div>
                  </MuiThemeProvider> 
              </div>
            </div>
        );
    }
}



// export default withStyles(contactUsStyle)(ContactSection)
export default compose(
    withStyles(contactUsStyle),
    connect(null, null)
)(ContactSection)
