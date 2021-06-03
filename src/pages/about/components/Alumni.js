import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import compose from 'recompose/compose'
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
// pop over
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from "components/CustomButtons/Button.jsx";
// import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Muted from "components/Typography/Muted.jsx";

import TordaB from "../../../static/about/alumni/TordaB.jpg";
import AnnastinaT from "../../../static/about/alumni/AnnastinaT.jpg";
import RayB from "../../../static/about/alumni/RayB.jpg";
import BrandonR from "../../../static/about/alumni/BrandonR.jpg";
import JennaT from "../../../static/about/alumni/JennaT.jpg";
import ElenaG from "../../../static/about/alumni/ElenaG.jpg";
import JieonK from "../../../static/about/alumni/JieonK.jpg";
import DavidL from "../../../static/about/alumni/DavidL.jpg";
import PrestonT from "../../../static/about/alumni/PrestonT.jpg";
import MallyS from "../../../static/about/alumni/MallyS.jpg";


import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

const styles = theme => ({
  typography: {
    margin: theme.spacing(5),
  },
  popOverFontSize: {
    fontSize: "16px"
  },
  paddingTopShrink: {
    paddingTop: "-50px"
  }
});

class Alumni extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div id="alumni" className={classes.team}>
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
                    <h2 className={classes.title}>Alumni Association</h2>
                    <h5 className={classes.description}>
                        The SaMi Alumni Association is composed of tutors who have graduated from high school. Their hard work and dedication will be remembered by us. SaMi alumni all go to the best colleges in our country and have a bright future ahead of them. 
                    </h5>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={TordaB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Torda B.</h4>
                        <p className={classes.description}>Duke University Class of 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Torda is part of the Class of 2024 at Duke University. He has participated in various academic competitions, including MATHCOUNTS, AMC, UIL, and Science Bowl. Having been taught math at home, Torda gained an appreciation for it at a young age and understands how important mastering the subject is. Furthermore, he believes that SaMi is the perfect opportunity for students of all ages to not only learn but to also enjoy mathematics.
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>

                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={RayB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ray B.</h4>
                        <p className={classes.description}>U. of Virginia Class of 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Ray is part of the Class of 2024 at the University of virginia. He started to participate math competitions during middle school years and have been qualified for AIME since 9th grade. Besides math, his favorite subjects include computer science and biology. He is also actively involved in programming competitions. He is in USACO Platinum division. However, peer tutoring on math and computer science is the most rewarding experience for him.
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={ElenaG} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Elena G.</h4>
                        <p className={classes.description}>MIT Class of 2025</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Elena is part of the Class of 2021 at BASIS Shavano. For the past six years, she’s been a member of NHS and NJHS before that. In addition, she loves animals and volunteers frequently at the San Antonio Humane Society. She also has a passion for the sciences and hopes to major in economics in college. 
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={JieonK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jieon K.</h4>
                        <p className={classes.description}>UC San Diego Class of 2025</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Jieon is part of the Class of 2021 at Basis San Antonio Shavano. She has a love for classical music, and she is the principal oboist of the San Antonio Youth Orchestra Symphony. Studying is great, but taking time off to play the oboe is a great way to lessen the stress that comes from school work and extracurricular activities. Speaking of extracurricular activities, she is a member of the Yearbook and Journalism clubs, Red Cross club, UIL club, and the BASIS Volleyball team. She is also the current NHS Secretary and the former NJHS Secretary. But perhaps, she is most proud to be an active volunteer in Children’s Association for Maximum Potential, where they provide recreation and respite for the mentally and physically disabled. Indulging oneself in volunteer activities is as important as studying in terms of personal growth and enrichment. Although her passion more deeply lies in the fields of science, she does believe that math is an important subject that one must have a thorough understanding of in order to have a successful school career. I thus choose to help other students better perform in their math classes; not only does she tutor in SaMi, but she also tutors Pre-Cal to peers during school days and visits Calculus student support to help students prepare for their next exams. She sure hopes SaMi gives a chance for every young, ambitious child to excel in all future math courses and competitions.
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={DavidL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>David L.</h4>
                        <p className={classes.description}>TBD Class of 2025</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            David is part of the class of 2021 at Basis San Antonio Shavano Campus. He has joined the tutoring program in order to share his knowledge of mathematics to curious kids that want to excel in the subject. He has taken courses such as Algebra I, Algebra II, Calculus AB, and Calculus BC during his time at Basis. He knows that SaMi is a unique organization that gives opportunities to many students and aims to teach them both to expand his knowledge of teaching and explaining topics. All in all, SaMi has allowed tutors like David to reach and connect with kids across San Antonio to both his and their benefit.
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={PrestonT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Preston T.</h4>
                        <p className={classes.description}>UT Austin Class of 2025</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Preston is part of the Class of 2021 at Basis San Antonio Shavano. His favorite classes are Multivariable Calculus, AP Physics C, and AP Computer Science A. Math, science, and computer science have always been some of a many number of passions of him, and that is why he has decided to help provide resources for younger children to pursue goals in these fields through programs like SaMi and tutoring students outside of the classroom. By doing so he hopes to prepare them for competitions such as MATHCOUNTS and UIL by utilizing knowledge from some of his own experiences in these competitions to help them understand and interpret problems they may see in these competitions. 
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={BrandonR} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Brandon R.</h4>
                        <p className={classes.description}>Rice University Class of 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Brandon is part of the Class of 2024 at Rice University. He is a dedicated student who works to complete what he starts. Brandon has taken math classes through Calculus BC, including Statistics. He also enjoys physics, engineering, and computer science. Brandon has tutored many subjects before, especially in various math subjects When he isn’t working on his education, Brandon enjoys various strategy and skill games such as the Civilization series and Magic: The Gathering. 
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={MallyS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Mally S.</h4>
                        <p className={classes.description}>Harvard College Class of 2025</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Mally is part of the Class of 2021 at Basis San Antonio Shavano. She is an avid learner and loves to share what she learns with her classmates and other students! She is an Oracle Certified Junior Java Associate, team captain and club founder of her Cyberpatriots and all- girls Girls Go Cyber Start teams which recently qualified into the Platinum Tier and National level of competition, three time NCWIT award recipient, an ambassador and winner for the Congressional App Challenge, former Vice President now current interim President of NHS, and is a state/nationally qualified Lincoln-Douglas Debater. She received the National AP Scholar award, after acing advanced math courses from AP Calculus AB/BC to AP Statistics, and while maintaining an online peer tutoring supplemental - askthecat.org - since middle school, Mally is excited to continue her peer tutoring efforts through SaMi and help students learn mathematics and computer science concepts! 
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={AnnastinaT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Annastina T.</h4>
                        <p className={classes.description}>MIT Class of 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Annastina will be the Class of 2020 at MIT. She is excited to help you on your math journey!  She has taken math classes through AP Calculus BC, and is currently taking AP Statistics.  Her favorite science classes are physics and computer science.   Annastina has competed in Science Bowl, participates in CyberPartriots and has presented her science fair projects at various levels, including the Intel International Science & Engineering Fair.  In her extra time, she plays the piano and follows sports and their related statistics like a crazy fan girl!  Annastina enjoys helping others with any subject… math, language, or the sciences, and has two younger brothers who, willingly or not, are recipients of her tutoring!
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={JennaT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jenna T.</h4>
                        <p className={classes.description}>Swarthmore College Class of 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Jenna is part of the Class of 2024 at Swarthmore College. She graduated as Valedictorian from Basis San Antonio Shavano. Having tutored during student hours and independently outside of school, she has experience in a variety of subjects, including math, biology, chemistry, and Latin. When she’s not studying, you can find her making music, reading, or cuddling with her cat. In the fall, Jenna will be attending Swarthmore College as a QuestBridge Scholar and member of the Class of 2024, and plans to double-major in Psychology and Musical Theatre.
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>

				  </GridContainer>
              </div>
            </div>
        );
    }

}

export default compose(
    withStyles(styles),
    withStyles(teamsStyle),
)(Alumni)