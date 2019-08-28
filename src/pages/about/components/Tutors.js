import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";



import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// import Button from "components/CustomButtons/Button.jsx";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import HannahGuan from "../../../static/about/tutors/HannahGuan.jpg";

class Tutors extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div id="tutors" className={classes.team}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                      classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                    }
                  >
                    <h2 className={classes.title}>SaMi Tutors</h2>
                    <h5 className={classes.description}>
                        Our finest tutors won regional, national, and international math contests and are all passionate about helping each and every student to achieve their success in math.
                    </h5>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={HannahGuan} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Hannah Guan</h4>
                        <p className={classes.description}>
                          Hannah is part of the Class of 2023 at Basis San Antonio Shavano. Starting in sixth grade, she participated in both MATHCOUNTS competitions and AMC competitions. These experiences made she realize her potential and also made she realize that we only had a limited amount of resources here in San Antonio. Her mom used to drive her to Austin to attend the math activities held by the Austin Math Circle, but many of their activities are Olympiad level math which is not accessible to general students. This inspired her to found San Antonio Math Include, a non-profit organization that includes all students from different cultures, backgrounds, and experiences and to help them achieve their success and pursue their interests in math. She loves to work with younger students, so she is delighted to help all of students pursue their own interests in math. This was not available when she started to learn math, so she is ecstatic that SaMi is now available to help all students. In her spare time (which she obviously has very little of because she goes to BASIS), she likes to read and watch Netflix.
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        );
    }

}

export default withStyles(teamsStyle)(Tutors)
