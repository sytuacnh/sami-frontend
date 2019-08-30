import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import compose from 'recompose/compose'
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
// import bg9 from "assets/img/bg9.jpg";
// import Code from "@material-ui/icons/Code";
// import FormatPaint from "@material-ui/icons/FormatPaint";
// import Dashboard from "@material-ui/icons/Dashboard";
// import ViewCarousel from "@material-ui/icons/ViewCarousel";
import ImportContacts from "@material-ui/icons/ImportContacts";
import SentimentSatisfied from "@material-ui/icons/SentimentSatisfied";
import AccessibilityNew from "@material-ui/icons/AccessibilityNew";
import PeopleTwoTone from "@material-ui/icons/PeopleTwoTone";
import HighQuality from "@material-ui/icons/HighQuality";

const style = {
     paddingCustom: {
         padding: "30px 0"
     }
}

class TutoringSection extends PureComponent {

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
                    <h2 className={classes.title}>Features of Our Program</h2>
                  </GridItem>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                      classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)
                    }
                  >
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <InfoArea
                        vertical
                        icon={ImportContacts}
                        title="Inclusive Curriculum"
                        description="We offer an inclusive curriculum that values different cultures, backgrounds and experiences for all students. The Fun Math class focuses on building up a solid math foundation. The Competitive Math class teaches advanced problem solving strategies. The peer tutors use plain language to explain complex math concepts and make the latter to be accessible for all students."
                        iconColor="warning"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <InfoArea
                        vertical
                        icon={PeopleTwoTone}
                        title="Low Student/Tutor Ratio"
                        description="In every session, we have 20 students and at least 5 tutors. The student/tutor ratio is less than 4/1. This low ratio guarantees that every student will receive close attentions from the tutors."
                        iconColor="rose"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <InfoArea
                        vertical
                        icon={HighQuality}
                        title="High Quality of Tutors"
                        description="All tutors are past and current math contestants. They won international, national and regional contests. They are all passionate about helping each and every student to achieve their success in math. "
                        iconColor="danger"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <InfoArea
                        vertical
                        icon={SentimentSatisfied}
                        title="Affordability"
                        description="Our tutoring sessions are free and students don't need to bring any thing with them. All utensils and snacks are provided by SaMi."
                        iconColor="info"
                      />
                    </GridItem>
                    <GridItem>
                      <InfoArea
                        vertical
                        icon={AccessibilityNew}
                        title="Accessibility"
                        description={"All lectures will be video recorded and available in our YouTube Channel. We want to benefit more students, especially those from disadvantaged families who can't transport their child to Basis Shavano. If you know this kind of the students, please refer them to our YouTube Channel and let them contact us at sanantoniomathinclude@gmail.com. We are happy to provide onsite help in their schools."}
                        iconColor="success"
                      />
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
)(TutoringSection);