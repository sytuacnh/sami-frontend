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

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import HannahG from "../../../static/about/tutors/HannahG.jpg";
import HannahA from "../../../static/about/tutors/HannahA.jpg";
import SamanthaF from "../../../static/about/tutors/SamanthaF.jpg";
import AlessandraF from "../../../static/about/tutors/AlessandraF.jpg";
import NancyA from "../../../static/about/tutors/NancyA.jpg";
import AustinR from "../../../static/about/tutors/AustinR.jpg";
import BrandonR from "../../../static/about/tutors/BrandonR.jpg";
import TordaB from "../../../static/about/tutors/TordaB.jpg";
import AnanyaL from "../../../static/about/tutors/AnanyaL.jpg";
import EmilyC from "../../../static/about/tutors/EmilyC.jpg";
import JoshC from "../../../static/about/tutors/JoshC.jpg";
import ElenaG from "../../../static/about/tutors/ElenaG.jpg";
import AnshumanC from "../../../static/about/tutors/AnshumanC.jpg";
import AryamanC from "../../../static/about/tutors/AryamanC.png";
import ShiwinF from "../../../static/about/tutors/ShiwinF.jpg";
import LouisG from "../../../static/about/tutors/LouisG.jpg";
import BranimirG from "../../../static/about/tutors/BranimirG.jpg";
import JieonK from "../../../static/about/tutors/JieonK.jpg";
import AyushK from "../../../static/about/tutors/AyushK.jpg";
import AndrewR from "../../../static/about/tutors/AndrewR.jpg";
import DavidL from "../../../static/about/tutors/DavidL.jpg";
import TanyaL from "../../../static/about/tutors/TanyaL.jpg";
import AllenL from "../../../static/about/tutors/AllenL.jpg";
import EvaL from "../../../static/about/tutors/EvaL.jpg";
import MaggieJ from "../../../static/about/tutors/MaggieJ.jpg";
import JenL from "../../../static/about/tutors/JenL.jpg";
import JoshW from "../../../static/about/tutors/JoshW.jpg";
import JoyceL from "../../../static/about/tutors/JoyceL.jpg";
import PrateekM from "../../../static/about/tutors/PrateekM.jpg";
import FabrizioM from "../../../static/about/tutors/FabrizioM.jpg";
import ColinP from "../../../static/about/tutors/ColinP.jpg";
import SunnyV from "../../../static/about/tutors/SunnyV.jpg";
import SuranS from "../../../static/about/tutors/SuranS.jpg";
import AnnastinaT from "../../../static/about/tutors/AnnastinaT.jpg";
import PrestonT from "../../../static/about/tutors/PrestonT.jpg";
import ElijahW from "../../../static/about/tutors/ElijahW.jpg";
import TejsaiY from "../../../static/about/tutors/TejsaiY.jpg";
import EricZ from "../../../static/about/tutors/EricZ.jpg";


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
                  <GridItem>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={HannahG} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Hannah G., Head Tutor</h4>
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
                                            Hannah is part of the Class of 2023 at Basis San Antonio Shavano. Starting in sixth grade, she participated in both MATHCOUNTS competitions and AMC competitions. These experiences made she realize her potential and also made she realize that we only had a limited amount of resources here in San Antonio. Her mom used to drive her to Austin to attend the math activities held by the Austin Math Circle, but many of their activities are Olympiad level math which is not accessible to general students. This inspired her to found San Antonio Math Include, a non-profit organization that includes all students from different cultures, backgrounds, and experiences and to help them achieve their success and pursue their interests in math. She loves to work with younger students, so she is delighted to help all of students pursue their own interests in math. This was not available when she started to learn math, so she is ecstatic that SaMi is now available to help all students. In her spare time (which she obviously has very little of because she goes to BASIS), she likes to read and watch Netflix.
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
                          <img src={HannahA} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Hannah A.</h4>
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
                                            Hannah has been in njhs for two years and this is her third year. Math has been her favorite subject since she was little. Hannah loves to help and work with small kids. She had volunteered in many summer camps where she has worked with small children. Hannah is very excited to be joining San Antonio Math Includes. 
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
                          <img src={NancyA} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Nancy A.</h4>
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
                                            Nancy is part of the Class of 2023 at Earl Warren high school. She has participated in NJHS for the past 2 years. She participated in a lot of programs with Indian classical dance programs. She has also volunteered in numerous programs and helped in the society. Nancy has participated in many programs and groups to help children all around the world. She also play in volleyball and table tennis and she has participated in many other sports in the past and have competed in them. 
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
                          <img src={TordaB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Torda B.</h4>
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
                                            Torda is part of the Class of 2020 at Basis San Antonio Shavano. He has participated in various academic competitions, including MATHCOUNTS, AMC, UIL, and Science Bowl. Having been taught math at home, Torda gained an appreciation for it at a young age and understands how important mastering the subject is. Furthermore, he believes that SaMi is the perfect opportunity for students of all ages to not only learn but to also enjoy mathematics. 
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
                          <img src={EmilyC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Emily C.</h4>
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
                                            Emily is part of the Class of 2023 at Basis San Antonio Shavano. Born in Arizona, Emily is a outdoor person. She has been to six different schools and seven different campuses (and no, she was not expelled from any). She is currently playing on the BASIS basketball team. She also enjoys playing the cello, piano, and guitar in her spare time. She also makes digital music, but she don’t do that as often. Her favorite subjects are Math and Biology, but the only reason that she likes math is because she aspires to become a doctor. She does, however, enjoy helping younger kids learn, and that is what led her to tutor in this program. 
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
                          <img src={JoshC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Josh C.</h4>
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
                                            Josh is part of the Class of 2024 at Basis San Antonio Shavano. Josh currently tutors third, fourth, and fifth grade kids after school. When he was younger, he was more interested in the fields of physics and chemistry. Although math has not always been his favorite subject, it has always been a very easy topic to learn. This year however, he has begin to enjoy the topic more though he’ve never had any major math related experiences. You can find Josh running, swimming, playing tennis, reading, and drawing!
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
                          <img src={AnshumanC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Anshuman C.</h4>
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
                                            Anshuman is part of the Class of 2025 at Basis San Antonio Shavano. He likes to do many extracurricular activities such as math, chess, reading books, etc. He also likes to help his friends, do extra study groups on the weekends, and also relax. His favorite subjects include algebra, physics, and biology. He loves to watch cricket and highlights, but he likes playing basketball. He really hates to study for any subject and learning another foreign language like Latin. He also engages himself in extra sessions of Mathcounts, and he practices mathcounts at home and his study group that meets every weekend.
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
                          <img src={AryamanC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Aryaman C.</h4>
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
                                            Aryaman is part of the Class of 2022 at Basis San Antonio Shavano. He likes to engage in academic activities such as chess, math, and science. He likes to tutor chess daily at the Parman library and learns coding. His favorite classes are AP Physics 1, AP Computer Science A, and Pre-Calc AB. In his free time (which is very less because of Basis), he plays basketball, tennis, and the drums /percussion outside of school. 
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
                          <img src={SamanthaF} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Samantha F.</h4>
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
                                            Sam is part of the Basis Shavano class of 2022. She has always loved math, far superior to English in her opinion, and enjoys teaching other students. She joined SAMI to help her fellow students with math and because she believed in its message and what it is doing. Her favorite subjects are chemistry, biology, and math. Outside of school, she enjoys reading, writing, and playing volleyball. 
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
                          <img src={ShiwinF} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Shiwin F.</h4>
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
                                            Shiwin is part of the Class of 2023 at BASIS San Antonio Shavano. His favorite subjects are chemistry, math, computer science, and economics. In his free time, he likes to play video games, listen to music, and look at the stock market. He likes to play basketball and soccer and has been into many basketball camps. He is also a member of the Middle School Speech & Debate Club and NJHS. He also participated in the MathCounts and the Science Olympiad (Both when he was in the 6th grade). He is also interested in field of video game development and practices the programming language JavaScript on Khan Academy. 
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
                          <img src={AlessandraF} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Alessandra F</h4>
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
                                            Alessandra is apart of the Class of 2022 at Basis Shavano High School. She has participated in NJHS for 3 years and NHS for one year. She has participated in Youth Orchestra of San Antonio and the San Antonio Figure Skating Club. She has also been apart of numerous volunteer groups. She has won many awards including the Presidential Volunteer Service Award gold standard. Lastly, she enjoys helping others and tutoring children. 
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
                          <img src={LouisG} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Louis G.</h4>
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
                                            Louis is part of the Class of 2023 at Basis San Antonio Shavano. He enjoys video games, music, computers, reading, and other hobbies. He loves math and has been involved in many competitions since he was in second grade. He also loves other subjects - especially science. He thinks SaMi is a great organization as it helps students obtain a grasp on more complex and thoughtful math subjects - all for free.
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
                          <img src={BranimirG} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Branimir G.</h4>
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
                                            Branimir is part of the Class of 2022 at Basis San Antonio Shavano. He chose to join SAMI because of its unique ideas, and it’s goal to improve our community. He joined because math has been really important to him throughout my life. He enjoys it, and treasures every moment he has with it, and wants to bring that opportunity and pleasure to the rest of the children at Basis and throughout San Antonio. He enjoys working with SaMi because of the unique opportunities with tutoring younger kids, and teaching skills that it provides. He enjoys being the role model to younger kids through their school education, and their strive to succeed in their studies. He believes SaMi has helped him develop his teaching and explaining skills, useful not only in the club but through his school, and in helping his brothers. 
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
                          <img src={MaggieJ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Maggie J.</h4>
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
                                            Maggie is part of the class of 2022 at Basis Shavano. She enjoys all her classes in school and has won awards in physics and literature. She is a member of NHS and participates in Academic World Quest at Basis. She is also a Girl Scout and earned her Silver Award by doing a volunteer project with the Humane Society. Maggie’s favorite activity outside school is soccer! In her free time, she enjoys reading and spending time with friends. She also likes to sleep! She doesn’t understand why little kids refuse to take naps. Maggie is excited to be part of SaMi so she can help other students learn about math. 
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
                          <img src={AyushK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ayush K.</h4>
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
                                            Ayush is part of the Class of 2022 at Basis San Antonio Shavano. His favorite subjects are AP Computer Science A, AP Economics, and Physics. He also loves programming, basketball, and participating in volunteering events. Ayush has many certifications in computer science including CompTIA IT Fundamentals and is also pursuing CompTIA Network+. His dream is to open a software-provider business that provides many amenities such as cloud services, business-tracking apps, and artificial intelligence.
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
                          <img src={AnanyaL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ananya L.</h4>
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
                                            Ananya is part of the Class of 2022 at Basis San Antonio Shavano. She's been playing piano since she was four and a half, and plays basketball for BASIS. Although math is usually one of the easier subjects for her, there are many times when she wishes she had a tutor to help her with the subject; as a result, she joined SaMi so that others don't have to face this problem. Ananya aspires to help individuals succeed in math, acting as someone who kids can turn to for guidance and encouragement to continue to work for their goal. 
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
                          <img src={TanyaL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Tanya L.</h4>
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
                                            Tanya is part of the Class of 2023 at Basis San Antonio Shavano. She plays basketball for the BASIS team and plays violin in the orchestra. In her free time, she enjoys listening to music, reading, writing, and drawing. She has never really been passionate about math, preferring other subjects, but she supports the idea of helping the next generations learn, leading her to join SaMi. SaMi focuses on honing the problem-solving skills that are critical for the students’ future careers. It was created to provide easily accessible resources to challenge all students, something that is very beneficial for any kids interested in math. She is positive that it will grow even better in the coming years!
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
                          <img src={AllenL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Allen L.</h4>
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
                                            Allen is part of the Class of 2022 at Basis San Antonio Shavano. He likes biology and chemistry, but math(Calculus AB) is definitely close after. Math has always been important in his life as he has done MATHCOUNTS and UIL before and done successfully in those extracurriculars, including wins at state. He has also gone to Science Bowl nationals just last year. He has other hobbies such as basketball, football, and video games. But the primary reason why he joined SaMI was to help and educate young minds way before he could’ve had the chance at his age. SaMi provides a new opportunity for young ones no matter what and is a new platform for learning.
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
                          <img src={EvaL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Eva L.</h4>
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
                                            Eva is part of the Class of 2022 at Basis San Antonio Shavano. She likes to dance in her free time. She also plays in the orchestra in Basis Shavano. She also loves playing sports, and she will soon start to do swim this year! SaMi is a good and fun organization that helps kids master the art of math, if you would call it an art, but the students get to learn different skills on how to solve math more efficiently and quickly, which can be helpful during testing time. Eva wants to encourage every student to continue being part of the organization and if you would like to join please do! SaMi enjoys having more and more students learning!
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
                          <img src={JenL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jen L.</h4>
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
                                            Jen is part of the Class of 2022 at Basis San Antonio Shavano. She has done 2 clubs, UIL and Game club. She is also in NJHS. She is in the advanced orchestra and she plays the viola. She is second chair which is very good. She plans to join the volleyball and swim team next year to add on to her extra circulars. She also dances in her spare time. SaMi is a great opportunity to enhance student’s teaching skills and abilities and also to help students learn different learning environments that gives a successful teaching. SaMi gives many opportunities to many different students which in turn benefits the tutors to explore different teaching styles. Tutors have to learn different ways to explain different math concepts which is not always easy. This helps both the tutors and students to learn the concepts they need.
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
                          <img src={JoyceL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Joyce L.</h4>
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
                                            Joyce is part of the Class of 2022 at Basis San Antonio Shavano. She is currently taking AP Calculus AB and she is a part of the UIL team. Her favorite subjects are mathematics, computer science, and government. She joined San Antonio Math Include in hopes of helping students discover a passion for mathematics and seek new opportunities through that passion. This has also presented her with the chance to improve her tutoring and communication skills. In her free time, she likes to read and listen to music.
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
                          <img src={PrateekM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Prateek M.</h4>
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
                                            Prateek is part of the Class of 2022 at Basis San Antonio Shavano. He has competed and placed in many competitions such as placing first in both math and science in UIL state last year, placing in various other UIL competitions, both in high school and middle school, and going to the Nationals level of National Science Bowl twice. He also enjoys tutoring and helping others with math. This is why he has joined SaMi. To ensure that the next generation of Mathletes have a great amount of help and support in their academic endeavours is the best thing that he could do. SaMi stands for giving every child who wants to succeed with math the help they need and as a tutor, it is his job to make sure it happens.
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
                          <img src={FabrizioM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Fabrizio M.</h4>
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
                                            Fabrizio is part of the Class of 2022 at Basis San Antonio Shavano. He is fifteen years old and is the eldest of three brothers. He loves to play sports and video games. He enjoys playing soccer and he has been playing it for a very long time. He also enjoys reading books in his leisure time and looking at memes. He loves to study biology and the sciences, except physics, cause it sucks. Some things that he likes to do to cool down is watch Youtube and Netflix and walk his dog to the park or go for a jog.
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
                          <img src={ColinP} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Colin P.</h4>
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
                                            Colin is part of the Class of 2022 at Basis San Antonio Shavano. He has a passion for math but enjoys physics too. His favorite subject in school is Multi-variable Calculus. Colin has placed in math and science at UIL state academic competitions for both high school and middle school the last 4 years. He enjoys solving the Trinity University Problem of the Week, which is designed to prepare students for the Putnam Exam, and competes in National Science Bowl. He has been to Science Bowl nationals three times in middle school. He also enjoys tutoring and helping people, especially in math, which is why he is involved in San Antonio Math Include and tutors every Friday at Basis. He is also a Webmaster for SaMi and helps edit the website. 
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
                          <img src={AustinR} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Austin R.</h4>
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
                                            Austin is part of the Class of 2022 at Basis San Antonio Shavano. He has participated in various academic programs, such as a STEM project week at school, and he has excelled in his math classes since he has started school at Basis in sixth grade. Having the motivation of volunteering for the San Antonio Math Include program has come to him from his ability to understand math well, helping his fellow classmates, and receiving help from his teachers over the years. 
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
                                            Brandon is part of the class of 2020 at BASIS Shavano. He is a dedicated student who works to complete what he starts. Brandon has taken math classes through Calculus BC, including Statistics. He also enjoys physics, engineering, and computer science. Brandon has tutored many subjects before, especially in various math subjects When he isn’t working on his education, Brandon enjoys various strategy and skill games such as the Civilization series and Magic: The Gathering. 
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
                          <img src={AndrewR} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Andrew R.</h4>
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
                                            Brandon Rice is part of the class of 2020 at BASIS Shavano. He is a dedicated student who works to complete what he starts. Brandon has taken math classes through Calculus BC, including Statistics. He also enjoys physics, engineering, and computer science. Brandon has tutored many subjects before, especially in various math subjects When he isn’t working on his education, Brandon enjoys various strategy and skill games such as the Civilization series and Magic: The Gathering. 
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
                          <img src={SuranS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Suran S.</h4>
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
                                            Suran is part of the Class of 2022 at Basis San Antonio Shavano. He first noticed he had a talent for math in the 5th grade in which he got moved up to Algebra 1, and now he is currently taking AP Calculus BC. Even though he is pretty good at math, he also enjoys many different academic activities including science fair, math and science UIL, speech and debate, and science bowl and he has actually gone to nationals just last year. Other than academics he also plays basketball and is a member of the High school varsity team. He has always had a special love for math and SaMi helps him foster that into a hobby. he believes that SaMi is a great organization because it gives other students amazing opportunities to learn more about math. And, the fact that it is conducted by students makes the organization even better.
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
                                            Annastina is excited to help you on your math journey!  She has taken math classes through AP Calculus BC, and is currently taking AP Statistics.  Her favorite science classes are physics and computer science.   Annastina has competed in Science Bowl, participates in CyberPartriots and has presented her science fair projects at various levels, including the Intel International Science & Engineering Fair.  In her extra time, she plays the piano and follows sports and their related statistics like a crazy fan girl!  Annastina enjoys helping others with any subject… math, language, or the sciences, and has two younger brothers who, willingly or not, are recipients of her tutoring!  
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
                          <img src={SunnyV} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Sunny V.</h4>
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
                                            Sunny is part of the Class of 2023 at Basis San Antonio Shavano and is the current NJHS Vice President. Though Sunny is fond of math and the sciences, she enjoys writing with an ardent passion. As a result, she has won numerous poetry and essay contests. She enjoys writing privately outside of contests as well. Sunny loves soccer and plays for her school’s varsity team and her club’s A team as well as indoor league and women’s league. Sunny adores working with children and thinks herself to be someone that is easy to talk to, thus, being a tutor for SaMi quickly appealed to her. Sunny loves teaching and helping others learn new things, and she’s ecstatic about lending a hand to hold for the younger generation!
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
                          <img src={JoshW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Josh W.</h4>
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
                                            Josh is apart of the class of 2022 at Basis San Antonio Shavano. His favorite subjects are AP Computer Science, AP Chemistry, and AP Economics. He loves to volunteer for his community, play basketball, and read. He chose to join SAMI because of its goal to help students obtain a better grasp on the concept of math and to also help the community. Having the motivation of volunteering for SAMI has given him the benefit of gaining teaching experience as well. 
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
                          <img src={ElijahW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Elijah W.</h4>
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
                                            Elijah is part of the Class of 2022 at Basis San Antonio Shavano. He likes to consider himself a “cool guy” because he plays basketball and video games, but he is really a nerd. He enjoys math and science, which are his best subjects, and through these subjects he has learned that he needs to become better at explaining and tutoring. When asked for help, although he knows the subject, he tends to explain the problem in a way that the person he is explaining to does not understand. He has joined SaMi to develop these skills of tutoring and explaining and to also help the younger students better understand complicated math topics. 
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
                          <img src={TejsaiY} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Tejsai Y.</h4>
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
                                            Tejsai is part of the class of 2022 at BASIS San Antonio Shavano. He enjoys studying core STEM subjects such Pre-Calculus AB and Honors Biology. He has competed in math competitions such as the AMC-8 and, also, is currently tutoring in Kumon. He likes to volunteer for the San Antonio Food Bank, Haven for Hope, and the Cody Library. He loves music, as he is the lead vocalist and lead guitarist for his neighborhood band. He also loves to paint and look at other genres of art for inspiration. He watches a lot of movies and loves to over analyze the science in them.  
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
                          <img src={EricZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Eric Z.</h4>
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
                                            Eric is part of the Class of 2024 at Basis San Antonio Shavano. One thing he has gotten used to being last because of his last name. He likes playing basketball. Actually, basketball is the only sport that he has any skill in. Well, maybe football, but not really, he guesses. Anyways, um, he also likes math and science. His favorite subject is chemistry. He participates in competitions like MATHCOUNTS and UIL. He is a self-proclaimed nerd, and he is proud of it, and these things help him not be bored, for lack of better words. He plays several instruments, and he likes listening to music as well. 
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
)(Tutors)