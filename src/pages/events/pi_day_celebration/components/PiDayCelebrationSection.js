import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import celebrate_pi_day from "../../../../static/events/pi_day_celebration/celebrate_pi_day.jpg";
import trinity from "../../../../static/events/pi_day_celebration/trinity.jpg";

const style = {
    paddingCustom: {
        padding: "30px 0"
    },
    eventFont: {
        fontSize: "18px",
        textAlign: "left"
    }
}

class PiDayCelebrationSection extends PureComponent {

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
                    <h2 className={classes.title}>Event Description</h2>
                    <p className={classes.eventFont}>
                      The Celebration of Inclusive Excellence on Pi Day is an <b>annual</b> ceremony to bring all students in math to the forefront. 
                      The three keynote speakers will talk about math pathways in three different phases: <b>high school</b>, <b>college</b>, and <b>career</b>. 
                      <br />
                      <br />
                      Mathletes in Action is a count-down round game where a pair of students will play with each other by <b>solving a math problem</b> in <b>45</b> seconds. 
                      This game is suitable for all students and we welcome all students to play the game.   
                    </p>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <Card
                          raised
                          background
                          style={{ backgroundImage: "url(" + celebrate_pi_day + ")" }}
                        >
                          <CardBody background>
                            <h6 className={classes.category}>Pi Day Celebration</h6>
                            <h3 className={classes.cardTitle}>
                              Program Poster
                            </h3>
                            <p className={classes.textCenter}>
                              Click button below to view our poster
                            </p>
                            <a className="link" href="https://drive.google.com/open?id=1nf3HOtN93QQGtB-k8O4ttdwe-hzCldnb" target="_blank" rel="noopener noreferrer">
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
                          style={{ backgroundImage: "url(" + trinity + ")" }}
                        >
                          <CardBody background>
                            <h6 className={classes.category}>Pi Day Celebration</h6>
                            <h3 className={classes.cardTitle}>
                              Map
                            </h3>
                            <p className={classes.category}>
                              To view the map of Trinity University
                            </p>
                            <a className="link" href="https://drive.google.com/open?id=1BRIuFTOEtOGgMm8rqgecozn3Sh1f_fVM" target="_blank" rel="noopener noreferrer">
                                <Button round color="rose">
                                    <FormatAlignLeft className={classes.icons} />View Map
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


export default compose(
    withStyles(style),
    withStyles(featuresStyle),
    withStyles(sectionPillsStyle),
)(PiDayCelebrationSection);