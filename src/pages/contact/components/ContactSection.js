import React, { PureComponent } from 'react';
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
                <form>
                  <CustomInput
                    labelText="Your Name"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Your message"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button color="rose" round>
                      Send Message 
                    </Button>
                  </div>
                </form>
              </div>
            </div>
        );
    }
}



export default withStyles(contactUsStyle)(ContactSection)
