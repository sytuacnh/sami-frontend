import React, { Component } from 'react';
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import DonateSection from "./components/DonateSection";
import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import bgImage from "../../static/heart.jpg";
import {
    DonateWrapper
} from "./style";

class Donate extends Component {
    render() {
        const { classes } = this.props;

        return (
            <DonateWrapper>
                <Parallax image={bgImage} filter="dark" small>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                        <h2 className={classes.title}>
                          Making A Difference
                        </h2>
                        <h3>
                          You have the power to help more students improve their math skills. Your investment will benefit all students in the greater San Antonio area to reveive the best math education.
                        </h3>
                      </GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <DonateSection />
                </div>
            </DonateWrapper>
        );
    }
}

Donate.propTypes = {
    classes: PropTypes.object
};

export default compose(
    withStyles(landingPageStyle),
    withStyles(blogPostsPageStyle)
)(Donate)