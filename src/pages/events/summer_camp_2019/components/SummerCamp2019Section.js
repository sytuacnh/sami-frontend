import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";

import mathTwoGirls from "../..//../../static/summer_camp/math_two_girls.jpg";
import tutorHelp from "../../../../static/summer_camp/tutor_help_2.jpg";
import lawn from "../../../../static/summer_camp/lawn.jpg";
import piece from "../../../../static/summer_camp/piece.jpg";

const style = {
    paddingCustom: {
        padding: "30px 0"
    },
    eventFont: {
        fontSize: "16px",
        textAlign: "left"
    }
}

class SummerCamp2019Section extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div className={classes.contactContent, classes.paddingCustom}>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                      classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)
                    }
                  > 
                    <h2 className={classes.title}>Program Description</h2>
                    <p className={classes.eventFont}>
                      Our summer camps are FREE for all students in grades K-8. They are supervised by college professors and led by high school students and national/regional math contest winners. If your child is in grades K-8, please fill out this form.  
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
                          style={{ backgroundImage: "url(" + lawn + ")" }}
                        >
                          <CardBody background>
                            <h6 className={classes.category}>Summer Camp 2019</h6>
                            <h3 className={classes.cardTitle}>
                              Program Poster
                            </h3>
                            <p className={classes.textCenter}>
                              Click button below to view our poster
                            </p>
                            <a className="link" href="https://drive.google.com/open?id=1Fe7zxwDhEDsdwgWNtFGvsXcYr7g_T7IS" target="_blank" rel="noopener noreferrer">
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
                          style={{ backgroundImage: "url(" + piece + ")" }}
                        >
                          <CardBody background>
                            <h6 className={classes.category}>Summer Camp 2019</h6>
                            <h3 className={classes.cardTitle}>
                              F&Q
                            </h3>
                            <p className={classes.category}>
                              Click button below to view F&Q
                            </p>
                            <a className="link" href="https://drive.google.com/open?id=1yUFUXhub6TutIXbuAAc2pprZBiozVJRlC_xFYeKekck" target="_blank" rel="noopener noreferrer">
                                <Button round color="rose">
                                    <FormatAlignLeft className={classes.icons} />View F&Q
                                </Button>
                            </a>
                          </CardBody>
                        </Card>
                      </GridItem>
                      
                    </GridContainer>
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
                            <p className={classes.textCenter}>
                              Click button below to join as a student
                            </p>
                            <a className="link" href="https://docs.google.com/forms/d/1o1RESzltjK8KW1jQDrzNvU-3cuDYiD-WSU9dJ0AtecU/edit" target="_blank" rel="noopener noreferrer">
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
                            <h6 className={classes.category}>Summer Camp 2019</h6>
                            <h3 className={classes.cardTitle}>
                              Tutor Register
                            </h3>
                            <p className={classes.category}>
                              Click button below to join as a tutor
                            </p>
                            <a className="link" href="https://drive.google.com/open?id=1EeEJgS8c8cFz0fL8idHa6vOmcdhTYfyYIqrbmyWD7K8" target="_blank" rel="noopener noreferrer">
                                <Button round color="rose">
                                    <FormatAlignLeft className={classes.icons} />Sign Up
                                </Button>
                            </a>
                          </CardBody>
                        </Card>
                      </GridItem>
                      
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        );
    }
}



// export default withStyles(null)(SummerCamp2019Section);

export default compose(
    withStyles(style),
    withStyles(featuresStyle),
)(SummerCamp2019Section);