import React, { PureComponent } from 'react';
import compose from 'recompose/compose'
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
// pop over
import Typography from '@material-ui/core/Typography';
import Button from "components/CustomButtons/Button.jsx";
// import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import CardFooter from "components/Card/CardFooter.jsx";


import KahlilB from "../../../static/about/chapters/KahlilB.jpg";
import IsabelleD from "../../../static/about/chapters/IsabelleD.jpg";
import LauraE from "../../../static/about/chapters/LauraE.jpg";
import ColinK from "../../../static/about/chapters/ColinK.jpg";
import GinaK from "../../../static/about/chapters/GinaK.jpg";
import KassieL from "../../../static/about/chapters/KassieL.jpg";
import EmilyL from "../../../static/about/chapters/EmilyL.jpg";
import EmilyS from "../../../static/about/chapters/EmilyS.jpg";
import CanisL from "../../../static/about/chapters/CanisL.jpg";
import StephanieL from "../../../static/about/chapters/StephanieL.jpg";
import JamesL from "../../../static/about/chapters/JamesL.jpg";
import KevinL from "../../../static/about/chapters/KevinL.jpg";
import HarineeS from "../../../static/about/chapters/HarineeS.jpg";
import WillW from "../../../static/about/chapters/WillW.jpg";
import JennyW from "../../../static/about/chapters/JennyW.jpg";
import AmeliaW from "../../../static/about/chapters/AmeliaW.jpg";
import GhalenW from "../../../static/about/chapters/GhalenW.jpg";
import YunfeiZ from "../../../static/about/chapters/YunfeiZ.jpg";
import LindaT from "../../../static/about/chapters/LindaT.jpg";  
import ErinC from "../../../static/about/chapters/ErinC.jpg";  
import RayZ from "../../../static/about/chapters/RayZ.jpg";
import EthanD from "../../../static/about/chapters/EthanD.png";
import AndrewZ from "../../../static/about/chapters/AndrewZ.jpg";
import MirandaW from "../../../static/about/tutors/MirandaW.png";  
import DanielZ from "../../../static/about/tutors/DanielZ.JPG";
import ZacharyH from "../../../static/about/tutors/ZacharyH.JPG";  
import GabrielH from "../../../static/about/tutors/GabrielH.jpg";
import KaiwenZ from "../../../static/about/tutors/KaiwenZ.jpg";
import HannahW from "../../../static/about/tutors/HannahW.jpg";
// import makeStyles from "../../../static/about/tutors/EmilyM.jpg";  
import WilliamX from "../../../static/about/tutors/WilliamX.jpeg";  
import NathanX from "../../../static/about/tutors/NathanX.png";
import JinheeW from "../../../static/about/tutors/JinheeW.JPG";
import RachelY from "../../../static/about/tutors/RachelY.jpg";
import AngieC from "../../../static/about/tutors/AngieC.jpeg";  
import AvaL from "../../../static/about/tutors/AvaL.jpg";  
import AlyonaN from "../../../static/about/tutors/AlyonaN.png";  
import BradA from "../../../static/about/tutors/BradA.jpg";  
import NamrathaC from "../../../static/about/tutors/NamrathaC.jpg";  
import NeerajaS from "../../../static/about/tutors/NeerajaS.jpg";  
import PrestonB from "../../../static/about/tutors/PrestonB.jpeg";  
import VicC from "../../../static/about/tutors/VicC.jpg";  
import ZulfiyyaK from "../../../static/about/tutors/ZulfiyyaK.jpg";  
import AthenaW from "../../../static/about/tutors/AthenaW.JPG";  

import JerrysonJ from "../../../static/about/tutors/JerrysonJ.jpg";  
import DerekC from "../../../static/about/tutors/DerekC.jpg";  
import KellyN from "../../../static/about/tutors/KellyN.jpg";  
import DessieY from "../../../static/about/tutors/DessieY.JPG";  
import AngelJ from "../../../static/about/tutors/AngelJ.jpg";  
import LucyL from "../../../static/about/tutors/LucyL.jpeg";  
import HaileyX from "../../../static/about/tutors/HaileyX.jpg";
import GarimaR from "../../../static/about/tutors/GarimaR.jpg";
import YuntongC from "../../../static/about/tutors/YuntongC.jpeg";
import JoannaY from "../../../static/about/tutors/JoannaY.jpg";
import NehaH from "../../../static/about/tutors/NehaH.jpg";
import SainaS from "../../../static/about/tutors/SainaS.jpg";
import StephanieW from "../../../static/about/tutors/StephanieW.png";
import MelissaK from "../../../static/about/tutors/MelissaK.jpg";
import ZoyaH from "../../../static/about/tutors/ZoyaH.jpg";
import GraceM from "../../../static/about/tutors/GraceM.jpg";
import NainaM from "../../../static/about/tutors/NainaM.jpg";
import JulianaN from "../../../static/about/tutors/JulianaN.jpg";
import RiddhiG from "../../../static/about/tutors/RiddhiG.jpg";
import SophiaT from "../../../static/about/tutors/SophiaT.jpg";
import StefanG from "../../../static/about/tutors/StefanG.jpg";
import NittinM from "../../../static/about/tutors/NittinM.jpg";
import JennyW2 from "../../../static/about/tutors/JennyW.jpg";
import GraceH from "../../../static/about/tutors/GraceH.jpg";
import AmelieB from "../../../static/about/tutors/AmelieB.jpg";
import NityaP from "../../../static/about/tutors/NityaP.png";
import MirandaZ from "../../../static/about/tutors/MirandaZ.jpg";
import AryanR from "../../../static/about/tutors/AryanR.jpg";
import GraceS from "../../../static/about/tutors/GraceS.jpg";


