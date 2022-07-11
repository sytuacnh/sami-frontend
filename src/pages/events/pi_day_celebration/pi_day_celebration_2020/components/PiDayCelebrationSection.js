import React, { PureComponent } from 'react';
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";

import PiDayCelebrationCards from "./PiDayCelebrationCards";
// import PiDayCelebrationCarousel from "./PiDayCelebrationCarousel";

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
            <div className={(classes.contactContent, classes.paddingCustom)}>
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
					  The Celebration of Inclusive Excellence on Pi Day is an <b>annual</b> ceremony to bring students of all races to celebrate their math achievements across the nation. 
                      The keynote speaker will talk about their <b>successful pathway</b> to math. Mathletes in Action is a count-down round game where a pair of students will compete with each other by <b>solving a math problem</b> in <b>45</b> seconds. 
                      This game is suitable for all students and we welcome all students to play it.                       </p>
                    <div className={classes.paddingTop} id="awards">
                      <h2 className={classes.title}>Mathronauts Award for Distinguished Students</h2>
					  We award students who contribute to their class environment and have made significant progress during their course of learning.
                      <div className={classes.eventFont}>
                        <h3><b>Distinguished Achievement Awards</b></h3>
                        <ul>
                          <li>Jasmin Vazquez (Tutor Francesca Finol)</li>
                          <li>Sybil Perez (Tutor Laura Maldonado)</li>
                          <li>Paisley Mendez (Tutor Nancy Abraham)</li>
                          <li>Maali Whitehead (Tutor Josh Cevey)</li>
                          <li>Sybil Perez (Tutor Sahana Babu)</li>
                          <li>Brielle Hinojos (Tutor Sahana Babu)</li>
                          <li>Sybil Perez (Tutor Parth Sangani)</li>
						  <li>Alexander Soto (Tutor Allen Liang)</li>
						  <li>Scarlett Goldsmith (Tutor Tanya Lertpradist)</li>
						  <li>Vivían González (Tutor Elijah Whong)</li>
						  <li>Jehann Perez (Tutor Tesjsai Yelamanchili)</li>
						  <li>Diya Sangani (Tutor Tesjsai Yelamanchili)</li>
						  <li>Joaquin Torres Caleb (Tutor Tesjsai Yelamanchili)</li>
					 
						  						 						 
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