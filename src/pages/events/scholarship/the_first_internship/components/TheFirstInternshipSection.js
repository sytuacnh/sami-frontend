import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";


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

class TheFirstInternshipSection extends PureComponent {

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
                    <h2 className={classes.title}>Internship Description</h2>
                    <p className={classes.eventFont}>
                      <b>The First Internship</b> provides the first, paid internships for youth aged 14 to 17 to build career opportunities and goals. At SaMi, we support youths to serve our community and provide greater access to STEM education worldwide. We value their contribution and recognize it in various ways including The First Internship program. 
                      <br />
                      <br />
                      To apply for the internship, you must be a tutor in at least one of SaMi's programs in present year. Please contact us at sanantoniomathinclude@gmail.com if you have any questions.
                      <br />
                      <br />
                    </p>
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
)(TheFirstInternshipSection);