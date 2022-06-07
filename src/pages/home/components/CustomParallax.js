import React from 'react';
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

const CustomParallax = props => {
    const { bgImageName, classes } = props;

    return (
        <Parallax image={require("../../../static/" + bgImageName + ".jpg")}>
            <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={8} md={6}>
                    <h2 className={classes.title}>By the Students<br />For the Students</h2>
                    <h4>
                        <b>San Antonio Math Include</b>, SaMi, is an international
                        <a className="link" href="https://www.501c3.org/what-is-a-501c3/" target="_blank" rel="noopener noreferrer"> 501(c)(3) </a>
                        nonprofit organization founded by a group of students passionate about math. Our mission is to provide greater access to STEM education to all students from different backgrounds, experiences, and cultural perspectives. We offer FREE classes and summer camps for all students in grades K-12. Our students are from 42 states in the U.S. and four other continents.
                    </h4>
                    <br />
                  </GridItem>
                </GridContainer>
            </div>
        </Parallax>
    );
};

export default withStyles(landingPageStyle)(CustomParallax)
