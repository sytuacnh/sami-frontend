import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from 'recompose/compose'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import InfoArea from "components/InfoArea/InfoArea.jsx";
// import Gesture from "@material-ui/icons/Gesture";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import ContactSection from "../../contact/components/ContactSection";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
// import boyThink from "../../../static/home/summer_camp_img_139.jpg";
// import middleKids from "../../../static/home/midKids.jpg";
import mainHannah from "../../../static/home/home_hannah.jpg";
import fourKids from "../../../static/home/summer_camp_img_151.jpg";
import kidstand from "../../../static/home/kids_stand.jpg";
import Icon from "@material-ui/core/Icon";
import Build from "@material-ui/icons/Build";

import withStyles from "@material-ui/core/styles/withStyles";
import sectionsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle.jsx";
// import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";
import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.jsx";
import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";

const style = {
     marginTopSmShrink: {
         marginTop: "-20px"
     },
     marginBottomSmShrink: {
         marginBottom: "-20px"
     },
     marginTopLgExpand: {
        marginTop: "50px"
     },
     marginBottomLgExpand: {
         marginBottom: "50px"
       },
     marginBottomSmExpand: {
         marginBottom: "20px"
     },
     marginTopUnderTitleShrink: {
         marginTop: "-80px"
     },
     cardHeader: {
        fontSize: "20px",
        fontWeight: "bold"
     },
     label: {
      fontSize: "16px"
     }
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
                    classNames(classes.marginTopSmShrink, classes.mlAuto, classes.mrAuto, classes.textCenter, classes.marginBottomSmShrink)
                  }
                >
                  <div className={classes.sectionDescription}>
                    <h2 className={classes.title}>Free Tutoring Program</h2>
                      <h6 className={classes.description}>For the Best of Students</h6>
                    <h5>
                        Our free tutoring program is supervised by college professors and professionals and led by students who are passionate about math. The tutoring sessions are FREE for all students in grades K-12.
                    </h5>
                    <Button component={ Link } to="/tutoring" round color="rose">
                      View More
                    </Button> 
                    <CardHeader image plain >
                      <ScrollAnimation animateIn="fadeInUp">
                        <a href="/tutoring" style={{ marginTop: "20px" }}>
                          <img src={mainHannah} alt="students and tutors" style={{ width: 500}}/> {/* style={{ width: 500}} */}
						  <h4 className={classes.title}>Hannah Guan, Founder and CEO</h4>
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
                    classNames(classes.marginTopSmShrink, classes.marginBottomLgExpand, classes.mlAuto, classes.mrAuto, classes.textCenter)
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
                            style={{ backgroundImage: `url(${kidstand})` }}
                          >
                            <CardBody background>
                              <h6 className={classes.cardCategory}>Event</h6>
                              <Link to='/free-tutoring-2021-2022' className="link">
                                <h3 className={classes.cardTitleWhite}>
                                  Free Tutoring 2021-2022
                                </h3>
                              </Link>
                              <p className={classes.cardDescription}>
                                The year around free tutoring program lasts for 15 weeks across the fall and spring semesters. We offers both math and computer science classes. The average class size is 20. 
                              </p>
                              <Button component={ Link } to="/free-tutoring-2021-2022" round color="info">
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
                            style={{ backgroundImage: `url(${fourKids})` }}
                          >
                            <CardBody background>
                              <h6 className={classes.cardCategory}>Event</h6>
                              <Link to='/summer-at-sami-2021' className="link">
                                <h3 className={classes.cardTitleWhite}>
                                  Free Summer Camps 2021
                                </h3>
                              </Link>
                              <p className={classes.cardDescription}>
                                Our summer camps are FREE for all students in grades K-12. They are supervised by college professors and led by high school students and national/regional math contest winners.
                              </p>
                              <Button component={ Link } to="/summer-at-sami-2021" round color="primary">
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
                    classNames(classes.marginTopLgExpand, classes.marginBottomSmShrink, classes.mlAuto, classes.mrAuto, classes.textCenter)
                  }
                >
                  <GridContainer>
                    <GridItem md={6} className={classes.mlAuto}>
                      <div className={classNames(classes.iframeContainer)}>
                        <iframe
                          title="SaMi Lecture"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight="0"
                          marginWidth="0"
                          allow="encrypted-media"
                          allowFullScreen=""
                          width="450"
                          height="300"
                          type="text/html"
                          src="https://www.youtube.com/embed/JWhLrE-pF98"
                        />
                      </div> 
                    </GridItem>
                    <GridItem md={6} className={classes.marginTopUnderTitleShrink}>
                        <div className={classNames(classes.sectionDescription)}>
                          <h2 className={classes.title}>Youtube Channel</h2>
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
                <GridItem
                  xs={12}
                  className={
                    classNames(classes.marginTopSmShrink, classes.section, classes.mlAuto, classes.mrAuto, classes.textCenter)
                  }
                >
                  <div className={classes.sectionDescription}>
                    <h2 className={classes.title}>About Us</h2>
                    <GridContainer>
                      <GridItem md={6} sm={3}>
                        <Card>
                            <CardHeader color="rose" className={classes.cardHeader}>Advisors</CardHeader>
                            <CardBody>
                              <p>
                                Our advisory board is composed of accomplished experts in academia and industry. They offer innovative advice and dynamic perspective to SaMi.
                              </p>
                              <Button component={ Link } to="/about#advisors" color="primary">View Advisors</Button>
                            </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem md={6} sm={3}>
                        <Card>
                            <CardHeader color="rose" className={classes.cardHeader}>Tutors</CardHeader>
                            <CardBody>
                              <p>
                                Our finest tutors won regional, national, and international math contests and are all passionate about helping every student to achieve their success in math.
                              </p>
                              <Button component={ Link } to="/about#tutors" color="primary">View Tutors</Button>
                            </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem md={6} sm={3}>
                        <Card>
                            <CardHeader color="rose" className={classes.cardHeader}>Chapters</CardHeader>
                            <CardBody>
                              <p>
                                Our chapters are directed by high school students across the nation and overseas. They recruit and coordinate students in their chapters to attend our free tutoring programs.  
                              </p>
                              <Button component={ Link } to="/about#chapters" color="primary">View Chapters</Button>
                            </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem md={6} sm={3}>
                        <Card>
                            <CardHeader color="rose" className={classes.cardHeader}>Alumni</CardHeader>
                            <CardBody>
                              <p>
                                The SaMi Alumni Association is composed of tutors who have graduated from high school. Their hard work and dedication will be remembered by us.
                              </p>
                              <Button component={ Link } to="/about#alumni" color="primary">View Alumni</Button>
                            </CardBody>
                        </Card>
                      </GridItem>

                    </GridContainer>
                  </div>
                </GridItem>
                <GridItem
                  xs={12}
                  className={
                    classNames(classes.marginTopSmShrink, classes.marginBottomLgExpand, classes.mlAuto, classes.mrAuto, classes.textCenter)
                  }
                >
                  <div className={classNames(classes.contactContent)}>
                    <div className={classes.container}>
                      <h2 className={classes.title}>Contact Us</h2>
                      <ContactSection  />
                    </div>
                  </div>
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
    withStyles(workStyle),
    // withStyles(landingPageStyle),
    withStyles(sectionsStyle),
    withStyles(contentStyle), // padding between sections
    withStyles(contactUsStyle), // padding between sections
)(HomeSection)
