import React, { PureComponent } from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import compose from 'recompose/compose'
import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import sectionsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
// images
import presentationiPad from "assets/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg";
import presentationiPadComments from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg";
import presentationiPadTable from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg";
import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.jsx";

class HomeSection extends PureComponent  {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem md={6}>
                  <div className={classes.sectionDescription}>
                    <h3 className={classes.title}>Free Tutoring Program</h3>
                    <h6 className={classes.description}>
                      For the Best of Students
                    </h6>
                    <h5 className={classes.description}>
                      Our free tutoring program is supervised by college professors and professionals and led by students who are passionate about math. The tutoring sessions are FREE for all students in grades 4-8.
                    </h5>
                    <Link to='\free-tutoring'>
                        <Button
                          color="rose"
                          target="_blank"
                          className={classes.navButton}
                          round
                        >
                          View More
                        </Button>
                    </Link>
                  </div>
                </GridItem>
                <GridItem md={6} className={classes.mlAuto}>
                  <div className={classes.imageContainer}>
                    <div className={classes.animeAreaImg}>
                      <ScrollAnimation animateIn="fadeInUp">
                        <img
                          src={presentationiPadComments}
                          alt="iPad comments"
                          className={classes.areaImg}
                        />
                      </ScrollAnimation>
                    </div>
                    <div className={classes.animeInfoImg}>
                      <ScrollAnimation animateIn="fadeInUp">
                        <img
                          src={presentationiPadTable}
                          alt="iPad table"
                          className={classes.infoImg}
                        />
                      </ScrollAnimation>
                    </div>
                    <img
                      className={classes.ipadImg}
                      src={presentationiPad}
                      alt="iPad"
                    />
                  </div>
                </GridItem>
                <GridItem
                  md={8}
                  className={classNames(classes.mrAuto, classes.mlAuto)}
                >
                  <div className={classes.sectionDescription}>
                    <h2 className={classes.title}>Accessibility</h2>
                    <h5 className={classes.description}>
                      All lectures will be video recorded and available in our YouTube Channel. We want to benefit more students, especially those from disadvantaged families who can't transport their child to Basis Shavano. If you know this kind of the students, please refer them to our YouTube Channel and let them [contact] us. We are happy to provide onsite help in their schools. 
                    </h5>
                    <a href={"https://www.youtube.com/channel/UCuXmN7-h56VP_-216V-1dZg"} target="_blank" rel="noopener noreferrer">
                      <Button
                        color="rose"
                        target="_blank"
                        className={classes.navButton}
                        round
                      >
                        Watch Videos
                      </Button>
                    </a>
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

// export default withStyles(sectionsStyle)(HomeSection)

export default compose(
    withStyles(sectionsStyle),
    withStyles(contentStyle)
)(HomeSection)
