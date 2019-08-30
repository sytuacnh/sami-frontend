import React, { Component } from 'react';
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SummerCamp2019Section from "./components/SummerCamp2019Section.js";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

import bgImage from "../../../static/events/summer_camp/summer.png";
import {
    SummerCamp2019Wrapper
} from "./style";

class SummerCamp2019 extends Component {
    render() {
        const { classes } = this.props;

        return (
            <SummerCamp2019Wrapper>
                <Parallax image={bgImage} filter="dark" small>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                        <h2 className={classes.title}>
                            Summer Camp 2019
                        </h2>
                      </GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <SummerCamp2019Section /> 
                </div>
            </SummerCamp2019Wrapper>
        );
    }
}

SummerCamp2019.propTypes = {
    classes: PropTypes.object
};

export default compose(
    withStyles(landingPageStyle),
    withStyles(blogPostsPageStyle),
)(SummerCamp2019)