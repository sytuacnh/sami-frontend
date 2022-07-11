import React, { PureComponent } from 'react';
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import FreeTutoring20202021Cards from "./FreeTutoring20202021Cards";
import FreeTutoring20202021ScheduleTable from "./FreeTutoring20202021ScheduleTable";

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

class FreeTutoring20202021Section extends PureComponent {

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
                      <b>Weekly Schedule</b>
                    </h2>
                    <FreeTutoring20202021ScheduleTable />
                    <h2 className={classes.title}>Program Description</h2>
                    <div className={classes.eventFont}>
                      <p className={classes.eventFont}>
                        The <b>2020-2021 Free Tutoring Program</b> is going online! There are multiple benefits of studying online. Studying online gives students more flexibility and lowers the cost of study. They can choose their own learning environment that works best for their needs and don’t have to commute to class. This saves the cost of housing for us and transportation for them. Students will learn to be more disciplined and take more responsibilities. We are also able to offer more choices for course topics. 
                        <br />
                        <br />
                        This year, our online program offers four <b>Classes</b>, seven subjects for <b>Office Hours</b>, and <b>Test Preparation</b> for three standardized Math tests. The four classes are for students in K-8. We group every two grades together. Our tutors will teach class for each group.
                        <br />
                        <br />
                        In Office Hours, tutors don't teach class. They will answer students questions such as about homework assignments, quizzes, and/or tests. The Office Hours are for all students in K-12. 
                        <br />
                        <br />
                        The Test Preparation Class will prepare high school students (9-12) for three standardized Math tests: SAT Math Section, ACT Math Section, and SAT 2 Math (1 and 2). <b>All tutors for this class have received a perfect score</b> for each test (800, 36, and 800). They have developed high efficiency testing strategies for all SAT math tests. They will share them with you without any reservation. All classes are free of charge. Students don't need to pay for expensive test preparation courses. Here at SaMi, we have the best tutors and we offer all students with equal education opportunities.  
                      </p>
                      <div> 
                        <h3><b>Classes:</b></h3>
                        <ul>
                          <li>Tadpoles (K-1)</li>
                          <li>Whirlpool (2-3)</li>
                          <li>Andromeda (4-5)</li>
                          <li>Triangulum (6-8)</li>
                        </ul>
                      </div>
                      <div> 
                        <h3><b>Office Hours:</b></h3>
                        <ul>
                          <li>Elementary Math</li>
                          <li>Pre-Algebra</li>
                          <li>Algebra 1</li>
                          <li>Algebra 2</li>
                          <li>Pre-Cal</li>
                          <li>Cal AB</li>
                          <li>Cal BC</li>
                        </ul>
                      </div>
                      <div> 
                        <h3><b>Test Preparation:</b></h3>
                        <ul>
                          <li>SAT Math 800</li>
                          <li>ACT Math 36</li>
                          <li>SAT 2 Math 800</li>
                          <li>Algebra 2</li>
                          <li>Pre-Cal</li>
                          <li>Cal AB</li>
                          <li>Cal BC</li>
                        </ul>
                      </div>
                      <p className={classes.eventFont}>
                        <b>The 2020-2021 Program is from September 23 to November 15 in 2019, and January 13 to March 14, in 2020.</b>
                        <br />
                        <br />
                        If you have any questions, please contact us at <b>sanantoniomathinclude@gmail.com</b>.  
                      </p>
                    </div>
                    <FreeTutoring20202021Cards />
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
)(FreeTutoring20202021Section);