import React, { PureComponent } from 'react';
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import FreeTutoring20222023Cards from "./FreeTutoring20222023Cards";
import FreeTutoring20222023ScheduleTable from "./FreeTutoring20222023ScheduleTable";

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

class FreeTutoring20222023Section extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div className={classNames(classes.contactContent, classes.paddingCustom)}>
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
                    <FreeTutoring20222023ScheduleTable />
                    <h2 className={classes.title}>Program Description</h2>
                    <div className={classes.eventFont}>
                      <p className={classes.eventFont}>
                        SaMi <b>2022-2023 Free Tutoring Program</b> is an free online program for all students around the world! There are multiple benefits of studying online. Studying online gives students more flexibility and lowers the cost of study. They can choose their own learning environment that works best for their needs and don’t have to commute to class. This saves the cost of housing for us and transportation for them. Students will learn to be more disciplined and take more responsibilities. We are also able to offer more choices for course topics. 
                        <br />
                        <br />
                        This year, our online program offers nine <b>Math Courses</b>, four <b>Computer Science Courses</b>, and threee <b>Science Courses</b>. For every course, the topic is the same within a week so you just need to attend one day. We offer multiple sections on Saturday and Sunday to give students a great number of choices. Each week's topic is independent and not a prerequisite to each other. If a student misses a week, this won't affect his/her class next week. 
                        <br />
                        <br />
                      </p>
                      <div> 
                        <h3><b>Math Classes:</b></h3>
                        <ul>
                          <li>Tadpoles (Grades K-1)</li>
                          <li>Whirlpool (Grades 2-3)</li>
                          <li>Andromeda (Grades 4-5)</li>
                          <li>Triangulum (Grades 6-8)</li>
						  <li>MAA Pre-AMC (Grades 5-8)</li>	
						  <li>MAA AMC 8 (Grades 6-8)</li>	
						  <li>MAA Pre-AMC (Grades 6-8)</li>							  
						  <li>Calculus (Grades 8-12)</li>	
						  <li>AB Calculus AB Practices (Grades 9-12)</li>	
						  <li>SAT Math (Grades 8-12)</li>
                        </ul>
                      </div>
                      <div> 
                        <h3><b>Computer Science Classes:</b></h3>
                        <ul>
                          <li>Python for Kids (Grades 3-5)</li>
                          <li>Java (Grades 6-12)</li>                          
                          <li>C++ (Grades 6-12)</li>	
                          <li>AP Computer Science A Practice (Grades 9-12)</li>							  
                        </ul>
                      </div>
                      <div> 
                        <h3><b>Science Classes:</b></h3>
                        <ul>
                          <li>Biology (Grades 6-12)</li>
                          <li>Chemistry (Grades 6-12)</li>                          
                          <li>CBiology (Grades 6-12)</li>	
                        </ul>
                      </div>
                      <p className={classes.eventFont}>
                        <b>The 2022-2023 Program is from September 24 to November 13 in 2022, and January 7 to February 19, in 2023.</b>
                        <br />
                        <br />
                        If you have any questions, please contact us at <b>sanantoniomathinclude@gmail.com</b>.  
                      </p>
                    </div>
                    <FreeTutoring20222023Cards />
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
)(FreeTutoring20222023Section);