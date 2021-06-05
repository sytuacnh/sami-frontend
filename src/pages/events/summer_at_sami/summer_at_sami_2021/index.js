import React, { Component } from 'react';
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SummerAtSaMiSection from "./components/SummerAtSaMiSection.js";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

import bgImage from "../../../../static/events/summer_at_sami/summer.png";
import {
    SummerAtSamiWrapper
} from "./style";

class SummerAtSaMi extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { classes } = this.props;

        return (
            <SummerAtSamiWrapper>
                <Parallax image={bgImage} filter="dark" small>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                        <h2 className={classes.title}>
                            Summer@SaMi 2021
                        </h2>
                      </GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <SummerAtSaMiSection /> 
                </div>
            </SummerAtSamiWrapper>
        );
    }
}

SummerAtSaMi.propTypes = {
    classes: PropTypes.object
};

export default compose(
    withStyles(landingPageStyle),
    withStyles(blogPostsPageStyle),
)(SummerAtSaMi)