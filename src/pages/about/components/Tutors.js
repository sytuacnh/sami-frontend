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
import HannahGuan from "../../../static/about/tutors/HannahGuan.jpg";
import NancyAbraham from "../../../static/about/tutors/NancyAbraham.jpg";
import AustinRamos from "../../../static/about/tutors/AustinRamos.jpg";
import TordaBordas from "../../../static/about/tutors/TordaBordas.jpg";
import EmilyCevey from "../../../static/about/tutors/EmilyCevey.jpg";
import JoshCevey from "../../../static/about/tutors/JoshCevey.jpg";
import AnshumanChhawcharia from "../../../static/about/tutors/AnshumanChhawcharia.jpg";
import AryamanChhawcharia from "../../../static/about/tutors/AryamanChhawcharia.png";
import ShiwinFernando from "../../../static/about/tutors/ShiwinFernando.jpg";
import LouisGeer from "../../../static/about/tutors/LouisGeer.jpg";
import BranimirGore from "../../../static/about/tutors/BranimirGore.jpg";
import JieonKim from "../../../static/about/tutors/JieonKim.jpg";
import AyushKumar from "../../../static/about/tutors/AyushKumar.jpg";
import DavidLie from "../../../static/about/tutors/DavidLie.jpg";
import TanyaLertpradist from "../../../static/about/tutors/TanyaLertpradist.jpg";
import AllenLiang from "../../../static/about/tutors/AllenLiang.jpg";
import EvaLin from "../../../static/about/tutors/EvaLin.jpg";
import JenLin from "../../../static/about/tutors/JenLin.jpg";
import JoyceLiu from "../../../static/about/tutors/JoyceLiu.jpg";
import PrateekMishra from "../../../static/about/tutors/PrateekMishra.jpg";
import FabrizioMolina from "../../../static/about/tutors/FabrizioMolina.jpg";
import ColinPerera from "../../../static/about/tutors/ColinPerera.jpg";
import SunnyVuong from "../../../static/about/tutors/SunnyVuong.jpg";
import SuranSomawardana from "../../../static/about/tutors/SuranSomawardana.png";
import PrestonTranbarger from "../../../static/about/tutors/PrestonTranbarger.jpg";
import ElijahWhang from "../../../static/about/tutors/ElijahWhang.jpg";
import TejsaiYelamanchili from "../../../static/about/tutors/TejsaiYelamanchili.jpg";
import EricZou from "../../../static/about/tutors/EricZou.jpg";

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
                          <img src={HannahGuan} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Hannah Guan, Head Tutor</h4>
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
                          <img src={NancyAbraham} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Nancy Abraham</h4>
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
                          <img src={TordaBordas} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Torda Bordas</h4>
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
                          <img src={EmilyCevey} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Emily Cevey</h4>
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
                          <img src={JoshCevey} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Josh Cevey</h4>
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
                          <img src={AnshumanChhawcharia} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Anshuman Chhawcharia</h4>
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
                          <img src={AryamanChhawcharia} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Aryaman Chhawcharia</h4>
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
                          <img src={ShiwinFernando} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Shiwin Fernando</h4>
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
                          <img src={LouisGeer} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Louis Geer</h4>
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
                          <img src={BranimirGore} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Branimir Gore</h4>
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
                          <img src={JieonKim} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jieon Kim</h4>
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
                          <img src={AyushKumar} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ayush Kumar</h4>
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
                          <img src={DavidLie} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>David Lie</h4>
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
                          <img src={TanyaLertpradist} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Tanya Lertpradist</h4>
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
                          <img src={AllenLiang} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Allen Liang</h4>
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
                          <img src={EvaLin} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Eva Lin</h4>
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
                          <img src={JenLin} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jen Lin</h4>
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
                          <img src={JoyceLiu} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Joyce Liu</h4>
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
                          <img src={PrateekMishra} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Prateek Mishra</h4>
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
                          <img src={LouisGeer} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Fabrizio Molina</h4>
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
                          <img src={ColinPerera} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Colin Perera</h4>
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
                          <img src={AustinRamos} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Austin Ramos</h4>
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
                          <img src={SuranSomawardana} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Suran Somawardana</h4>
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
                          <img src={PrestonTranbarger} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Preston Tranbarger</h4>
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
                          <img src={SunnyVuong} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Sunny Vuong</h4>
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
                          <img src={ElijahWhang} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Elijah Whang</h4>
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
                          <img src={TejsaiYelamanchili} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Tejsai Yelamanchili</h4>
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
                          <img src={EricZou} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Eric Zou</h4>
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