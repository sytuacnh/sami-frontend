import React, { Component } from 'react';
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import TutoringSection from "./components/TutoringSection.js";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";
import bgImage from "../../static/kids_run.jpg";
import {
    TutoringWrapper
} from "./style";

class Tutoring extends Component {
    render() {
        const { classes } = this.props;

        return (
            <TutoringWrapper>
                <Parallax image={bgImage} filter="dark" small>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                        <h2 className={classes.title}>
                          Free Tutoring Program
                        </h2>
                        <h3>
                          Our free tutoring program is supervised by college professors and professionals and led by students who are passionate about math. The tutoring sessions are FREE for all students in grades K-12.
                        </h3>
                      </GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <TutoringSection />
                </div>
            </TutoringWrapper>
        );
    }
}

Tutoring.propTypes = {
    classes: PropTypes.object
};

export default compose(
    withStyles(landingPageStyle),
    withStyles(blogPostsPageStyle),
)(Tutoring)