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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import sectionsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle.jsx";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
import Button from "components/CustomButtons/Button.jsx";
import AttachMoney from '@material-ui/icons/AttachMoney';
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from 'components/CustomInput/CustomInput.jsx';

// import MoneyButtons from './MoneyButtons';
// import giveImg from "../../../static/girls_giving_cut.jpg";
import DonateButton from "./DonateButton";
import { actionCreators } from "../store";

import { IconSpan } from "../style";
import {
    grayColor,
    roseColor,
    blackColor,
    whiteColor,
    hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";
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
    marginTopSm: {
        marginTop: "10px"
    },
    marginTopLg: {
        marginTop: "40px"
    },
    box: {
        color: blackColor,
        backgroundColor: whiteColor,
        borderRadius: "3px",
        boxShadow: "0 14px 26px -12px rgba(" +
            hexToRgb(grayColor[0]) +
            ", 0.42), 0 4px 23px 0px rgba(" +
            hexToRgb(grayColor[0]) +
            ", 0.12), 0 8px 10px -5px rgba(" +
            hexToRgb(grayColor[0]) +
            ", 0.2)"
    },
    paddingCustom: {
        padding: "30px 0"
    }
};
const alignLeft = { textAlign: "left" }

class DonateSection extends PureComponent {

    constructor(props) {
        super(props);
        // create a ref to store the CustomInput(TextInput) DOM element
        // not using redux
        this.donationAmountInput = React.createRef();
        this.focusDonationAmountInput = this.focusDonationAmountInput.bind(this);
        this.handleOtherButtonClicked = this.handleOtherButtonClicked.bind(this);
      }

    focusDonationAmountInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      setTimeout(() => this.donationAmountInput.current.focus(), 100);
      // this.donationAmountInput.current.focus();
    }

    handleOtherButtonClicked(e) {
      this.props.TurnOnDonationAmountInputFocus();
      this.focusDonationAmountInput();
      this.props.handleMoneyButtonClicked(e);
    }

    render() {
        const {
            classes,
            handleMoneyButtonClicked,
            handleDonationAmountChanged,
            currentDonationAmount,
            clickedButtonId,
            donationAmountInputFocus,
            TurnOnDonationAmountInputFocus,
            TurnOffDonationAmountInputFocus
        } = this.props;

        return (
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem
                  md={10}
                  className={classNames(classes.section, classes.textCenter, classes.mrAuto, classes.mlAuto, classes.paddingCustom)}
                >
                  <div className={classes.sectionDescription}>
                    <h2 className={classes.title}>
                      Donate SaMi in 3 Steps
                    </h2>
                    <div>
                      <h3 className={classNames(classes.cardTitle)} style={alignLeft}>Step 1. Select an amount</h3>
                      {/* <MoneyButtons /> */}
                      <GridContainer className={classNames(classes.textCenter, classes.mrAuto, classes.mlAuto)}>
                          <GridItem xs={10} md={2}>
                            <Button id="0" value="200" fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg"><AttachMoney />200</Button>
                          </GridItem>
                           <GridItem xs={10} md={2}>
                            <Button id="1" value="150" fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg"><AttachMoney />150</Button>
                          </GridItem>
                          <GridItem xs={10} md={2}>
                            <Button id="2" value="100" fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg"><AttachMoney />100</Button>
                          </GridItem>
                          <GridItem xs={10} md={2}>
                            <Button id="3" value="50" fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg"><AttachMoney />50</Button>
                          </GridItem>
                          <GridItem xs={10} md={2}>
                            <Button id="4" value="20" fullWidth={true} onClick={handleMoneyButtonClicked} color="rose" size="lg"><AttachMoney />20</Button>
                          </GridItem>
                          <GridItem xs={10} md={2}>
                            <Button id="5" value="" fullWidth={true} onClick={this.handleOtherButtonClicked} color="rose" size="lg">Other</Button>
                          </GridItem>
                      </GridContainer>
                    </div>
                    <div>
                      <h3 className={classNames(classes.cardTitle, classes.marginTop, classes.marginTopLg)} style={alignLeft}>Step 2. View the amount</h3>
                          <GridContainer className={classNames(classes.box, classes.textCenter, classes.mrAuto, classes.mlAuto)}>
                            <GridItem>
                              <h4 style={alignLeft}><b>Your donation amount (Change it as you wish. Only accept numbers in "x.xx" format.)</b></h4>
                            </GridItem>
                            <GridItem>
                              <CustomInput
                                id="donationAmountInput"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  onBlur: TurnOffDonationAmountInputFocus,
                                  inputRef: this.donationAmountInput,
                                  type: "number",
                                  value: currentDonationAmount,
                                  onChange: handleDonationAmountChanged,
                                  placeholder: "0.00",
                                  startAdornment: (<InputAdornment position="start"><AttachMoney /></InputAdornment>)
                                }}
                              />
                              {
                                donationAmountInputFocus ?
                                    <div style={alignLeft}>
                                        <p>Please enter a donation amount.</p>
                                        <p>Please enter an amount under $10,000,000.</p>
                                        <p>Please enter a donation amount of $1 or greater.</p>
                                    </div>
                                    : 
                                    <div></div>                              
                            }
                              
                            </GridItem>
                          </GridContainer>
                    </div>
                    <div>
                      <h3 className={classNames(classes.cardTitle, classes.marginTop, classes.marginTopLg)} style={alignLeft}>Step 3. Click the Donate button below</h3>
                      <h4 style={alignLeft}>You can make your donation using <b>PayPal, VISA, Credit</b> or <b>Debit card</b>.</h4>
                        <GridContainer className={classNames(classes.box, classes.textCenter, classes.mrAuto, classes.mlAuto)}>
                          <GridItem>
                            <p className={classes.marginTopSm}>By clicking Donate, I agree to the 
                            <a className="link" href="https://www.paypal.com/ga/webapps/mpp/ua/useragreement-full" target="_blank" rel="noopener noreferrer"> Terms of Service </a>
                             and 
                            <a className="link" href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full?locale.x=en_US" target="_blank" rel="noopener noreferrer"> Privacy Policy </a>
                            </p>
                          </GridItem>
                          <GridItem>
                            <DonateButton />
                          </GridItem>
                          <GridItem>
                            <p>Powered by <a className="payPalLink" href="https://www.paypal.com" target="_blank" rel="noopener noreferrer"><IconSpan>&#xea24;</IconSpan></a>. PayPal account is not required.</p>
                          </GridItem>
                        </GridContainer>
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
        clickedButtonId: state.getIn(['donate', 'clickedButtonId']),
        currentDonationAmount: state.getIn(['donate', 'currentDonationAmount']),
        donationAmountInputFocus: state.getIn(['donate', 'donationAmountInputFocus']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDonationAmountChanged(e) {
            // console.log('handleDonationAmountChanged to: ', e.currentTarget.value);
            const action = actionCreators.donationAmountChanged(e.currentTarget.value);
            dispatch(action);
        },
        handleMoneyButtonClicked(e) {
            // console.log("id: ", e.currentTarget.id);
            // console.log("value: ", e.currentTarget.value);
            const action = actionCreators.moneyButtonClicked(e.currentTarget.id, e.currentTarget.value);
            dispatch(action);
        },
        TurnOnDonationAmountInputFocus() {
            const action = actionCreators.changeDonationAmountInputFocus(true);
            dispatch(action);
        },
        TurnOffDonationAmountInputFocus() {
            const action = actionCreators.changeDonationAmountInputFocus(false);
            dispatch(action);
        }
    }
};

// not helpful for input NaN, ie, constrain the Number type
// DonateSection.propTypes = {
//     currentDonationAmount: PropTypes.number
// };

export default compose(
    withStyles(style),
    withStyles(sectionsStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(DonateSection);