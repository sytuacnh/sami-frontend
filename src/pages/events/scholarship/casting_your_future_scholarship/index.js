import React, { Component } from 'react';
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CastingYourFutureScholarshipSection from "./components/CastingYourFutureScholarshipSection.js";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";
import bgImage from "../../../../static/events/scholarship/sunrise_read.jpg";
import {
    CastingYourFutureScholarshipWrapper
} from "./style";

class CastingYourFutureScholarship extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { classes } = this.props;

        return (
            <CastingYourFutureScholarshipWrapper>
                <Parallax image={bgImage} filter="dark" small>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                        <h2 className={classes.title}>
                            Casting YourFuture Scholarship
                        </h2>
                      </GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <CastingYourFutureScholarshipSection /> 
                </div>
            </CastingYourFutureScholarshipWrapper>
        );
    }
}

CastingYourFutureScholarship.propTypes = {
    classes: PropTypes.object
};

export default compose(
    withStyles(landingPageStyle),
    withStyles(blogPostsPageStyle),
)(CastingYourFutureScholarship)