import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import FreeTutoring20212022Cards from "./FreeTutoring20212022Cards";
import FreeTutoring20212022ScheduleTable from "./FreeTutoring20212022ScheduleTable";

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
    },
    leftText: {
      textAlign: "left"
    }
}

class FreeTutoring20212022Section extends PureComponent {

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
                    <h2 className={classes.title}>
                      <b>School Year Schedule</b>
                    </h2>
                    <FreeTutoring20212022ScheduleTable />
                    <h2 className={classes.title}>Program Description</h2>
                    <div className={classes.eventFont}>
                      <p className={classes.eventFont}>
                        The <b>2021-2022 Free Tutoring Program</b> is going online! There are multiple benefits of studying online. Studying online gives students more flexibility and lowers the cost of study. They can choose their own learning environment that works best for their needs and don’t have to commute to class. This saves the cost of housing for us and transportation for them. Students will learn to be more disciplined and take more responsibilities. We are also able to offer more choices for course topics. 
                        <br />
                        <br />
                        This year, our online program offers five <b>Math Courses</b> and five <b>Computer Science Courses</b>. For every course, each week's topic is the same. We offer multiple sections every day to give students a great number of choices. Each week's topic is independent and not a prerequisite to each other. If a student misses a week, this won't affect his/her class next week. 
                        <br />
                        <br />
                      </p>
                      <div> 
                        <h3><b>Math Classes:</b></h3>
                        <ul>
                          <li>Tadpoles (K-1)</li>
                          <li>Whirlpool (2-3)</li>
                          <li>Andromeda (4-5)</li>
                          <li>Triangulum (6-8)</li>
						  <li>Calculus (9-12)</li>					
                        </ul>
                      </div>
                      <div> 
                        <h3><b>Computer Science Classes:</b></h3>
                        <ul>
                          <li>Python for Kids (3-5)</li>
                          <li>Java for Beginners (6-12)</li>
                          <li>Java Coding Camp (6-12)</li>
                          <li>C++ for Beginners (6-12)</li>
						  <li>C++ Coding Camp (6-12)</li>					
                        </ul>
                      </div>
                      <p className={classes.eventFont}>
                        <b>The 2021-2022 Program is from September 25 to November 19 in 2021, and January 8 to March 11, in 2022.</b>
                        <br />
                        <br />
                        If you have any questions, please contact us at <b>sanantoniomathinclude@gmail.com</b>.  
                      </p>
                    </div>
                    <FreeTutoring20212022Cards />
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
)(FreeTutoring20212022Section);