import React, { Component } from 'react';
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Parallax from "components/Parallax/Parallax.jsx";
import MenuItem from "@material-ui/core/MenuItem";

import donateStyle from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.jsx";
import selectStyle from "assets/jss/material-kit-pro-react/customSelectStyle.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

import bgImage from "../../static/elephant.jpg";


class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          donateAmount: ""
        };
      }

   handleSimple = event => {
     this.setState({ [event.target.name]: event.target.value });
   };

    render() {
        const { classes } = this.props;

        return (
                <Parallax image={bgImage}>
                    <div className={classes.container}>
                        <GridContainer>
                          <GridItem
                            xs={12}
                            sm={6}
                            md={6}
                            className={classNames(classes.mlAuto, classes.mrAuto)}
                          >
                            <div className={classes.textCenter}>
                              <h3 color="white" className={classes.title}>You're making a difference</h3>
                              <p className={classes.description}>
                                <br />
                                You have the power to help more students improve their math skills. Your investment will benefit all students in the greater San Antonio area to reveive the best math education. 
                              </p>
                            </div>
                            <Card raised className={classes.card}>

                              <CardBody className={classes.cardBody}>
                                <h5 className={classes.cardTitle}>Donate to San Antonio Math Include </h5>
                                <FormControl
                                  fullWidth
                                  className={classes.selectFormControl}>
                                  <InputLabel
                                      htmlFor="simple-select"
                                      className={classes.selectLabel}>
                                    Donation Amount
                                  </InputLabel>
                                  <Select
                                      MenuProps={{
                                        className: classes.selectMenu
                                      }}
                                      classes={{
                                        select: classes.select
                                      }}
                                      value={this.state.donateAmount}
                                      onChange={this.handleSimple}
                                      inputProps={{
                                        name: "donateAmount",
                                        id: "simple-select"
                                      }}>
                                      <MenuItem
                                        disabled
                                        classes={{
                                          root: classes.selectMenuItem
                                        }}>
                                        Select Donation Amount
                                      </MenuItem>
                                      <MenuItem
                                        classes={{
                                          root: classes.selectMenuItem,
                                          selected: classes.selectMenuItemSelected
                                        }}
                                        value="1">
                                        $1
                                      </MenuItem>
                                      <MenuItem
                                        classes={{
                                          root: classes.selectMenuItem,
                                          selected: classes.selectMenuItemSelected
                                        }}
                                        value="2">
                                        $5
                                      </MenuItem>
                                      <MenuItem
                                        classes={{
                                          root: classes.selectMenuItem,
                                          selected: classes.selectMenuItemSelected
                                        }}
                                        value="3">
                                        $10
                                      </MenuItem>
                                      <MenuItem
                                        classes={{
                                          root: classes.selectMenuItem,
                                          selected: classes.selectMenuItemSelected
                                        }}
                                        value="4">
                                        $20
                                      </MenuItem>
                                  </Select>
                                </FormControl>
                                <form
                                  action="https://www.paypal.com/cgi-bin/webscr"
                                  method="post"
                                  target="_blank"
                                >
                                  <input type="hidden" name="cmd" value="_s-xclick" />
                                  <input type="hidden" name="hosted_button_id" value="GRHSFUQSWWHZJ" />
                                  <input
                                    type="image"
                                    src="https://i.postimg.cc/yWqHkQHQ/sami-donate-long-trim.png"
                                    border="0"
                                    name="submit"
                                    title="PayPal - The safer, easier way to pay online!"
                                    alt="Donate with PayPal button"
                                    style={{width:510}}
                                  />
                                  <img
                                    alt=""
                                    border="0"
                                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                                    width="1"
                                    height="1"
                                  />
                                </form>
                                  <p className={classes.description}>
                                    Please click the button above to donate. PayPal account is not required.
                                  </p>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
        );
    }
}

Donate.propTypes = {
    classes: PropTypes.object
};

export default compose(
    withStyles(landingPageStyle),
    withStyles(donateStyle),
    withStyles(selectStyle)
)(Donate)