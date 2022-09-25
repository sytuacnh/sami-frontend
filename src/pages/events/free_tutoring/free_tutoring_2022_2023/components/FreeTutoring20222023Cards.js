import React, { PureComponent, Fragment } from 'react';
// nodejs library to set properties for components
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import mathTwoGirls from "../../../../../static/events/math_two_girls.jpg";
import tutorHelp from "../../../../../static/events/tutor_help_2.jpg";
import lawn from "../../../../../static/events/lawn.jpg";
import piece from "../../../../../static/events/piece.jpg";

//import programPoster from "../../../../../static/events/free_tutoring/2020-2021/pdf/SaMi2020-2021Program.pdf";
//import programPosterSpanish from "../../../../../static/events/free_tutoring/2020-2021/pdf/SaMi2020-2021Program-Spanish.pdf";
//import CalendarCurriculum from "../../../../../static/events/free_tutoring/2020-2021/pdf/CalendarCurriculum.pdf";
//import CalendarCurriculumSpanish from "../../../../../static/events/free_tutoring/2020-2021/pdf/CalendarCurriculumSpanish.pdf";
//import Syllabi from '../../../../../../src/static/events/free_tutoring/2021-2022/pdf/2021-2022SaMiSyllabi.pdf';
//import Program from '../../../../../../src/static/events/free_tutoring/2021-2022/pdf/2021-2022SaMiProgram.pdf';

import Syllabi from '../../../../../../src/static/events/free_tutoring/2022-2023/pdf/2022-2023SaMiSyllabi.pdf';
import Program from '../../../../../../src/static/events/free_tutoring/2022-2023/pdf/2022-2023SaMiProgram.pdf';

class FreeTutoring20222023Cards extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        raised
                        background
                        style={{ backgroundImage: "url(" + mathTwoGirls + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Free Tutoring 2022-2023</h6>
                          <h3 className={classes.cardTitle}>
                            Student Register
                          </h3>
                          <p className={classes.textCenter}>
                            Click button below to join as a student
                          </p>
                          <a className="link" href="https://forms.gle/PkoioSYcJY8f1j5v8" target="_blank" rel="noopener noreferrer">
                              <Button round color="rose">
                                  <FormatAlignLeft className={classes.icons} />Sign Up
                              </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        raised
                        background
                        style={{ backgroundImage: "url(" + tutorHelp + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Free Tutoring 2022-2023</h6>
                          <h3 className={classes.cardTitle}>
                            Tutor Register
                          </h3>
                          <p className={classes.category}>
                            Click button below to join as a tutor
                          </p>
                          <a className="link" href="https://forms.gle/EUxbnQmvRFp2BtGu5" target="_blank" rel="noopener noreferrer">
                              <Button round color="rose">
                                  <FormatAlignLeft className={classes.icons} />Sign Up
                              </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        raised
                        background
                        style={{ backgroundImage: "url(" + lawn + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Free Tutoring 2022-2023</h6>
                          <h3 className={classes.cardTitle}>
                            Program
                          </h3>
                          <p className={classes.textCenter}>
                            Click button below to view our poster
                          </p>
                          <a className="link" href={Program} target="_blank" rel="noopener noreferrer">
                              <Button round color="rose">
                                  <FormatAlignLeft className={classes.icons} />View PDF
                              </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </GridItem>


                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        raised
                        background
                        style={{ backgroundImage: "url(" + piece + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Free Tutoring 2022-2023</h6>
                          <h3 className={classes.cardTitle}>
                            Syllabi
                          </h3>
                          <p className={classes.textCenter}>
                            Click button below to view
                          </p>
                          <a className="link" href={Syllabi} target="_blank" rel="noopener noreferrer">
                              <Button round color="rose">
                                  <FormatAlignLeft className={classes.icons} />View
                              </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </GridItem>
                </GridContainer>
            </Fragment>
        );
    }
}



export default withStyles(featuresStyle)(FreeTutoring20222023Cards);

// export default compose(
//     withStyles(style),
//     withStyles(contactUsStyle),
// )(ContactSection)