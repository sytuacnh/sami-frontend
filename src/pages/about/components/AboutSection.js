import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Advisors from "./Advisors";
import Officers from "./Officers";
import Chapters from "./Chapters";
import Tutors from "./Tutors";
 
class AboutSection extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div className={classes.contactContent}>
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
                    <Advisors />
                  </GridItem>

                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                      classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)
                    }
                  > 
                    <Officers />
                  </GridItem>

	            <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                      classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)
                    }
                  > 
                    <Chapters />
                  </GridItem>


                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                      classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)
                    }
                  > 
                    <Tutors />
                  </GridItem>



                </GridContainer>
              </div>
            </div>
        );
    }
}



export default withStyles(null)(AboutSection);
