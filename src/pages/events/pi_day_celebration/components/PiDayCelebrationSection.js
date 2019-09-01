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
                    <div className={classes.paddingCustom}>
                      <h2 className={classes.title}>Mathronauts Award for High Achieving Students</h2>
                      <div className={classes.eventFont}>
                        <h3><b>Academic Excellence Awards</b></h3>
                        <h4><b>First Place</b></h4>
                        <ul>
                          <li>Poojaswi Gudapati</li>
                          <li>Anish Kalva</li>
                          <li>Anshuman Chhawcharia</li>
                        </ul>
                        <h4><b>Second Place</b></h4>
                        <ul>
                          <li>Eddie Bao</li>
                          <li>James Lu</li>
                          <li>Kaden Fenno</li>
                          <li>Navom Gupta</li>
                          <li>Saad Mustafa</li>
                          <li>Shiven Patel</li>
                          <li>Vedant Patel</li>
                        </ul>
                        <h4><b>Third Place</b></h4>
                        <ul>
                          <li>Rushil Patel</li>
                          <li>Bitan Bhattacharya</li>
                          <li>Dharmik Kamballi</li>
                          <li>Mitul Sendilkumar</li>
                        </ul>
                        <h3><b>Outstanding Achievement Awards</b></h3>
                        <ul>
                          <li>Poojaswi Gudapati</li>
                          <li>Aadi Iyengar</li>
                          <li>Ellen Geng</li>
                          <li>Kennedy Fenno</li>
                          <li>Ansh Chandak</li>
                          <li>Bethel Getachew</li>
                          <li>Simeon Gore</li>
                          <li>Alicia Johnson </li>
                          <li>Mateo Machado</li>
                          <li>Ella Zou-Bao</li>
                          <li>Jehan Haluwana</li>
                          <li>Shamita Tripathy</li>
                          <li>Shamita Tripathy</li>
                          <li>Vishal Kothuri</li>
                          <li>Luciano Martinez</li>
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