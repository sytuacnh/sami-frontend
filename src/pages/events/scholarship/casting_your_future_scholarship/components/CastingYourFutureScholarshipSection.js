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

class CastingYourFutureScholarshipSection extends PureComponent {

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
                    <h2 className={classes.title}>Scholarship Description</h2>
                    <p className={classes.eventFont}>
                      The <b>Casting Your Future Scholarship</b> is for students with low socioeconomic status to attend the Summer@SaMi Summer Camp. The summer camp is free of charge for all students. Beyond that, the Casting Your Future Scholarship will cover the transportation cost and lunch for students with low socioeconomic. 
                      <br />
                      <br />
                      Student don’t need to apply to us. If they qualify for their school's free lunch program, they just need to email us an official document by the school that can verify this. Then the student will automatically qualify for our scholarship which covers the transportation cost and lunch in his/her camp.  
                      <br />
                      <br />
                      More information can be found in the {" "}
                      <Link to='/summer-at-sami-2019' target="_blank" className="link">
                          <b>Summer@SaMi</b>
                      </Link>
                      {" "} Summer Camp.  
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
)(CastingYourFutureScholarshipSection);