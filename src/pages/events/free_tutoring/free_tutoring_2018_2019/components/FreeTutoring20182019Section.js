import React, { PureComponent } from 'react';
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
// import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import mathTwoGirls from "../../../../../static/events/math_two_girls.jpg";
import tutorHelp from "../../../../../static/events/tutor_help_2.jpg";
// import lawn from "../../../../../static/events/.jpg";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import FreeTutoring20182019Carousel from "./FreeTutoring20182019Carousel";


const style = {
    paddingCustom: {
        padding: "30px 0"
    },
    eventFont: {
        fontSize: "18px",
        textAlign: "left"
    },
    cardTitle: {
      fontWeight: "700"
    }
}

class FreeTutoring20182019Section extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div className={classNames(classes.contactContent, classes.paddingCustoa)}>
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
                      Our tutoring sessions are organized by college professors and professionals and led by high school students and regional math contest winners. The tutoring sessions are <b>FREE</b> for all students. 
                      <br />
                      <br />
                      Two sessions: 4:15pm-5:05pm and 5:10pm-6pm on Fridays, January 4th - April 19th, 2019.
                      <br />
                      <br />
                      Address: Rooms 111 and 112, Basis San Antonio Shavano, 4114 Lockhill Selma Rd, San Antonio, TX 78230.  
                    </p>
                    <FreeTutoring20182019Carousel />
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <Card
                          raised
                          background
                          style={{ backgroundImage: "url(" + mathTwoGirls + ")" }}
                        >
                          <CardBody background>
                            <h6 className={classes.category}>Free Tutoring 2018-2019</h6>
                            <h3 className={classes.cardTitle}>
                              Student Register
                            </h3>
                            <p className={classes.textCenter}>
                              Click button below to join as a student
                            </p>
                            <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLScacWItAeAel6myVzpSsY8mLLSF_IFBk7xHf-kkJsquwJfJkw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
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
                            <h6 className={classes.category}>Free Tutoring 2018-2019</h6>
                            <h3 className={classes.cardTitle}>
                              Tutor Register
                            </h3>
                            <p className={classes.category}>
                              Click button below to join as a tutor
                            </p>
                            <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLScc2cLn086JoPlqUYfveoXeaAtToyqlNJU1_a54aJOsLVzHxA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
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



// export default withStyles(null)(FreeTutoring20182019Section);

export default compose(
    withStyles(style),
    withStyles(featuresStyle),
    // withStyles(sectionPillsStyle),
)(FreeTutoring20182019Section);