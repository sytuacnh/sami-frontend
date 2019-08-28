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
            <div className={classes.contactContent}>
              <div className={classes.container}>
                <h2 className={classes.title}>Send us a message</h2>
                <GridContainer>
                  <GridItem md={6} sm={6}>
                    <p className={classes.label}>
                      You can email us at <b>sanantoniomathinclude@gmail.com</b>. Or send us a message below. Either way, we will contact you as soon as possible. 
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
                  </GridItem>
                  <GridItem md={4} sm={4} className={classes.mlAuto}>
                    <InfoArea
                      className={classes.info}
                      title="Find us at the office"
                      description={
                        <p>
                          Bld Mihail Kogalniceanu, nr. 8, <br /> 7652 Bucharest,{" "}
                          <br /> Romania
                        </p>
                      }
                      icon={PinDrop}
                      iconColor="rose"
                    />
                    <InfoArea
                      className={classes.info}
                      title="Give us a ring"
                      description={
                        <p>
                          Michael Jordan <br /> +40 762 321 762 <br /> Mon - Fri,
                          8:00-22:00
                        </p>
                      }
                      icon={Phone}
                      iconColor="info"
                    />
                    <InfoArea
                      className={classes.info}
                      title="Legal Information"
                      description={
                        <p>
                          Creative Tim Ltd. <br /> VAT · EN2341241 <br /> IBAN ·
                          EN8732ENGB2300099123 <br /> Bank · Great Britain Bank
                        </p>
                      }
                      icon={BusinessCenter}
                      iconColor="primary"
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        );
    }
}



export default withStyles(contactUsStyle)(ContactSection)
