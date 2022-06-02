import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
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
                    <h2 className={classes.title}>Program Description</h2>
                    <p className={classes.eventFont}>
                      Our summer camps are <b>FREE</b> for all students in grades K-8. They are supervised by college professors and led by high school students and national/regional math contest winners. If your child is in grades K-8, please fill out this form.  
                      <br />
                      <br />
                      For low income families, the {" "} 
                      <Link to='/casting-your-future-scholarship' target="_blank" className="link">
                          <b>Casting Your Future Scholarship</b>
                      </Link>
                      {" "} are provided to cover transportation costs and lunch, for any options you sign up.
                      <br />
                      <br />
                      <b>Three Weeks</b>: July 22-July 26, July 29-August 2, August 5-August 9. All three weeks are the same so you just need to sign up for one week.
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
                    <SummerAtSaMiCarousel />
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