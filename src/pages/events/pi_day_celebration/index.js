import React, { Component } from 'react';
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PiDayCelebrationSection from "./components/PiDayCelebrationSection.js";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

import bgImage from "../../../static/dice_4.jpg";
import {
    PiDayCelebrationWrapper
} from "./style";

class PiDayCelebration extends Component {
    render() {
        const { classes } = this.props;

        return (
            <PiDayCelebrationWrapper>
                <Parallax image={bgImage} filter="dark" small>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                        <h2 className={classes.title}>
                            Celebration Of Inclusive Excellence on Pi Day
                        </h2>
                      </GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <PiDayCelebrationSection /> 
                </div>
            </PiDayCelebrationWrapper>
        );
    }
}

PiDayCelebration.propTypes = {
    classes: PropTypes.object
};

export default compose(
    withStyles(landingPageStyle),
    withStyles(blogPostsPageStyle),
)(PiDayCelebration)