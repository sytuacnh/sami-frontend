import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import SummerAtSaMiCards from "./SummerAtSaMiCards";
import SummerAtSaMiCarousel from "./SummerAtSaMiCarousel";

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
    },
    cardTitle: {
      fontWeight: "700"
    }
}

class SummerAtSaMiSection extends PureComponent {

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
                      Our summer camps are <b>FREE</b> for all students in grades K-12. They are supervised by college professors and led by high school students and national/regional math contest winners. If your child is in grades K-12, please fill out this form.  
                      <br />
                      <br />
                      For low income families, the {" "} 
                      <Link to='/casting-your-future-scholarship' target="_blank" className="link">
                          <b>Casting Your Future Scholarship</b>
                      </Link>
                      {" "} are provided to cover part of your remote learning expenses, such as printing cost, home internet service, learning materials, books, etc, for any options you sign up.
                      <br />
                      <br />
                      <b>Three Weeks </b>(Monday to Friday): 
                      <ol>
                        <li>July 18-July 22, 2022</li>
                        <li>July 25-July 29, 2022</li>
                        <li>August 1-August 5, 2022</li>
                      </ol>
                      <ul>
                        <li>All three weeks are the same (i.e. a class only lasts for one week but will be taught again with the same information during the other two weeks). A student can take a maximum of two courses in one week (one during the AM session and the other during the PM session). If the student would like to take additional classes, they can sign up for more than one week. </li>
                      </ul>
                      <b>Two Sessions</b>:
                      <ol>
                        <li>9-12 AM Central Daylight Time</li>
                        <li>1-4 PM Central Daylight Time</li>
                      </ol>
                      <ul>
                        <li>You can sign up for the AM session, the PM sessions, or both.</li>
                        <li>Every class has a 20 student limit. These who sign up after the 20 student limit will be automatically waitlisted.</li>
                      </ul>
                      <br />
                      There are <b>nine math classes</b>:
                      <ul>
                        <li>Tadpoles (Grades K-1)</li>
                        <li>Whirlpool (Grades 2-3)</li>
                        <li>Andromeda (Grades 4-5)</li>
                        <li>Prealgebra (Grades 6-8)</li>
                        <li>Algebra I (Grades 6-8)</li>
                        <li>Algebra II (Grades 6-8)</li>
						<li>Calculus (Grades 8-12)</li>		
						<li>MAA Pre-AMC (Grades 5-8)</li>		
						<li>MAA AMC 8 (Grades 6-8)</li>								
                      </ul>
                      There are <b>six computer science classes</b>:
                      <ul>
                        <li>Python for Kids (Grades 3-5)</li>
						<li>Java for Beginners (Grades 6-12)</li>
						<li>Java Coding Camp (Grades 6-12)</li>											
                        <li>C++ for Beginners (Grades 6-12)</li>
						<li>C++ Coding Camp (Grades 6-12)</li>
						<li>Bytes of AI (Grades 9-12)</li>
                      </ul>
					  There are <b>three cscience classes</b>:
                      <ul>
                        <li>Introduction to Biology (Grades 6-8)</li>
						<li>Introduction to Chemistry (Grades 6-8)</li>
						<li>Introduction to Physics (Grades 6-8)</li>											
                      </ul>
                      <br /> 
                      <b>Address</b>: Zoom Online Platform.  
                    </p>
                    <SummerAtSaMiCards />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        );
    }
}



// export default withStyles(null)(SummerAtSaMiSection);

export default compose(
    withStyles(style),
    withStyles(featuresStyle),
    // withStyles(sectionPillsStyle),
)(SummerAtSaMiSection);