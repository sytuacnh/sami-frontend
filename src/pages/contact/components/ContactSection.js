import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import compose from 'recompose/compose'
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";
import SendMessageForm from "./SendMessage/SendMessageForm";
// import showResults from './SendMessage/showResults';
// import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { actionCreators } from "../store";


class ContactSection extends PureComponent {

    render() {
        const { classes } = this.props;

        // return (
        //     <div className={classNames(classes.contactContent)}>
        //       <div className={classes.container}>
        //         <div>You can email us at <b>sanantoniomathinclude@gmail.com</b>. Or fill out the <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfN_OVoMrYKPtB-qAH9W8ejx1UryPa8FqjzGhrm0zhKTa7yVA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Contact Us form</a>. Either way, we will contact you ASAP.</div>
        //       </div>
        //     </div>
        // );


        return (
            <div className={classNames(classes.contactContent)}>
              <div className={classes.container}>
                  <SendMessageForm />
              </div>
              <div className={classes.container}>
                <div>Also, you can email us at <b>sanantoniomathinclude@gmail.com</b> or fill out this <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfN_OVoMrYKPtB-qAH9W8ejx1UryPa8FqjzGhrm0zhKTa7yVA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">form</a>. Either way, we will contact you ASAP.</div>
              </div>
            </div>
        );
    }
}

// export default withStyles(contactUsStyle)(ContactSection)
export default compose(
    withStyles(contactUsStyle),
)(ContactSection)
