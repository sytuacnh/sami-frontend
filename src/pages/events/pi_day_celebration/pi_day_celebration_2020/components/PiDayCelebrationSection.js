import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";

import PiDayCelebrationCards from "./PiDayCelebrationCards";
import PiDayCelebrationCarousel from "./PiDayCelebrationCarousel";

const style = {
    paddingCustom: {
        padding: "30px 0"
    },
    paddingTop: {
        paddingTop: "30px"
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
                    <div className={classes.paddingTop} id="awards">
                      <h2 className={classes.title}>Mathronauts Award for High Achieving Students</h2>
                      <div className={classes.eventFont}>
                        <h3><b>Distinguished Achievement Awards</b></h3>
                        <ul>
                          <li>James Clay (Tutor Eric Zou)</li>
                          <li>Myung Clay (Tutor Allen Liang)</li>
                          <li>Advay Jain (Tutor Hannah Abraham)</li>
                          <li>Athena Kim (Tutor Hannah Abraham)</li>
                          <li>Ian Oviedo (Tutor Allen Liang)</li>
                          <li>Alexander Soto (Tutor Allen Liang)</li>
                          <li>Bohan Zhang (Tutor Annastina Taboada)</li>
                        </ul>
                        <h3><b>Distinguished Leadership Award</b></h3>
                        <ul>
                          <li>Eric Zou (for his contribution in the 2019-2020 curriculum development)</li>
                        </ul>
                        <h3><b>Distinguished Volunteer Awards</b></h3>
                        <ul>
                          <li>Hannah Abraham (for her distinguished volunteer service in the 2019-2020 Free Tutoring Program)</li>
                          <li>Ayush Kumar  (for his distinguished volunteer service in the 2019 Summer@SaMi Summer Camp)</li>
                          <li>Allen Liang  (for his distinguished volunteer service in the 2019 Summer@SaMi Summer Camp)</li>
                        </ul>
                      </div>
                    </div>
                    <PiDayCelebrationCards />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        );
    }
}


export default compose(
    withStyles(style),
    withStyles(sectionPillsStyle),
)(PiDayCelebrationSection);