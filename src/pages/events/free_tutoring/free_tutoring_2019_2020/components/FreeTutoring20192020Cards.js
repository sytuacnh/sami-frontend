import React, { PureComponent, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// nodejs library to set properties for components
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import mathTwoGirls from "../../../../../static/events/math_two_girls.jpg";
import tutorHelp from "../../../../../static/events/tutor_help_2.jpg";
import lawn from "../../../../../static/events/lawn.jpg";
import piece from "../../../../../static/events/piece.jpg";

class FreeTutoring20192020Cards extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <GridContainer>
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
                          <a className="link" href="https://drive.google.com/open?id=1BLLutrixoxOJ4ErCoRc8MXSM_lir120WpbtaAk49jFY" target="_blank" rel="noopener noreferrer">
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
                        style={{ backgroundImage: "url(" + lawn + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Free Tutoring 2019-2020</h6>
                          <h3 className={classes.cardTitle}>
                            Program Poster(English)
                          </h3>
                          <p className={classes.textCenter}>
                            Click button below to view our poster
                          </p>
                          <a className="link" href="https://drive.google.com/open?id=1GhuVb0j7sXPpNs4-wsd4QVlI9taERw6H" target="_blank" rel="noopener noreferrer">
                              <Button round color="rose">
                                  <FormatAlignLeft className={classes.icons} />View Poster
                              </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        raised
                        background
                        style={{ backgroundImage: "url(" + lawn + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Free Tutoring 2019-2020</h6>
                          <h3 className={classes.cardTitle}>
                            Program Poster(Spanish)
                          </h3>
                          <p className={classes.textCenter}>
                            Click button below to view our poster
                          </p>
                          <a className="link" href="https://drive.google.com/open?id=1BahdKYFuOm3v1GdH2FrJmuVsSKAEC1z-" target="_blank" rel="noopener noreferrer">
                              <Button round color="rose">
                                  <FormatAlignLeft className={classes.icons} />View Poster
                              </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        raised
                        background
                        style={{ backgroundImage: "url(" + lawn + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Free Tutoring 2019-2020</h6>
                          <h3 className={classes.cardTitle}>
                            Week 1 Schedule(English)
                          </h3>
                          <p className={classes.textCenter}>
                            Click button below to view the schedule
                          </p>
                          <a className="link" href="https://drive.google.com/open?id=1GhuVb0j7sXPpNs4-wsd4QVlI9taERw6H" target="_blank" rel="noopener noreferrer">
                              <Button round color="rose">
                                  <FormatAlignLeft className={classes.icons} />View Schedule
                              </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        raised
                        background
                        style={{ backgroundImage: "url(" + lawn + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Free Tutoring 2019-2020</h6>
                          <h3 className={classes.cardTitle}>
                            Week 1 Schedule(Spanish)
                          </h3>
                          <p className={classes.textCenter}>
                            Click button below to view the schedule
                          </p>
                          <a className="link" href="https://drive.google.com/open?id=1BahdKYFuOm3v1GdH2FrJmuVsSKAEC1z-" target="_blank" rel="noopener noreferrer">
                              <Button round color="rose">
                                  <FormatAlignLeft className={classes.icons} />View Schedule
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
            </Fragment>
        );
    }
}



export default withStyles(featuresStyle)(FreeTutoring20192020Cards);

// export default compose(
//     withStyles(style),
//     withStyles(contactUsStyle),
// )(ContactSection)