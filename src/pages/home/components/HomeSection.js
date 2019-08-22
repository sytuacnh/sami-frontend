import React, { PureComponent } from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from 'recompose/compose'
import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import sectionsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle.jsx";
// import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";
import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
// import boyThink from "../../../static/home/summer_camp_img_139.jpg";
import middleKids from "../../../static/home/midKids.jpg";
import fourKids from "../../../static/home/summer_camp_img_151.jpg";
import pi from "../../../static/home/PiDay_m14.jpg";
import Icon from "@material-ui/core/Icon";
import Build from "@material-ui/icons/Build";

const style = {
     marginTopSmShrink: {
         marginTop: "-20px"
     },
     marginTopUnderTitleShrink: {
         marginTop: "-80px"
     },
 }
class HomeSection extends PureComponent  {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem
                  xs={12}
                  sm={8}
                  md={8}
                  className={
                    classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)
                  }
                >
                  <div className={classes.sectionDescription}>
                    <h2 className={classes.title}>Free Tutoring Program</h2>
                      <h6 className={classes.description}>For the Best of Students</h6>
                    <h5>
                        Our free tutoring program is supervised by college professors and professionals and led by students who are passionate about math. The tutoring sessions are FREE for all students in grades 4-8.
                    </h5>
                    <Button round color="rose">
                      View More
                    </Button> 
                    <CardHeader image plain >
                      <ScrollAnimation animateIn="fadeInUp">
                        <a href="/tutoring" style={{ marginTop: "20px" }}>
                          <img src={middleKids} alt="students and tutors" style={{ width: 500}}/> {/* style={{ width: 500}} */}
                        </a>
                        <div
                          className={classes.coloredShadow}
                        />
                      </ScrollAnimation>
                    </CardHeader>
                  </div>
                </GridItem>

                <GridItem
                  xs={12}
                  className={
                    classNames(classes.section, classes.mlAuto, classes.mrAuto, classes.textCenter)
                  }
                >
                  <div className={classes.sectionDescription}>
                    <h2 className={classes.title}>Events of SaMi</h2>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <ScrollAnimation animateIn="fadeInLeft">
                          <Card
                            raised
                            background
                            style={{ backgroundImage: `url(${fourKids})` }}
                          >
                            <CardBody background>
                              <h6 className={classes.cardCategory}>Event</h6>
                              <a href="/summer-camp-2019">
                                <h3 className={classes.cardTitleWhite}>
                                  Free Summer Camps 2019
                                </h3>
                              </a>
                              <p className={classes.cardDescription}>
                                Our summer camps are FREE for all students in grades K-8. They are supervised by college professors and led by high school students and national/regional math contest winners...
                              </p>
                              <Button round color="primary">
                                <Icon>content_copy</Icon> View More
                              </Button>
                            </CardBody>
                          </Card>
                        </ScrollAnimation>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <ScrollAnimation animateIn="fadeInRight">
                          <Card
                            raised
                            background
                            style={{ backgroundImage: `url(${pi})` }}
                          >
                            <CardBody background>
                              <h6 className={classes.cardCategory}>Event</h6>
                              <a href="/pi-day-celebration">
                                <h3 className={classes.cardTitleWhite}>
                                  Pi Day Celebration
                                </h3>
                              </a>
                              <p className={classes.cardDescription}>
                                Celebration of Inclusive Excellence on Pi Day is an annual ceremony to bring all students in math to forefront. The three keynote speakers will talk about math pathways in three...
                                
                                
                              </p>
                              <Button round color="info">
                                <Icon>content_copy</Icon> View More 
                              </Button>
                            </CardBody>
                          </Card>
                        </ScrollAnimation>
                      </GridItem>
                    </GridContainer>
                  </div>
                </GridItem>
                <GridItem
                  xs={12}
                  className={
                    classNames(classes.section, classes.mlAuto, classes.mrAuto, classes.textCenter)
                  }
                >
                  <GridContainer>
                    <GridItem md={6} className={classes.mlAuto}>
                      <div className={classNames(classes.iframeContainer)}>
                        <iframe
                          title="SaMi Lecture"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                          allow="encrypted-media"
                          allowFullScreen=""
                          width="534"
                          height="300"
                          type="text/html"
                          src="https://www.youtube.com/embed/jAWsr5w-CxU?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd720&origin=https://youtubeembedcode.com"
                        />
                      </div> 
                    </GridItem>
                    <GridItem md={6} className={classes.marginTopUnderTitleShrink}>
                        <div className={classNames(classes.sectionDescription)}>
                          <h2 className={classes.title}>Accessibility</h2>
                          <h5>
                            All lectures will be video recorded and available in our 
                            <a className="link" href="https://www.youtube.com/channel/UCuXmN7-h56VP_-216V-1dZg" target="_blank" rel="noopener noreferrer"> YouTube Channel </a>
                            . We want to benefit more students, especially those from disadvantaged families who can't transport their child to Basis Shavano.
                          </h5>
                          <a href="https://www.youtube.com/channel/UCuXmN7-h56VP_-216V-1dZg" target="_blank" rel="noopener noreferrer">
                            <Button
                              color="rose"
                              target="_blank"
                              className={classes.navButton}
                              round
                            >
                              Watch More Videos
                            </Button>
                          </a>
                        </div>
                      </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>
        );
    }

}

HomeSection.propTypes = {
    classes: PropTypes.object
};

export default compose(
    withStyles(style),
    withStyles(sectionsStyle),
    withStyles(contentStyle), // padding between sections
    // withStyles(blogsStyle)
)(HomeSection)
