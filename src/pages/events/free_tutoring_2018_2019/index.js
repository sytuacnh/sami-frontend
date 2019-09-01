import React, { Component } from 'react';
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import FreeTutoring20182019Section from "./components/FreeTutoring20182019Section.js";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

import bgImage from "../../../static/kids_run.jpg";
import {
    FreeTutoring20182019Wrapper
} from "./style";

class FreeTutoring20182019 extends Component {
    render() {
        const { classes } = this.props;

        return (
            <FreeTutoring20182019Wrapper>
                <Parallax image={bgImage} filter="dark" small>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                        <h2 className={classes.title}>
                            Free Tutoring 2018-2019
                        </h2>
                      </GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <FreeTutoring20182019Section /> 
                </div>
            </FreeTutoring20182019Wrapper>
        );
    }
}

FreeTutoring20182019.propTypes = {
    classes: PropTypes.object
};

export default compose(
    withStyles(landingPageStyle),
    withStyles(blogPostsPageStyle),
)(FreeTutoring20182019)