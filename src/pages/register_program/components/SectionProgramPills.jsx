/*

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
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import classNames from "classnames";
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
import Table from "components/Table/Table.jsx";
import mathTwoGirls from "../../../static/events/summer_camp/math_two_girls.jpg";
import tutorHelp from "../../../static/events/summer_camp/tutor_help_2.jpg";
import lawn from "../../../static/events/summer_camp/lawn.jpg";
import piece from "../../../static/events/summer_camp/piece.jpg";
import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";
import { TabContentWrapper } from "../style";
import ProgramForm from "./ProgramForm";
import { actionCreators } from '../store';
import SummerAtSaMi2019Cards from "../../events/summer_at_sami_2019/components/SummerAtSaMi2019Cards";
import PiDayCelebrationCards from "../../events/pi_day_celebration/components/PiDayCelebrationCards";

// import { Cards as Tutoring20182019 } from "../../events/free_tutoring_2018_2019/components/Cards";

const style = {
     paddingCustom: {
         padding: "20px"
     },
     cellText: {
        fontSize: "16px",
        textAlign: "center"
     }
}

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
              className={classes.tabFont}
              tabs={[
                {
                  tabButton: "Free Tutoring 2019-2020",
                  tabContent: (
                    <TabContentWrapper >
                      <div className={classes.paddingCustom}>
                        <Table
                          tableHead={[<b>Program Name</b>, <b>Information</b>, <b>Previous Year</b>, <b>Status</b>]}
                          tableData={[
                            ["Free Tutoring 2019-2020", 
                              <Link to='/tutoring' target="_blank" className="link">
                                Description Page
                              </Link>, 
                              <Link to='/free-tutoring-2018-2019' target="_blank" className="link">
                                2018-2019
                              </Link>,
                            "Ongoing"],
                          ]}
                          customCellClasses={[
                            classes.cellText,
                            classes.cellText,
                            classes.cellText,
                            classes.cellText
                          ]}
                          customClassesForCells={[0, 1, 2, 3]}
                          customHeadCellClasses={[
                            classes.textCenter,
                            classes.textCenter,
                            classes.textCenter,
                            classes.textCenter
                          ]}
                          customHeadClassesForCells={[0, 1, 2, 3]}
                        />
                      </div>
                      <GridContainer>
                          <GridItem xs={12} sm={6} md={6}>
                            <Card
                              raised
                              background
                              style={{ backgroundImage: "url(" + lawn + ")" }}
                            >
                              <CardBody background>
                                <h6 className={classes.category}>Free Tutoring 2019-2020</h6>
                                <h3 className={classes.cardTitle}>
                                  Program Poster
                                </h3>
                                <p className={classes.textCenter}>
                                  Click button below to view our poster
                                </p>
                                <a className="link" href="https://drive.google.com/open?id=1JZXmvN6qvU1YSrbte5a6hsU_FWw8DjPE" target="_blank" rel="noopener noreferrer">
                                    <Button round color="rose">
                                        <FormatAlignLeft className={classes.icons} />Sign Up
                                    </Button>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={6} md={6}>
                            <Card
                              raised
                              background
                              style={{ backgroundImage: "url(" + mathTwoGirls + ")" }}
                            >
                              <CardBody background>
                                <h6 className={classes.category}>Free Tutoring 2019-2020</h6>
                                <h3 className={classes.cardTitle}>
                                  Student Register
                                </h3>
                                <p className={classes.textCenter}>
                                  Click button below to join as a student
                                </p>
                                <a className="link" href="" target="_blank" rel="noopener noreferrer">
                                    <Button round color="rose">
                                        <FormatAlignLeft className={classes.icons} />Sign Up
                                    </Button>
                                </a>
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
                                <h6 className={classes.category}>Free Tutoring 2019-2020</h6>
                                <h3 className={classes.cardTitle}>
                                  Tutor Register
                                </h3>
                                <p className={classes.category}>
                                  Click button below to join as a tutor
                                </p>
                                <a className="link" href="https://drive.google.com/open?id=1Z834W0SEKYXf5FbsxREGWVsaZVMD0euWSJU_DSiLdhI" target="_blank" rel="noopener noreferrer">
                                    <Button round color="rose">
                                        <FormatAlignLeft className={classes.icons} />Sign Up
                                    </Button>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={6} md={6}>
                            <Card
                              raised
                              background
                              style={{ backgroundImage: "url(" + piece + ")" }}
                            >
                              <CardBody background />
                            </Card>
                          </GridItem>
                      </GridContainer>
                    </TabContentWrapper>
                  )
                },
                {
                  tabButton: "Summer@SaMi 2019",
                  tabContent: (
                    <TabContentWrapper >
                      <div className={classes.paddingCustom}>
                        <Table
                          tableHead={[<b>Program Name</b>, <b>Information</b>,<b>Status</b>]}
                          tableData={[
                            ["Summer@SaMi 2019", 
                              <Link to='/summer-at-sami-2019' target="_blank" className="link">
                                Description Page
                              </Link>, 
                            "Ended"],
                          ]}
                          customCellClasses={[
                            classes.cellText,
                            classes.cellText,
                            classes.cellText
                          ]}
                          customClassesForCells={[0, 1, 2]}
                          customHeadCellClasses={[
                            classes.textCenter,
                            classes.textCenter,
                            classes.textCenter
                          ]}
                          customHeadClassesForCells={[0, 1, 2]}
                        />
                      </div>
                      <SummerAtSaMi2019Cards />
                    </TabContentWrapper>
                  )
                },
                {
                  tabButton: "Pi Day Celebration 2019",
                  tabContent: (
                    <TabContentWrapper >
                      <div className={classes.paddingCustom}>
                        <Table
                          tableHead={[<b>Program Name</b>, <b>Information</b>,<b>Status</b>]}
                          tableData={[
                            ["Pi Day Celebration 2019", 
                              <Link to='/pi-day-celebration' target="_blank" className="link">
                                Description Page
                              </Link>, 
                            "Ended"],
                          ]}
                          customCellClasses={[
                            classes.cellText,
                            classes.cellText,
                            classes.cellText
                          ]}
                          customClassesForCells={[0, 1, 2]}
                          customHeadCellClasses={[
                            classes.textCenter,
                            classes.textCenter,
                            classes.textCenter
                          ]}
                          customHeadClassesForCells={[0, 1, 2]}
                        />
                      </div>
                      <PiDayCelebrationCards />
                    </TabContentWrapper>
                  )
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
    withStyles(style),
    withStyles(sectionPillsStyle),
)(SectionProgramPills)