import AshleyH from "../../../static/about/tutors/AshleyH.jpg";
import SaiB from "../../../static/about/tutors/SaiB.jpg";

 


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

class Chapters extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div id="Chapter" className={classes.team}>
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
                    <h2 className={classes.title}>Global Chapters</h2>
                    <h5 className={classes.description}>
                        SaMi Chapters are directed by high school students across the nation and overseas. They recruit and coordinate students in their chapters to attend our free tutoring programs.
                    </h5>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={BradA} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Brad A.</h4>
                        <p className={classes.description}>Director of Sammamish, Washington Chapter</p>
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
                                            Brad is part of the Class of 2025 at Eastlake High School. He has an 8-year-old little brother. He is interested in science and mathematics, and he has been participating in math contests since 4th grade, namely AMCs, Math Is Cool, and MATHCOUNTS. He enjoys coaching others and seeing them learning and growing. He makes people relaxed and can relate to people quickly. He also enjoys playing various sports with his friends and coaching his brother football and baseball.
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
                          <img src={NityaP} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Nitya P.</h4>
                        <p className={classes.description}>Director of Peoria, Arizona Chapter</p>
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
                                            Nitya is part of the Class of 2026 at Basis Peoria. Her favorite subjects include biology, chemistry, and history. She is currently a member of NJHS and has been a part of several volunteer projects and volunteer organizations, such as LAI, Brambley Hedge Rabbit Rescue, and AZ Humane Society. Aside from school, she loves reading and hanging out with her two rabbits. She has a great passion for helping in any way possible. She is an extremely understanding and considerate person so do not hesistate to talk about anything with her including course questions!
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
                          <img src={AmelieB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Amelie B.</h4>
                        <p className={classes.description}>Director of New York City, New York Chapter</p>
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
                                            Amelie is part of the Class of 2025 at Hunter College High School. She was born in Queens, New York City and had attended school in Manhattan for nearly a decade. Her favorite subjects include Mathematics, Global Studies, and Art. She enjoys learning about the cultures and customs of ancient civilizations as well the intricacies of politics throughout history. Amelie also adores solving math problems of all shapes and sizes; where there is a will, there is a way! She spends her free time sketching a variety of images, from diagrams of a chloroplast to cat doodles. Her favorite nonfiction book is Prisoners of Geography by Tim Marshall and her favorite fiction book is The Picture of Dorian Grey by Oscar Wilde.
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
                          <img src={KahlilB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Kahlil B.</h4>
                        <p className={classes.description}>Director of Tuscumbia, Missouri Chapter</p>
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
                                            Kahlil is part of the Class of 2024 at Tuscumbia High School.
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
                          <img src={PrestonB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Preston B.</h4>
                        <p className={classes.description}>Director of Portland, Oregon Chapter</p>
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
                                            Preston is part of the Class of 2022 at Ida B. Wells-Barnett High School in Portland, OR. His mathematical interests include abstract algebra, category theory, and set theory. He’s been involved with math for a while, having competed in Mathcounts, AMC, and ARML since middle school. He really enjoys tutoring and is passionate about sharing math with others. When he's not doing math, he likes to play the piano, do debate, and hang out with his two cats. Preston is so excited to work with SaMi this year!
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
                          <img src={SaiB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Sai B.</h4>
                        <p className={classes.description}>Director of McKinney, Texas Chapter</p>
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
                                            Sai is part of the Class of 2023 at McKinney North High School. His favorite subjects are Math, Physics, Government, and Latin. He also has a great interest in aviation and hopes to be a pilot one day. Tutoring younger children is one of his favorite activities and he feels satisfied when he is able to help someone succeed. He also likes taking part in community service activities, and he was inducted into the National Junior Honor Society in 2019. Sai has also been playing the Piano for four years now. He has also participated in the National History Bee competition and has been one of the top 8 regional champions for three consecutive years (2017 - 2019). In 2019, Sai was a quarter finalist in the National History Bee championship held in Chicago. He is also an active member of the Junior Classical League and has won two National Latin Exam gold medals (2019 and 2020). He has also been inducted into the National Latin Honor Society (NLHS). 
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
                          <img src={DerekC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Derek C.</h4>
                        <p className={classes.description}>Director of Vancouver, Canada Chapter</p>
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
                                            Derek attends The Mulgrave School in West Vancouver, British Columbia, and is a member of the class of 2022. He's an inquisitive student who enjoys working on problems for long periods of time. He has been helping his friends and peers thrive in mathematics since he was in elementary school, and this has sparked a desire to help others all across the world. Coordinate geometry is his favourite subject in school. He likes to write, debate current issues, and play golf in his spare time.
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
                          <img src={VicC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Vic C.</h4>
                        <p className={classes.description}>Director of Jericho, New York Chapter</p>
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
                                            Vic is part of the Class of 2025 at Jericho High School in Jericho, New York. With a great passion for music and love of math, Vic was selected in the 2018 fall for the Institute of Creative Problem Solving for Gifted and Talented students. Teaching and sharing knowledge is something very important to Vic.
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
                          <img src={EthanD} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ethan D.</h4>
                        <p className={classes.description}>Director of Bellevue, Washington Chapter</p>
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
                                            Ethan is part of the Class of 2025 at Newport High School. He was from Bellevue, Washington. He lives with his parents and has an elder sister in college.  He is interested in mathematics and has been participating in math contests since elementary schools, such as Math Kangaroo, MathCounts, and AMCs.  He qualified for AIME at eighth grade. Besides, he also enjoys programming and is currently at the silver division of the USACO programming contest.  His other interests include playing badminton and violin, and definitely video games.  He also reserves time for 1-on-1 tutoring to underrepresented students and playing online board games with special needs students at different non- profit organizations.
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
                          <img src={AngieC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Angie C.</h4>
                        <p className={classes.description}>Director of Lincolnshire, Illinois Chapter</p>
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
                                            Angie is part of the Class of 2023 at Stevenson High School. Her favorite subjects include computer science and chemistry. She is actively involved in tutoring and enjoys helping others learn. During her free time, she appreciates activities such as music and art as well. 
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
                          <img src={ErinC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Erin C.</h4>
                        <p className={classes.description}>Director of Sioux Falls, South Dakota Chapter</p>
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
                                            Erin is in the class of 2022 at Roosevelt High School in Sioux Falls, SD. She is a complete math nerd who loves spending countless hours on problems. Since she was little, she has helped her sister and her friends excel in math, which fueled her passion for helping other students do the same. Her favorite areas of math are combinatorics and calculus, but she enjoys most all problems put her way. In her free time, she likes coding in Python, spending time with her dog, and listening to music.
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
                          <img src={NamrathaC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Namratha C.</h4>
                        <p className={classes.description}>Director of Woodbridge, New Jersey Chapter</p>
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
                                            Namratha is part of the Class of 2024 at the Middlesex Academy for Allied Health and Biomedical Sciences located in Woodbridge, NJ. She is proficient in teaching Math, English, and Biology to grades K-8. She is currently studying biology oriented courses and would love to give input to students who are interested in biology as well! Namratha likes to sing and read a lot of realistic fiction books, one of her favorite being The Seven Husbands of Evelyn Hugo.
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
                          <img src={YuntongC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Yuntong C.</h4>
                        <p className={classes.description}>Director of New Milford, Connecticut Chapter</p>
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
                                            Yuntong (Curley) is part of the Class of 2024 at Canterbury School and she is a sophomore now. She is a 15-year-old girl from China. She studied Honors Preparatory Calculus and AP Calculus and got decent grades. This time she will primarily teach pre-algebra. Yuntong was interested in mathematics. She had also been a volunteer teacher and has a certain experience and grasp of teaching. Yuntong is very responsible in her schoolwork and treats it with care. She has the confidence and ability to take charge of this teaching.
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
                          <img src={IsabelleD} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Isabelle D.</h4>
                        <p className={classes.description}>Director of Chappaqua, New York Chapter</p>
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
                                            Isabelle is part of the Class of 2022 at Horace Greeley High School.
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
                          <img src={LauraE} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Laura E.</h4>
                        <p className={classes.description}>Director of Carson, California Chapter</p>
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
                                            Laura is part of the Class 2023 at Carson Senior High School.
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
                          <img src={RiddhiG} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Riddhi G.</h4>
                        <p className={classes.description}>Director of Upper Arlington, Ohio Chapter</p>
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
                                            Riddhi Gupta is part of the Class of 2023 at Upper Arlington High School. She has been participating in math contests since middle school and has represented Ohio in numerous contests including MathCounts and ARML. She also loves Physics and Computer Science. She is enthusiastic about teaching math and science to other students in her school as a part of the tutoring club. In her free time, she likes to cook, sing, and play piano.
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
                          <img src={StefanG} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Stefan G.</h4>
                        <p className={classes.description}>Director of Orange County, California Chapter</p>
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
                                            Stefan is a part of the Class of 2024 at Tesoro High School in Orange County. His favorite subjects in school are math and computer science! Some of his favorite math includes algebra and statistics! He has taken online certificates for coding on Coursera and has competed in competitions like CyberStart America and CyberPatriot. He loves working with students and often helps tutor his younger brother in math. He loves playing soccer in my free time and plays on both my high school team and a club team! I am so excited to teach all of you this summer!
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
                          <img src={GabrielH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Gabriel H.</h4>
                        <p className={classes.description}>Director of Wilmington, Delaware Chapter</p>
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
                                            Gabriel is part of the class of 2023 at Tower Hill. He loves learning and is excited to share it with others during the SaMi summer program.
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
                          <img src={AshleyH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ashley H.</h4>
                        <p className={classes.description}>Director of Cupertino & Saratoga, California Chapter</p>
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
                                            Ashley is part of the Class of 2025 at Lynbrook High School. She has qualified for AIME, gotten first place with a perfect score at MIG, received AMC 8 Distinguished Honor Roll, placed first at the inteGIRLS Bay Area Math Competition, and qualified for USACO Silver. In her free time, she also loves to play with her cat, dance, play the violin, and attend coding competitions.
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
                          <img src={GraceH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Grace H.</h4>
                        <p className={classes.description}>Director of Wilmington, Delaware Chapter</p>
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
                                            Grace is part of the Class of 2026 at Tower Hill School. Her favorite subjects include Math, Digital Citizenship, and English. She is a part of the stock market club, the math league team, and the lego robotics team. Her hobbies include practicing piano and painting. When she is bored, she loves to annoy her cat, Pang Pang. For some reason, she named her cat fatty in Chinese. She looks forward to tutoring other students!
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
                          <img src={NehaH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Neha H.</h4>
                        <p className={classes.description}>Director of Houston, Texas Chapter</p>
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
                                            Neha is part of the Class of 2023 at  Stephen F. Austin High School. She is on her school’s soccer team and has enjoyed playing the piano since she was 4 years old. She loves to spend her free time reading fantasy books and playing with her cat. Neha also loves to create new projects through coding and is a part of her school’s math and science clubs. Neha is so excited to be a part of SaMi this year!
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
                          <img src={ZacharyH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Zachary H.</h4>
                        <p className={classes.description}>Director of Columbia, South Carolina Chapter</p>
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
                                            Zachary is part of the Class of 2022 at Spring Valley High School. He loves coding and messing around with technology. He participates in both math and programming competitions, and he is in the USACO Gold division. Zachary is also a math peer tutor and AP CS A teaching aide at his high school. He is co-captain of his school's math team and founder of his school's programming club. In his free time, Zack enjoys playing the piano (favorite piece: Chopin's Ballade No. 1) and playing video games (favorite game: Celeste).
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
                          <img src={ZoyaH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Zoya H.</h4>
                        <p className={classes.description}>Director of Austin, Texas Chapter</p>
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
                                            Zoya is part of the Class of 2023 at Stephen F. Austin High School. She is involved in her school's orchestra where she has been playing the cello for over 4 years. Additionally she participates in speech and debate and is a part of her school's math club. In her free time, she enjoys writing as well as baking and reading.
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
                          <img src={AngelJ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Angel J.</h4>
                        <p className={classes.description}>Co-Director of Princeton, New Jersey Chapter</p>
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
                                            Yuntong is a current 10th-grade student at Princeton International School of Mathematics and Science. She has more than a year of computer competition experience and is currently in the Gold Division of USACO. She is a very outgoing and helpful student with a great passion for volunteer projects, who are willing to help more people within her ability. She’s good at getting along with others and is a good persuader and listener. Other than the interest in STEM subjects, she’s also interested in and good at many kinds of sports including golf, basketball, badminton, and so on. So, feel free to talk to her with any questions about the course she is in charge of, or just come to say hi!
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
                          <img src={JerrysonJ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jerryson J.</h4>
                        <p className={classes.description}>Director of Culver, Indiana Chapter</p>
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
                                            Jerryson is a Class of 2025 at Culver Academies. Jerryson is a really friendly person but treats studying seriously. He plays JV basketball, golf, and the alto-saxophone for both the concert and marching band. He always brings positive energy and humor to the people around him. Now, Jerryson is taking Honor-Precalculus in his freshman year at Culver Academies, and he has a special and creative way of thinking about what studying is!
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
                          <img src={ColinK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Colin K.</h4>
                        <p className={classes.description}>Director of Twinsburg, Ohio Chapter</p>
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
                                            Colin is part of the Class 2023 at Twinsburg High School.
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
                          <img src={GinaK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Gina K.</h4>
                        <p className={classes.description}>Director of Sharon, Massachusetts Chapter</p>
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
                                            Gina is part of the Class 2023 at Sharon High School.
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
                          <img src={MelissaK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Melissa K.</h4>
                        <p className={classes.description}>Director of Seongnam, South Korea. Chapter</p>
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
                                            Melissa is part of the Class of 2024 at Seoul International School, South Korea. Melissa is an avid fan of biology, mathematics, and computer science, and she is a USAJMO Qualifier, USACO Platinum division participant, a Math Prize for Girls participant, and a 2022 Regeneron ISEF Finalist. She is also a harpist and cheerleader who enjoys spending time with her dog, stretching, and practicing tumbling. Melissa is excited to meet and share her passion for STEM with the SaMi community!
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
                          <img src={ZulfiyyaK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Zulfiyya K.</h4>
                        <p className={classes.description}>Director of Ashaghi Guzdak, Azerbaijan Chapter</p>
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
                                            Zulfiyya is part of the Class of 2022 at Ashaghi Guzdak School, Azerbaijan. She is an alumnus of Stanford University Mathematics Camp, Canada/USA Mathcamp, Stanford Pre-Collegiate University-Level Online Math & Physics, and European School Summer Camp. Zulfiyya is Chief Mathematics Interpreter of Khan Academy Azerbaijan with 3 years of volunteering experience and was awarded the Volunteer Excellence Award. She is Co-President of Elevate the Future Azerbaijan and Ambassador of International Youth Math Challenge. Currently, Zulfiyya is working on her second research project and is looking forward to being a part of San Antonio Math Include.
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
                          <img src={AvaL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ava L.</h4>
                        <p className={classes.description}>Director of Wallingford, Connecticut Chapter</p>
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
                                            Ava is part of the Class of 2023 at Choate Rosemary Hall. Her favorite subjects are math and computer science. She has qualified for AIME, USAJMO, and USAMO in the past few years, and was selected for the Math Prize for Girls in 2020. At school, she is a member of the math club and the science research program. Her other interests include reading and running. She is excited to take part in SaMi and inspire young students to explore more into STEM.
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
                          <img src={KassieL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Kassie L.</h4>
                        <p className={classes.description}>Director of Fremont, California Chapter</p>
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
                                            Kassie is part of the Class 2023 at Irvington High School.
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
                          <img src={CanisL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Canis L.</h4>
                        <p className={classes.description}>Director of San Jose, California Chapter</p>
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
                                            Canis is part of the Class of 2024 at Valley Christian High School. He was born and raised in San Jose. He lives with his parents, his brother, and his grandparents. He is interested in math, physics, and computer science. Since elementary school, he has competed in various math competitions, such as Mathleague, MathCounts, and AMCs. He qualified for AIME in 8th grade, scored 780 on the SAT I Math in 6th grade, and is in the USACO Silver division. He has been tutoring math to middle school students. He likes to play video games, play volleyball, and listen to music.
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
                          <img src={LucyL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Lucy L.</h4>
                        <p className={classes.description}>Director of Middlebury, Connecticut Chapter</p>
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
                                            Lucy is a part of Class 2024 at Westover School in Connecticut. She loves math and she is really good at it. She takes AP Computer Science this year as it deeply interests her. She also joined her school Robotic team and she is preparing for a Robotic competition this fall. She enjoys helping others and being a tutor. When she went to a poor area in Yunnan, China to teach the children there last summer, she did a good job and all the children there loved her teaching. She is looking forward to joining Sami and helping more children with their academic work. 
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
                          <img src={StephanieL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Stephanie L.</h4>
                        <p className={classes.description}>Director of San Mateo, California Chapter</p>
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
                                            Stephanie is part of The Nueva School’s Class of 2023. She loves reading, writing, music, psychology, photography, and animals. Volunteering with cats at the Peninsula Humane Society / SPCA is a much-loved pastime, for which she was awarded a gold President’s Volunteer Service Award. She plays piano, violin, viola, and ukulele and is a proud member of the Peninsula Youth Orchestra. She also loves musicals, with some of her favorites including Les Miserables, Anastasia, Six, and Hamilton. She looks forward to helping students at SaMi achieve their full potential in mathematics.
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
                          <img src={JamesL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>James L.</h4>
                        <p className={classes.description}>Co-Director of Boise, Idaho Chapter</p>
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
                                            James is part of the Class of 2022 at Timberline High School. His favorite subjects are Math and Computer Science. After taking CSA, he developed an interest in programming/mathematics, and began participating in contests such as MAA AMC/USACO/Science Bowl. Over the summer he enjoyed teaching kids how to code, and also founded the Math and CS clubs at his school. In his free time he likes to play the clarinet, and video games including League of Legends and Valorant.
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
                          <img src={EmilyL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Emily L.</h4>
                        <p className={classes.description}>Director of Wayzata, Minnesota Chapter</p>
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
                                            Emily is part of the class of 2022 at Wayzata High School in Minnesota. She loves STEM, and has been participating in various math competitions since elementary school. Her favorite area of math is combinatorics. She is also involved in science and trivia competitions like Science Bowl and Quiz Bowl. Her other interests include playing the saxophone and reading.
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
                          <img src={KevinL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Kevin L.</h4>
                        <p className={classes.description}>Director of Verbena, Alabama Chapter</p>
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
                                            Kevin is part of the Class of 2024 at Verbena High School.
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
                          <img src={GraceM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Grace M.</h4>
                        <p className={classes.description}>Director of Laurel, Maryland Chapter</p>
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
                                            Grace is part of the Class of 2023 at Chesapeake Math and IT Academy South. She loves math and computing and has experience tutoring after school in both fields. She is an active member of her school's Science Olympiad team and National Honor Society. Grace has also won awards such as the President's Volunteer Service Award and the Congressional Medal for her volunteer work and servitude around her community. Grace has also received awards in computing like the NCWIT AiC State Honorable Mention award and the CyberStart America National Cyber Scholarship Semifinalist award. In her free time, Grace loves to cook, take walks, and hang out with her friends.
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
                          <img src={NainaM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Naina M.</h4>
                        <p className={classes.description}>Director of Tempe, Arizon Chapter</p>
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
                                      horizontal: 'center',                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Naina is a Biomedical Engineering (Biomedical Devices) major and part of the Class of 2025 at Barrett, the Honors College at Arizona State University. She is originally from Bagdad, Arizona. From 2017-2021, Naina participated in the Future Business Leaders of America, where she was National Finalist and Winner in Business Communications, Business Calculations, and Information Technology. In 2020, she founded a free Summer K-12 Tutoring Program to support students during the COVID-19 Pandemic. She is an SFIS Undergraduate Research Fellow, Secretary of the ASU Biomedical Engineering Society and member of ASU Fencing Club, HOSA, and Barrett Honors College Council.
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
                          <img src={NittinM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Nittin M.</h4>
                        <p className={classes.description}>Director of Lincolnshire, Illinois Chapter</p>
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
                                      horizontal: 'center',                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Nittin is an aspiring engineering and a rising senior (class of 2023). He has many interests within the fields of STEM. Primarily robotics, mathematics and Physics. He has participated in FIRST Robotics and VEX robotics as a part of his school club and have participated in math contests such as AMC and MathCounts as a part of his schools math team. He is also a peer tutor for mathematics at his high school. 
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
                          <img src={AlyonaN} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Alyona N.</h4>
                        <p className={classes.description}>Director of Moscow, Russia Chapter</p>
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
                                            Alyona is part of the Class of 2024 at Higher School of Economics (University in Moscow, Russia). She isn't sure what she's going to do in the future, but as for now, she studies math, education, and data science. Beyond academics, she enjoys figure skating, dancing, hiking, and playing with her little 4 year old nephew.
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
                          <img src={JulianaN} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Juliana N.</h4>
                        <p className={classes.description}>Director of Naples, Florida Chapter</p>
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
                                            Juliana is part of the Class of 2025 at Lely high school. She is in activities such as Model UN, SSEF, and Army JROTC. She is also the president of her class. She is a part of a scientific research project revolving around the environment. Overall, she hopes to become a role model and be successful in aiding people around the world. As time goes by, she hopes to have accomplished a lot by traveling and helping solve global problems and have helped a good amount of people, especially with her passion for the environment and having an engineering-like mind.
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
                          <img src={KellyN} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Kelly N.</h4>
                        <p className={classes.description}>Director of Baltimore, Maryland Chapter</p>
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
                                            Kelly is a part of the class of 2025 at Garrison Forest School. She loves math and loves teaching others math. She took double math courses in her first year of upper school. She is also the Academic Mentor of math in her school. She likes the process of solving math problems and the joy after solving them. In addition to mathematics, She also likes physics, statistics and other mathematics-related subjects. Besides studying, She likes to sing and play the piano. She is also a fencer, she has been practicing fencing for seven years. She hopes that by joining SaMi, she can help more students learn and love math.
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
                          <img src={AryanR} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Aryan R.</h4>
                        <p className={classes.description}>Director of Peoria, Arizona Chapter</p>
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
                                            Aryan is a part of the 2025 class at Basis Peoria. One of his favorite hobbies is reading books and he has read over 200 books. He is also interested in soccer and has played for 10 years. Aryan has joined the Science Bowl team and the Speech and Debate team due to his love of learning new things. He is always on the lookout for new experiences and loves learning new things. He is very excited to be able to help out and give back to the community through SaMi.
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
                          <img src={GarimaR} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Garima R.</h4>
                        <p className={classes.description}>Director of Concord, New Hampshire Chapter</p>
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
                                            Garima is part of the Class of 2024 at Virtual Learning Academy Charter School. She was the New Hampshire state champion for MATHCOUNTS for the last two years of her middle school, and has qualified for AIME since her 8th grade. In 2021, she was selected for Math Prize for Girls and also earned the Two Sigma AMC 10 Certificate of Excellence for being one of the top 5 scorers in AMC 10 in her region. She loves teaching - in her hometown of Concord, she and her brothers have founded a math club for middle school students.
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
                          <img src={NeerajaS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Neeraja S.</h4>
                        <p className={classes.description}>Director of Tomball, Texas Chapter</p>
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
                                            Neeraja is a part of the Class of 2023 at Tomball Memorial High School. She lives in Tomball, Texas with her parents and her younger sister. She has participated in several math competitions, including UIL and TMSCA (Texas Math and Science Coach's Association). She is also part of her school's math club (Mu Alpha Theta) and is president of her school's science club. Neeraja loves to go on long runs and play the piano and is exited for the opportunity to help children across the country learn more about STEM! 
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={EmilyS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Emily S.</h4>
                        <p className={classes.description}>Director of Loveland, Colorado Chapter</p>
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
                                            Canis is part of the Class of 2024 at Loveland High School.
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
                          <img src={HarineeS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Harinee S.</h4>
                        <p className={classes.description}>Director of Prosper, Texas Chapter</p>
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
                                            Harinee is part of the Class of 2023 at Prosper High School. She was part of NJHS during middle school and HOPE squad member during freshman year. She is in advanced math level and has taken AP computer science principles as elective. She is an Indian classical dancer and has been learning for the last nine years. She enjoys doing activities like playing her piano and dancing. She volunteers at ManeGait Therapeutic Horsemanship as a barn buddy and enjoys spending time with the horses. In her free time, Harinee enjoys playing her ukulele and spending time with her friends and family. She is excited to be part of 'SaMI' working with other students and helping them learn new things!
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
                          <img src={GraceS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Grace S.</h4>
                        <p className={classes.description}>Director of Grapevine, Texas Chapter</p>
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
                                            Grace is a rising sophomore in the Class of 2025 at iUniversity Prep. She is particularly interested in computer science and mathematics. She is currently in the USACO silver division and has participated in math competitions since elementary school. Grace enjoys working with and helping others and has years of experience as a student leader in clubs such as NJHS and Student Council. In her free time, she enjoys running, writing, and listening to music. Through being a tutor at SaMi, she hopes to help students cultivate their interests in STEM.
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
                          <img src={SainaS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Saina S.</h4>
                        <p className={classes.description}>Director of Chapin, South Carolina Chapter</p>
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
                                            Saina is a sophomore from South Carolina who aspires to help the impoverished and make justice accessible to all. In technology, she is an avid programmer and wants to incorporate technology into law. Saina is currently co-leading the Lex-Rich 5 school district FIRST Robotics team, Pandemaniacs, spanning four high schools in the area. She is proud of teaching kids STEM skills like SCRATCH programming and mathematics.
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
                          <img src={LindaT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Linda T.</h4>
                        <p className={classes.description}>Director of Alexandria, Virginia Chapter</p>
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
                                            Linda is part of the Class of 2024 at Thomas Jefferson High School for Science and Technology. Two of her favorite subjects at school include mathematics and computer science. Although she isn’t particularly passionate about math, she still loves to teach the subject and help others understand it better. Outside of school, Linda enjoys writing stories, playing (casual) chess, playing video games, and working with Blender, a 3D computer graphics software.
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
                          <img src={SophiaT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Sophia T.</h4>
                        <p className={classes.description}>Director of San Diego, California Chapter</p>
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
                                            Sophia is part of the Class of 2025 at Del Norte High School. She is passionate about science, mathematics, and computer science. She enjoys teaching and helping others grow and learn. During her free time, Sophia loves to read and spend time with family and friends.
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
                          <img src={JennyW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jenny W.</h4>
                        <p className={classes.description}>Director of Bloomington, Minnesota Chapter</p>
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
                                            Jenny is part of the Class of 2025 at Kennedy High School in Bloomington, Minnesota. Jenny has participated in Mathcounts and taken Algebra I and II, Geometry, Trigonometry, Precalculus, and Statistics, along with completing college-level programming and algorithm courses. She is part of the gifted program which allowed her to develop her math skills even more and jump from middle school math to high school math. When she isn't doing STEM, she also plays the piano and the violin, draws, and works on her other hobbies. She hopes that by joining SaMi, she can give other students more opportunities to learn about math, excel in math along with developing a passion for this subject.
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
                          <img src={AmeliaW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Amelia W.</h4>
                        <p className={classes.description}>Director of Guymon, Oklahoma Chapter</p>
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
                                            Amelia is part of the Class of 2023 at Guymon High School.
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
                          <img src={AthenaW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Athena W.</h4>
                        <p className={classes.description}>Director of Iowa City, Iowa Chapter</p>
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
                                            Athena is part of the Class of 2024 at Iowa City West High School in Iowa City, Iowa. She's passionate about competition math, and sharing it with others. She's gotten a perfect score on the AMC8 and qualified for AIME. Outside of academics, she will be either drawing or reading some terribly controversial article. 
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
                          <img src={HannahW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Hannah W.</h4>
                        <p className={classes.description}>Director of Chappaqua, New York Chapter</p>
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
                                            Hannah is part of the Class of 2022 at Fairview High School in Boulder, CO. She has a passion for math and biology. She’s competed in local and national math competitions such as Mathcounts, Math League, the AMCs and the AIME, and was selected for Math Prize for Girls in 2020. She loves teaching piano, coaching swimming and tutoring math. In her free time, she enjoys hiking, skiing and making playlists.
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
                          <img src={GhalenW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ghalen W.</h4>
                        <p className={classes.description}>Director of Monroe, Louisiana Chapter</p>
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
                                            Ghalen is part of the Class of 2023 at Carroll High School.
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
                          <img src={JennyW2} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jenny W.</h4>
                        <p className={classes.description}>Director of Frisco, Texas Chapter</p>
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
                                            Jenny is part of the Class of 2025 at Liberty High School. Academically, she learned algebra I&II, geometry, pre-calculus, and honors chemistry during her middle school years.  She completed AP Calculus AB, AP Chemistry, and AP Physics 1 in her 9th grade. She is a passionate & experienced math and science tutor in the Frisco and Plano area.  During her free time, she enjoys playing the violin, fishing, table tennis, and badminton. She is excited to help others learn and grow. 
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
                          <img src={JinheeW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jinhee W.</h4>
                        <p className={classes.description}>Director of Carmel, Indiana Chapter</p>
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
                                            Jinhee is part of the Class of 2022 of Carmel High School. She is a three time AIME qualifier and an avid lover of math and science. Her passion for math began and was fostered by her middle school math club, where she learned about math beyond school. She became very interested in how math could be more than just repetition and school work. Through math club, she learned about the intricacies and beauty of geometry, number theory, and combinatorics, which are subjects that she really enjoys.
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
                          <img src={MirandaW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Miranda W.</h4>
                        <p className={classes.description}>Director of Summit, New Jersey Chapter</p>
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
                                            Miranda is part of the Class of 2024 at Kent Place School. She has participated in various math competitions since primary school, including the AMCs, MathCounts, and Mathleague. Her favorite topic in math is combinatorics. She joined SaMi to help everyone have the opportunity to enjoy learning interesting and exciting topics in math and science. Miranda is a member of the Ethics Bowl team at her school and plays the piano and the flute. Outside of math, she enjoys participating in community service and is especially passionate about helping the environment.
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
                          <img src={StephanieW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Stephanie W.</h4>
                        <p className={classes.description}>Director of Johns Creek, Georgia Chapter</p>
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
                                            Stephanie is part of the Class of 2023 at Johns Creek High School. They are passionate about STEM and education. They love to encourage younger kids to be passionate about math, science, computer science, and other subjects. Stephanie enjoys helping her community through STEM workshops and community service projects. In her free time, she loves to listen to music and try out new recipes! 
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
                          <img src={WillW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Will W.</h4>
                        <p className={classes.description}>Co-Director of Boise, Idaho Chapter</p>
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
                                            Will is part of the Class of 2023 at Boise High School. He has experience with numerous math competitions, and he especially loves Olympiad number theory. Will was also the biology and math specialist of a team that placed 9th at the National Science Bowl in 2019. He has taught classes and written solutions for competition math locally and for other states. He is a huge fan of classical music (especially piano concertos), and he plays the oboe for the Boise Philharmonic Youth Orchestra. During the pandemic, Will enjoys lazing around and kicking a ball. His favorite composers are Schubert and Rachmaninoff.
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
                          <img src={HaileyX} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Hailey X.</h4>
                        <p className={classes.description}>Director of Mercer Island, Washington Chapter</p>
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
                                            Hailey is part of the Class of 2023 at Mercer Island High School. She has a passion for math and chemistry. She’s competed in local and national math competitions including the AMCs and the AIME, and was selected for Math Prize for Girls in 2019 and 2020. She was one of top five female scorers for the AMC 10/12 in the Pacific Northwest. She loves playing tennis, watching anime, and hanging out with friends. 
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
                          <img src={NathanX} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Nathan X.</h4>
                        <p className={classes.description}>Co-Director of Westford, Massachusetts Chapter</p>
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
                                            Nathan is part of the Class of 2022 at Westford Academy. He was born and raised in Westford and from a young age learned the importance of giving back to the community. He believes that education is the best way to reach out to people of all different backgrounds, and that learning, as well as teaching, is a privilege, and should not be taken for granted. His favorite subjects are Math and History, and he has extensive experience working with children, In his free time, he enjoys playing sports like basketball and football.
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
                          <img src={WilliamX} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>William X.</h4>
                        <p className={classes.description}>Co-Director of Westford, Massachusetts Chapter</p>
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
                                            William is part of the Class of 2022 at Westford Academy in Massachusetts. William's favorite subjects in school are math, computer science, and English. He participates in his school's business club, DECA, and has made it to the international competition twice. In his free time, William can be found hanging out with his friends, playing video games, and reading. He loves playing just about any sport, and his favorites include basketball, football, soccer, and tennis. 
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
                          <img src={DessieY} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Dessie Y.</h4>
                        <p className={classes.description}>Co-Director of Princeton, New Jersey Chapter</p>
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
                                            Dessie is part of the Class of 2025 at The Hun School of Princeton. Her favorite subjects are math, biology, and English, and she has participated in several math competitions including AMC 10 and Mathcounts. She also enjoys public forum debate and model UN, and participates in these activities in and out of school. She enjoys helping and teaching people to better help them understand and learn new areas of knowledge. 
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
                          <img src={JoannaY} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Joanna Y.</h4>
                        <p className={classes.description}>Director of Bellevue, Washington Chapter</p>
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
                                            Yixuan Yun is part of the Class of 2023 at Forest Ridge of the Sacred Heart, Bellevue WA, you can also call her Joanna. She plans to participate in the San Antonio Math Include (SaMi) and is interested in being the Chapter Director of Bellevue, WA because she has a passion for math and enjoys teaching. She thinks joining this program can make this passion an even bigger part of her life and inspire and develop others’ own passion for math. Besides, she loves the satisfaction when she eventually solves a difficult question, and she hopes more students can experience this satisfaction and thus fall in love with math. She is looking forward to seeing all students during the summer in SaMi!
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
                          <img src={RachelY} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Rachel Y.</h4>
                        <p className={classes.description}>Director of Bridgewater, New Jersey Chapter</p>
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
                                            Rachel is part of the Class of 2022 at the Academy for Health and Medical Sciences. Her favorite subjects are math and biology, and she has participated in several math competitions in the past, such as the AMC 10/12. In her free time, she enjoys reading long book series and playing board games with her friends. She has experience instructing students of all ages on subjects ranging from school math to internet safety. She hopes she can inspire young students to explore fields of STEM and is excited to tutor at SaMi.
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
                          <img src={AndrewZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Andrew Z.</h4>
                        <p className={classes.description}>Director of Ann Arbor, Michigan Chapter</p>
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
                                            Andrew is part of the Class of 2024 at Greenhills School. As a 9th grader, he is currently taking AP Calculus A. He is passionate about math, art, and science. He is also passionate about service and helping others. He hopes to be able to help younger kids improve their mathematics and computer science abilities. He is a member of his school's robotics team and performs in his school's theatre productions. In middle school, he was on the MATHCOUNTS team, and made it to the state competition. He spends his free time drawing, reading, and playing video games.
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
                          <img src={DanielZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Daniel Z.</h4>
                        <p className={classes.description}>Director of Bloomfield Hills, Michigan Chapter</p>
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
                                            Daniel is part of the Class of 2022 at Cranbrook School in Bloomfield Hills, Michigan.  While his home is in Ann Arbor, Michigan, he lives in the dorms at school. Daniel has many passions, some of which include programming, 3D modeling, participating in robotics, as well as playing music and chess. Additionally, Daniel loves sharing his passions with others. Daniel has been a violin tutor in the past and also plans to tutor robotics this coming summer. He hopes that by joining SaMi, he can facilitate the education of other students.
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
                          <img src={KaiwenZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Kaiwen Z.</h4>
                        <p className={classes.description}>Director of Sunnyvale, California Chapter</p>
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
                                            Kaiwen is part of the Class of 2024 at Archbishop Mitty High School. He is an avid basketball player who has been playing for five years competitively and part of his school team. Since 6th grade, he has been apart of various math contests like MathCounts, MathLeague, and AMC. He scored in the honor roll in AMC8 on two occasions, and qualified for the state Math League Championship. In addition to math, for computer science he passed the bronze division and advanced into the silver USACO division during the winter of ninth grade. In his free time, he also enjoys listening to the music, volunteering for the community, and hanging out with friends.
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
                          <img src={MirandaZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Miranda Z.</h4>
                        <p className={classes.description}>Director of Toronta, Canada Chapter</p>
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
                                            Miranda is part of the Class of 2023 at Marc Garneau Collegiate Institute in Toronto, Ontario. She was lucky enough to be sent to math classes at a young age, which is where her passion for math began to grow. She competed on team Canada for the European Girls Math Olympiad, winning silver, and has also attended numerous other math contests such as the AMC, AIME, Euclid, CMIMC, HMMT, and more. When she isn’t doing math, Miranda enjoys drinking bubble tea with her friends and singing in the Toronto Children’s Chorus. She is excited to be able to teach others about mathematics!
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
                          <img src={RayZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ray Z.</h4>
                        <p className={classes.description}>Director of Round Rock, Texas Chapter</p>
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
                                            Ray is part of the Class of 2026 at Walsh Middle School. Starting in 6th grade, he participated in math competitions including MathCounts, MathWorks, and AMC competitions. He got first place in his MathCounts chapter in 6th grade and qualified for MathCounts National and AIME in 7th grade. He signed up to be a tutor for San Antonio Math Include because he enjoys doing math and wants to help others learn math. In his spare time, he enjoys doing math, playing video games, and taking walks outside.
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
                          <img src={YunfeiZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Yunfei Z.</h4>
                        <p className={classes.description}>Director of South Windsor, Connecticut Chapter</p>
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
                                            Yunfei is part of the Class of 2023 at South Windsor High School. From a young age, he has enjoyed learning about mathematics and science, and those are his favorite subjects at school. He has also enjoyed participating in math competitions like MATHCOUNTS. He also likes to help others learn and often helps other students with math and science. Yunfei also plays the flute in his school’s band. He thinks that SaMi is a great organization because it helps kids to learn about math topics, and anyone should be able to learn what they want.
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
)(Chapters)