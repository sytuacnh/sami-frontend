import React, { PureComponent } from 'react';
import classNames from "classnames";
// import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import SectionProgramPills from "./components/SectionProgramPills.jsx";

import {
    RegisterFormWrapper
} from "./style";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";
import bgImage from "../../static/children.jpg";

class RegisterProgram extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <RegisterFormWrapper>
                <Parallax image={bgImage} filter="dark" small>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                        <h2 className={classes.title}>
                          SaMi Program Sign Up
                        </h2>
                      </GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <SectionProgramPills />
                </div>
            </RegisterFormWrapper>
        );
    }
}

export default withStyles(blogPostsPageStyle)(RegisterProgram)
