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
import React from "react";

import { connect } from 'react-redux';
import compose from 'recompose/compose'
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import mathTwoGirls from "../../../static/math_two_girls.jpg";
import tutorHelp from "../../../static/tutor_help_2.jpg";

import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";
import { TabContentWrapper, ProgramFormWrapper } from "../style";
import ProgramForm from "./ProgramForm";
import { actionCreators } from '../store';

function SectionProgramPills({ ...props }) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
            <NavPills
              alignCenter
              color="info"
              tabs={[
                {
                  tabButton: "Summer Camp",
                  tabContent: (
                    <TabContentWrapper>
                      <h3>
                        Summer Camp 2019
                      </h3>
                      <p>
                        Our summer camps are FREE for all students in grades K-8. They are supervised by college professors and led by high school students and national/regional math contest winners. If your child is in grades K-8, please fill out this form.  
                        <br />
                        <br />
                        <b>可以插入图片</b>
                        <br />
                        <br />
                        Three <b>Weeks</b>: July 22-July 26, July 29-August 2, August 5-August 9. All three weeks are the same so you just need to sign up for one week.
                        Two Math Sessions: 9-12 AM OR 1-4 PM.
                        Two Daycare Sessions: 9-12 AM OR 1-4 PM. The Daycare Session is for parents who are unable to pick/drop their child in the middle of the day. The daycare session provides time for kids to relax.
                        <br />
                        <br />
                        You can sign up your child for the following <b>sessions</b>:
                        1.  9-12 AM Math Session only.
                        2.  1-4 PM Math Session only.
                        3.  9-12 AM Math Session AND 1-4 PM Daycare Session.
                        4.  9-12 AM Daycare Session AND 1-4 PM Math Session.
                        If you sign up option 3 or 4, your child needs to bring his/her own lunch. 
                        <br />
                        <br />
                        For low income families, <b>scholarships</b> are provided to cover transportation costs and lunch, for any options you sign up.
                        <br />
                        <br />
                        For each 9-12 AM Math Session or 1-4 PM Math Session, there are four <b>classes</b>:
                        Tadpoles (K-1).
                        Whirlpool (2-3).
                        Andromeda (4-5).
                        Triangulum (6-8, MATHCOUNTS & AMC8).

                        Every class has a 25 student limit. These who sign up after the 25 student limit will be automatically waitlisted.
                        <br />
                        <br /> 
                        <b>Address</b>: Basis San Antonio Shavano, 4114 Lockhill Selma Rd, San Antonio, TX 78230.  
                      </p>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <Card
                            raised
                            background
                            style={{ backgroundImage: "url(" + mathTwoGirls + ")" }}
                          >
                            <CardBody background>
                              <h6 className={classes.category}>Summer Camp 2019</h6>
                              <h3 className={classes.cardTitle}>
                                Student Register
                              </h3>
                              <p className={classes.category}>
                                Form description...
                              </p>
                              <Button round color="rose" onClick={() => {props.handleFormSignUpClick(0)}}>
                                <FormatAlignLeft className={classes.icons} /> Sign Up
                              </Button>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <Card
                            raised
                            background
                            style={{ backgroundImage: "url(" + tutorHelp + ")" }}
                          >
                            <CardBody background>
                              <h6 className={classes.category}>Summer Camp 2019</h6>
                              <h3 className={classes.cardTitle}>
                                Tutor Register
                              </h3>
                              <p className={classes.category}>
                                Form description...
                              </p>
                              <Button round color="rose" onClick={() => {props.handleFormSignUpClick(1)}}>
                                <FormatAlignLeft className={classes.icons} /> Sign Up
                              </Button>
                            </CardBody>
                          </Card>
                        </GridItem>
                        
                      </GridContainer>
                      <ProgramFormWrapper className={props.formClicked && props.selectedForm === 0? 'clicked' : ''}>
                        Student Register Form
                      </ProgramFormWrapper>
                      <ProgramFormWrapper className={props.formClicked && props.selectedForm === 1? 'clicked' : ''}>
                        <Card className={classes.card2}>
                          <CardHeader contact color="info" className={classes.textCenter}>
                            <h4 className={classes.cardTitle}>Tutor Register Form</h4>
                          </CardHeader>
                          <CardBody>
                            <ProgramForm />
                          </CardBody>
                          <CardFooter className={classes.justifyContentBetween}>
                            Footer of Register form
                          </CardFooter>
                        </Card>
                      </ProgramFormWrapper>
                    </TabContentWrapper>
                  )
                },
                {
                  tabButton: "Pi Day Celebration",
                  tabContent: "Another Program"
                }
              ]}
            />
            {/*<div className={classes.tabSpace} /> */}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

SectionProgramPills.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        selectedForm: state.getIn(['registerProgram', 'selectedForm']),
        formClicked: state.getIn(['registerProgram', 'formClicked'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormSignUpClick(formID) {
            const action = actionCreators.formSignUp(formID);
            dispatch(action);  
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(sectionPillsStyle)
)(SectionProgramPills)