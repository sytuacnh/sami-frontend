import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import compose from 'recompose/compose'
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import sectionsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle.jsx";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import AttachMoney from '@material-ui/icons/AttachMoney';
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from 'components/CustomInput/CustomInput.jsx';

// import MoneyButtons from './MoneyButtons';
// import giveImg from "../../../static/girls_giving_cut.jpg";
import DonateButton from "./DonateButton";
import girlGiving from "../../../static/girls_giving.jpg";
import { actionCreators } from "../store";

import { IconSpan } from "../style";

const style = {
    cardTitle,
    textCenter: {
        textAlign: "center"
    },
    textRight: {
        textAlign: "right"
    },
    textLeft: {
        textAlign: "left"
    },
};

const alignLeft = { textAlign: "left" }

class DonateSection extends PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         donateAmount: ""
    //     };
    // }

    render() {
            const { 
              classes, 
              handleMoneyButtonClicked, 
              handleDonationAmountChanged, 
              currentDonationAmount, 
              buttonID
             } = this.props;

            return (
                    <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem
                  md={10}
                  className={classNames(classes.section, classes.textCenter, classes.mrAuto, classes.mlAuto)}
                >
                  <div className={classes.sectionDescription}>
                    <h2 className={classes.title}>
                      Donate SaMi in 3 Steps
                    </h2>
                    <div>
                      <h3 className={classes.cardTitle} style={alignLeft}>Step 1. Select an amount</h3>
                      {/* <MoneyButtons /> */}
                      <GridContainer className={classNames(classes.textCenter, classes.mrAuto, classes.mlAuto)}>
                          <GridItem xs={10} md={2}>
                            <Button id="0" value="200" className={"buttonClicked"} fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg"><AttachMoney />200</Button>
                          </GridItem>
                          <GridItem xs={10} md={2}>
                            <Button id="1" value="100" className={buttonID=="1"?"buttonClicked":""} fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg"><AttachMoney /> 100</Button>
                          </GridItem>
                          <GridItem xs={10} md={2}>
                            <Button id="2" value="50" fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg"><AttachMoney /> 50</Button>
                          </GridItem>
                          <GridItem xs={10} md={2}>
                            <Button id="3" value="10" fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg"><AttachMoney /> 10</Button>
                          </GridItem>
                          <GridItem xs={10} md={2}>
                            <Button id="4" value="0" fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg">Other</Button>
                          </GridItem>
                      </GridContainer>
                    </div>
                    <div>
                      <h3 className={classes.cardTitle} style={alignLeft}>Step 2. Check the amount</h3>
                          <GridContainer className={classNames(classes.textCenter, classes.mrAuto, classes.mlAuto)}>
                            <GridItem>
                              <h4 style={alignLeft}><b>Your donation amount:</b></h4>
                            </GridItem>
                            <GridItem>
                              <CustomInput
                                id="donationAmountInput"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  value: currentDonationAmount,
                                  onChange: handleDonationAmountChanged,
                                  placeholder: "0",
                                  startAdornment: (<InputAdornment position="start"><AttachMoney /></InputAdornment>)
                                }}
                              />
                            </GridItem>
                          </GridContainer>
                    </div>
                    <div>
                      <h3 className={classes.cardTitle} style={alignLeft}>Step 3. Click the Donate button below</h3>
                      <h4 style={alignLeft}>You can make your donation using <b>PayPal, VISA, Credit</b> or <b>Debit card</b>.</h4>
                      <p>By clicking Donate, I agree to the 
                      <a className="link" href="https://www.paypal.com/ga/webapps/mpp/ua/useragreement-full" target="_blank" rel="noopener noreferrer"> Terms of Service </a>
                       and 
                      <a className="link" href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full?locale.x=en_US" target="_blank" rel="noopener noreferrer"> Privacy Policy </a>
</p>
                      <DonateButton />
                    </div>
                    <div>
                        <p>Powered by <a className="payPalLink" href="https://www.paypal.com" target="_blank" rel="noopener noreferrer"><IconSpan>&#xea24;</IconSpan></a>. PayPal account is not required.</p>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
        );
    }

}

DonateSection.propTypes = {
    classes: PropTypes.object
};

const mapStateToProps = (state) => {
    return { 
        buttonID: state.getIn(['donate', 'buttonID']),
        currentDonationAmount: state.getIn(['donate', 'currentDonationAmount']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      handleDonationAmountChanged(e) {
          console.log('handleDonationAmountChanged to: ', e.currentTarget.value);
          const action = actionCreators.donationAmountChanged(e.currentTarget.value);
          dispatch(action);
      },
      handleMoneyButtonClicked(e) {
          console.log("id: ", e.currentTarget.id);
          console.log("value: ", e.currentTarget.value);
          const action = actionCreators.moneyButtonClicked(e.currentTarget.id, e.currentTarget.value);
          dispatch(action);
      }
    }
};


// export default withStyles(sectionsStyle)(DonateSection)

export default compose(
    withStyles(style),
    withStyles(sectionsStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(DonateSection);