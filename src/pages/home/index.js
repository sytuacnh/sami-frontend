import React, { PureComponent } from 'react';
// import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import {
    HomeWrapper
} from "./style";
import Section from "./components/section";
import bgImage from "../../static/geo_bg.jpg";


class Home extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <HomeWrapper>
                <Parallax image={bgImage}>
                    <div className={classes.container}>
                        <GridContainer>
                          <GridItem xs={12} sm={8} md={6}>
                            <h2 className={classes.title}>By the Students,<br />For the Students</h2>
                            <h4>
                                San Antonio Math Include, SaMi, is a Texas nonprofit organization founded by a group of students passionate about math. Our mission is to INCLUDE all students from different cultures, backgrounds and experiences, and to help them achieve their success and pursue their interests in Math and other related fields. 
                            </h4>
                            <br />
                          </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <Section />
                </div>
            </HomeWrapper>
        )
    }
}

// Home.propTypes = {
//     classes: PropTypes.object
// };

export default withStyles(landingPageStyle)(Home)

// export default compose(
//     withStyles(landingPageStyle),
//     withStyles(sectionsStyle)
// )(Home)