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
import PrestonT from "../../../static/about/tutors/PrestonT.jpg";
import ElijahW from "../../../static/about/tutors/ElijahW.jpg";
import TejsaiY from "../../../static/about/tutors/TejsaiY.jpg";
import JohnC from "../../../static/about/tutors/JohnC.jpg";
import PoonachaC from "../../../static/about/tutors/PoonachaC.jpg";
import EricZ from "../../../static/about/tutors/EricZ.jpg";
import AanikaP from "../../../static/about/tutors/AanikaP.jpg";
import CanisL from "../../../static/about/tutors/CanisL.jpg";
import WillW from "../../../static/about/tutors/WillW.jpg";
import YunfeiZ from "../../../static/about/tutors/YunfeiZ.jpg";
import AnonaT from "../../../static/about/tutors/AnonaT.jpg";
import EllaR from "../../../static/about/tutors/EllaR.jpg";
import FrancescaF from "../../../static/about/tutors/FrancescaF.jpg";
import GaneshT from "../../../static/about/tutors/GaneshT.jpg";
import GilianeM from "../../../static/about/tutors/GilianeM.jpg";
import HarshadaK from "../../../static/about/tutors/HarshadaK.jpg";
import ImanZ from "../../../static/about/tutors/ImanZ.jpg";
import KathyL from "../../../static/about/tutors/KathyL.jpg";
import LauraM from "../../../static/about/tutors/LauraM.jpg";
import LiamT from "../../../static/about/tutors/LiamT.jpg";
import LillianP from "../../../static/about/tutors/LillianP.jpg";
import MallyS from "../../../static/about/tutors/MallyS.jpg";
import MoeezA from "../../../static/about/tutors/MoeezA.jpg";
import ParthS from "../../../static/about/tutors/ParthS.jpg";
import PieroM from "../../../static/about/tutors/PieroM.jpg";
import PrasadS from "../../../static/about/tutors/PrasadS.jpg";
import SaadM from "../../../static/about/tutors/SaadM.jpg";
import SahanaB from "../../../static/about/tutors/SahanaB.jpg";
import SaiB from "../../../static/about/tutors/SaiB.jpg";
import TobyS from "../../../static/about/tutors/TobyS.jpg";
import TylerR from "../../../static/about/tutors/TylerR.jpg";
import WesleyH from "../../../static/about/tutors/WesleyH.jpg";
import WyattA from "../../../static/about/tutors/WyattA.jpg";
import YsabellaB from "../../../static/about/tutors/YsabellaB.jpg";
import ZeinaH from "../../../static/about/tutors/ZeinaH.jpg";
import HarineeS from "../../../static/about/tutors/HarineeS.jpg";
import AdityaP from "../../../static/about/tutors/AdityaP.jpg";
import AlenaZ from "../../../static/about/tutors/AlenaZ.jpg";
import AndrewZ from "../../../static/about/tutors/AndrewZ.jpg";
import AndyZ from "../../../static/about/tutors/AndyZ.jpg";
import AnishK from "../../../static/about/tutors/AnishK.jpg";
import AnshJ from "../../../static/about/tutors/AnshJ.jpg";
import AnviK from "../../../static/about/tutors/AnviK.jpeg";
import ArielleR from "../../../static/about/tutors/ArielleR.jpeg";  
import AshleyH from "../../../static/about/tutors/AshleyH.jpg";  
import CalvinZ from "../../../static/about/tutors/CalvinZ.PNG";
import ChristinaF from "../../../static/about/tutors/ChristinaF.jpg";
import ChristineT from "../../../static/about/tutors/ChristineT.jfif";
import CodyZ from "../../../static/about/tutors/CodyZ.jpg";
import DanielW from "../../../static/about/tutors/DanielW.jpeg";
import DanielZ from "../../../static/about/tutors/DanielZ.JPG";
import DevahutiN from "../../../static/about/tutors/DevahutiN.PNG";
import EdwardB from "../../../static/about/tutors/EdwardB.jpeg";
import EmilyM from "../../../static/about/tutors/EmilyM.jpg";  
import ErinC from "../../../static/about/tutors/ErinC.jpg";  
import EthanD from "../../../static/about/tutors/EthanD.png";
import EvanN from "../../../static/about/tutors/EvanN.jpg";
import GabrielH from "../../../static/about/tutors/GabrielH.jpg";
import GiannaK from "../../../static/about/tutors/GiannaK.jpg";
import HannahW from "../../../static/about/tutors/HannahW.jpg";
import JinheeW from "../../../static/about/tutors/JinheeW.JPG";
import KaiwenZ from "../../../static/about/tutors/KaiwenZ.jpg";
import KarissaP from "../../../static/about/tutors/KarissaP.jpeg";
import LindaT from "../../../static/about/tutors/LindaT.jpg";  
import MirandaW from "../../../static/about/tutors/MirandaW.png";  
import NathanX from "../../../static/about/tutors/NathanX.png";
import NayeonK from "../../../static/about/tutors/NayeonK.jpg";
import OrryH from "../../../static/about/tutors/OrryH.jpg";
import RachelY from "../../../static/about/tutors/RachelY.jpg";
import RahulS from "../../../static/about/tutors/RahulS.jpg";
import RayZ from "../../../static/about/tutors/RayZ.jpg";
import SamikaK from "../../../static/about/tutors/SamikaK.png";
import SanjanaC from "../../../static/about/tutors/SanjanaC.jpg";
import SiriB from "../../../static/about/tutors/SiriB.jpeg";  
import WilliamX from "../../../static/about/tutors/WilliamX.jpeg";  
import ZacharyH from "../../../static/about/tutors/ZacharyH.JPG";  




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
                        <h4 className={classes.cardTitle}>Hannah G., Head Tutor, Founder and CEO</h4>
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
                          <img src={MoeezA} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Moeez A.</h4>
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
                                            Moeez is part of the Class of 2022 at Basis San Antonio Shavano. He has always enjoyed school and always enjoys learning new things everyday. He has no favorite subject, but he does cherish STEM subjects over others, especially biology and mathematics. Although math has been one of his favorites, he has also needed extra help in math the most, which is one of his reasons for joining SAMI: to help others who struggle in math. He is a member of the debate club, HOSA, and occasionally participates in UIL and volunteers for the EL Bari Clinic. Other hobbies of his include reading books and online articles, as well as watching videos online to learn new things. 
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
                          <img src={WyattA} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Wyatt A.</h4>
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
                                            Wyatt is part of the Class of 2022 at Winston Churchill High School. He is an avid soccer player who has played the sport competitively for many years and is a member of the Churchill Varsity Soccer Team. Wyatt is involved in Mu Alpha Theta, a club where he volunteers to help other students succeed and reach their goals in math. He was also selected to serve as Event Coordinator of Winner’s Circle, an outstanding club whose members pledge to live a drug and alcohol-free lifestyle. 
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
                          <img src={SahanaB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Sahana B.</h4>
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
                                            Sahana is a part of the class of 2023 at Basis Shavano. She has participated in NJHS for three years. She enjoys classical Indian dance and volunteering in local community events. Sahana likes working with children and looks forward to being a tutor.
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
                                            Sai is part of the Class of 2023 at BASIS San Antonio Shavano. His favorite subjects are Math, Physics, Government, and Latin. He also has a great interest in aviation and hopes to be a pilot one day. Tutoring younger children is one of his favorite activities and he feels satisfied when he is able to help someone succeed. He also likes taking part in community service activities, and he was inducted into the National Junior Honor Society in 2019. Sai has also been playing the Piano for four years now. He has also participated in the National History Bee competition and has been one of the top 8 regional champions for three consecutive years (2017 - 2019). In 2019, Sai was a quarter finalist in the National History Bee championship held in Chicago. He is also an active member of the Junior Classical League and has won two National Latin Exam gold medals (2019 and 2020). He has also been inducted into the National Latin Honor Society (NLHS). 
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
                          <img src={YsabellaB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ysabella B.</h4>
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
                                            Ysabella is part of the Class of 2023 at Basis San Antonio Shavano. She has been a part of NJHS for two years. Math is Ysabella's best subject in school and she enjoys helping others learn and understand the content. She is excited to be a part of SaMi. Her favoriate subjects are biology and math. Ysabella was a gymnast for 9 years and she is currently playing basketball and softball for Basis teams. Outside of school Ysabella likes to watch Netflix and listen to music. 
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
                          <img src={JohnC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>John C.</h4>
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
                                            John is part of the Class of 2023 at Basis San Antonio Shavano. He enjoys any classes that have to do with math including Pre-Calculus, Physics, and Chemistry; He also has tutored peers for his teachers every year from 5th to 8th. John plays many video games during his spare time with his friends, and he frequently helps them with their homework. He is also interested in guitars and music. John enjoys filming and editing videos for his Youtube channel; He also is a big fan of media and enjoys watching movies, making and looking at memes, and finding new things on the internet. 
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
                          <img src={PoonachaC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Poonacha C.</h4>
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
                                            Poonacha is part of the Class of 2022 at Basis Shavano. He has always been passionate about mathematics from a young age. He is extremely interested in tutoring others, and it has always been an interest of his. His favorite subjects are Calculus, Physics, Computer Science, and Programming. He has participated and done well in HOSA (Health Occupations Students of America) while also co-founding a computer science club at his school. He is very excited to teach in SAMi since he believes it is an excellent organization that gives opportunities to teach others mathematics. 
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
                          <img src={FrancescaF} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Francesca F</h4>
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
                                            Francesca is part of the Class of 2023 at Basis San Antonio Shavano. She has participated in NJHS for the last 3 years. She has been a musician in YOSA for 8 years. Francesca plays the drums in the Honors Band. She is part of the San Antonio Figure Skating Club and has earned her Third-degree Black Belt in Taekwondo. She has also earned the Presidential Volunteer Service Award gold level for the last 2 years. Francesca also likes to work with kids.
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
                          <img src={WesleyH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Wesley H.</h4>
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
                                            Wesley is part of the Class of 2021 at Basis San Antonio Shavano. He loves math and the natural sciences. His favorite classes are Multivariable Calculus, AP Physics C, and AP Computer Science A. Wesley has participated in FIRST Robotics for 6 years and qualified to compete at the FTC World Championship 2 years in a row. He also has significant experience in Python artificial intelligence. Since math and computer science have always been a few of his many passions, he has decided to help provide resources for younger children to pursue goals in these courses through programs like SaMi. 
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
                          <img src={ZeinaH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Zeina H.</h4>
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
                                            Zeina is a part of the amazing Class of 2023 at the Young Women’s Leadership Academy! She loves learning and gaining new knowledge- especially anything related to math and science. Zeina participates in as much as she can, whether that’s within electives, classes, or competitions. Above all, she is passionate about helping others to enjoy learning the way she does and tutors junior high students frequently, particularly in math. On top of academics and extracurriculars, Zeina likes community service, training as a dancer, and writing. She’s looking forward to being involved with this program! 
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
                          <img src={HarshadaK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Harshada K.</h4>
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
                                            Harshada is part of Basis Shavano’s class of 2022. She finds math to be an interesting, and useful subject which manages to challenge her in ways that other classes could not. She enjoys working out problems with friends, and helps other people when needed. She makes sure to ask if her classmates have understood material and constantly participates in class. Outside of school she loves to read and dance.
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
                          <img src={CanisL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Canis L.</h4>
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
                                            Jen is part of the Class of 2021 at John Marshall High School. She started her BASIS schooling in 6th grade and ended at the end of freshman year. She has done 2 clubs at BASIS which were UIL and Game club. She continued participating in clubs at Marshall in which she attended HOSA, and the sports track and cross country. She is part of the Varsity Orchestra at Marshall and part of the viola section. She joined SaMi in order to further improve her skills as a teacher and to help the community in teaching math for the many students who are struggling.
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
                          <img src={KathyL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Kathy L.</h4>
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
                                            Kathy is part of the Class of 2023 at Ronald Reagan High School. She joined SaMi because she believes in its core value of spreading Math to many varieties of individuals for free. She enjoys tutoring because it provides an opportunity to help pave a path to success for others! In school, she loves Latin and, of course, Math! She participates in a few extracurriculars as well, such as JCL/Latin Club, UIL, and Mu Alpha Theta! In her free time, she likes to spend it playing video games, catching up on her favorite TV Shows, and going out with her friends. 
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
                          <img src={GilianeM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Giliane M.</h4>
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
                                            GilianeM is part of the Class of 2023 at Basis San Antonio Shavano. She loves interacting with children. With her passion to teach children, she has been a co-catechist for younger children in her parish church for four years. She loves to draw, video edit, read, and play the violin. She loves volunteering and doing fun charity races. She has also been a member of NJHS for two years and recently joined the NSHSS. She is looking forward to teaching and supports the future generation in learning math. She thinks math is like a puzzle with different levels that test our knowledge. 
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
                          <img src={LauraM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Laura M.</h4>
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
                                            Laura is part of the Class of 2022 at Basis San Antonio Shavano . Her favorite classes are Ap Psychology and AP European History . In her free time she likes reading ,spending time with her nephew and volunteering at the San Antonio food bank and the animal defense league . She understands that math may seem a little complicated at first, but with the right approach it quickly became one of her favorite subjects .Laura joined SaMi so that others can find an easier way to solve math.
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
                          <img src={PieroM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Piero M.</h4>
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
                                            Piero is a part of the class of 2023 at Basis San Antonio Shavano. When he was younger, he used to play soccer all the time with his brother and father. Soccer is one of his passions since he was born because my whole family loved it and he was named after the Italian soccer player Alessandro Del Piero. He went to a private school from kindergarten till fourth grade and then he went to Basis. He has volunteered at food banks, his church, and other volunteer places to help because it makes him happy when he helps someone or when they are happy.
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
                          <img src={SaadM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Saad M.</h4>
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
                                            Saad is part of the class of 2024 at Basis San Antonio Shavano. Some activities that he had in the past are; National Finalist in National Science Bowl, State qualification for UIL, National qualification in JCL, NJHS, scouting, and being an athlete on the BASIS soccer team. Some other things he does are playing video games, volunteering, practicing soccer, after school tutoring, messing around and changing some aspects of his R/C cars.
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
                          <img src={AanikaP} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Aanika P.</h4>
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
                                            Aanika is part of the class of 2023 at Basis San Antonio Shavano. She is a member of various clubs such as UIL Math and Science, Science Bowl, Latin club, and HOSA, and participates in many academic competitions. She enjoys tutoring and believes that as students ourselves, we should teach and inspire young kids, especially girls, to develop a love for math. She aspires to become a doctor or a researcher in the medical field. In her free time, she enjoys reading, watching Netflix, drawing, and listening to music.
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
                          <img src={AdityaP} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Aditya P.</h4>
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
                                            Aditya is part of Class 2024. Aditya enjoys Chess and Soccer. Aditya is a presidential award winner for 2019 for volunteering and enjoys dedicating his time and service to others. Aditya's family consists of his parents, his brother (Nandan) and his pet (Goldendoodle - Cooper). Aditya looks forward learning with you through this process. Let's enjoy the time together. 
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
                          <img src={LillianP} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Lillian P.</h4>
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
                                            Lillian is a part of the Class of 2021 at BASIS Shavano. She is passionate about theatre, music, and reading. She participates in Drama Club, Opt for Action, and plays the piano as well as the violin. Although math hasn’t been a subject she is particularly interested in, preferring English, she loves the concept of SaMi and the idea of impacting the next generation. Lillian has won many awards in UIL Mathematics and is excited to share her knowledge to the grades below hers. She often tutors her younger sister at home and hopes to major in English or Education in college.
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
                                            Andrew is part of the class of 2023 at Basis San Antonio Shavano. He has received the Gold Presidential Volunteer Service Award for community service. He has a strong drive to help others and the community. His favorite classes are math and science. He enjoys playing basketball and watching F.R.I.E.N.D.S. He has been the team captain of the BASIS Certamen team, and is a member of HOSA. He also is a member of NJHS and has been to State competition for JCL. He really enjoys seeing people finally understand a topic and the joy they have when getting the problem right.  
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
                          <img src={EllaR} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ella R.</h4>
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
                                            Ella is part of the class of 2022 at BASIS San Antonio Shavano. Math is one of her favorite subjects in school, only behind biology which she has always loved because she wants to be a doctor one day. She also enjoys volunteering at local hospitals, the Food Bank, and working with kids at Camp CAMP during the summer. Even though she enjoys math, there have been times when she had to turn to her twin brother for help, so she supports SAMi’s goal of helping kids get a better grasp on math because she knows firsthand how hard it can be. Outside of school she likes reading and watching Netflix, but she really loves swimming competitively and for the BASIS swim team! Go Dragons!
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
                          <img src={TylerR} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Tyler R.</h4>
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
                                            Tyler is part of the class of 2022 at Basis San Antonio Shavano. He loves to play soccer both inside and outside of school and enjoys reading, gaming, and outdoor family activities. Math, Chemistry, Engineering, and Physics are his favorite subjects. He wishes to pursue a career that hopefully incorporates these fields. In the past, most math and science concepts have come easy to him, that was until he slack off in calculus. However, with the help of his awesome teacher, he achieved a 5 on the AP Calculus AB exam. With this knowledge, he would like to offer his help to those who might also be struggling because he knows firsthand that seeking help can pay off in the end. 
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
                          <img src={HarineeS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Harinee S.</h4>
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
                                            Harinee is part of the Class of 2023 at Prosper High School. She was part of NJHS during middle school and HOPE squad member during freshman year. She is in advanced math level and has taken AP computer science principles as elective. She is an Indian classical dancer and has been learning for the last nine years.  She enjoys doing activities like playing her piano and dancing. She volunteers at ManeGait Therapeutic Horsemanship as a barn buddy and enjoys spending time with the horses. In her free time, Harinee enjoys playing her ukulele and spending time with her friends and family. She is excited to be part of 'SaMI' working with other students and helping them learn new things!

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
                          <img src={ParthS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Parth S.</h4>
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
                                            Parth is part of the Class of 2022 at Ronald Reagan High School. He enjoys playing video games, coding, playing clarinet and piano, and discovering the latest technologies . His favorite subjects include computer science, math, and science. He chose to join SAMI because of its goal to help the community as well as to help tutor young students who want to learn more about mathematics.
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
                          <img src={PrasadS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Prasad S.</h4>
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
                                            Akshath is part of the Class of 2023 at Brandeis High School. He has been participating in Academic UIL and Science Bowl competitions since 6th grade. Akshath is part of the JV tennis team at Brandeis High School, and has competed in many tournaments throughout his tennis career. He also learns many different foreign languages and is in many different language organizations outside of school.
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
                          <img src={TobyS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Toby S.</h4>
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
                                            Toby is part of the Class 2023 at Health Careers High School. Toby has been at BASIS for four years starting in 5th grade. Toby is a part of NJHS at BASIS. Toby is also a member of the UIL club at BASIS. Toby likes to read books and play video games. Toby has four rabbits two of which are babies. Toby enjoys Biology. Toby has one other brother who is younger. Toby likes working and helping other people. Toby would like to become a doctor when he grows up. Toby’s favorite food is pizza. Toby is very excited to work with you and tutor you. 
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
                          <img src={GaneshT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ganesh T.</h4>
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
                                            Ganesh is a member of the class of 2021 of Health Careers High School in the medical center. He is very involved in HOSA, and is the president of his chapter of HOSA. He is also a key player in the Health Careers tennis team and was the JV captain last year while being on Varsity. Ganesh really enjoys math and claims that math is his very favorite class in school, and excels in all of his math courses.
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
                          <img src={AnonaT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Anona T.</h4>
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
                                            Anona is part of the class of 2024 at Basis San Antonio Shavano. In her free time, she competes in regional and state singing and elocution competitions, often bringing home 1 st place. She is in NJHS, and she has an obsessive habit of being a perfectionist. Anona plays volleyball and is on the school team. Her favorite subject is biology and any related biological sciences, so she aspires to be in the medical field. Since math is closely related to biology, other sciences, and subjects. Anona hopes to help others develop a better understanding of math, while making it fun.
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
                          <img src={LiamT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Liam T.</h4>
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
                                            Liam is a part of the class of 2023 at BASIS San Antonio Shavano. He’s been a member of the NJHS and NLHS for 3 years, and he spends his free time playing video games, dungeons and dragons, or watching anime. He’s been fencing since 6th grade, and he is the 2019 bronze medalist for U17 US Modern Pentathlon. His favorite subjects in school are History and Chemistry, and he enjoys talking to and working with all sorts of people. 
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
                          <img src={WillW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Will W.</h4>
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
                                            Willis part of the Class of 2023 at Boise High School. He has experience with numerous math competitions, and he especially loves Olympiad number theory. Will was also the biology and math specialist of a team that placed 9th at the National Science Bowl in 2019. He has taught classes and written solutions for competition math locally and for other states. He is a huge fan of classical music (especially piano concertos), and he plays the oboe for the Boise Philharmonic Youth Orchestra. During the pandemic, Will enjoys lazing around and kicking a ball. His favorite composers are Schubert and Rachmaninoff.
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
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={ImanZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Iman Z.</h4>
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
                                            Iman is a part of the Class of 2024 at Health Careers High School. Since Iman was three years old she has always aspired to become a pediatrician which has led her to joining Health Careers Highschool. She is extremely active in her school, and a part of three head organizations; NJHS, PALS, and The Presidential voting and sponsorship committee. With her involvement in PALS she was assigned two students (elementary and middle school students) ; these students received one-on-one attention in school work and a big sister that would listen and talk to them about their struggles at home and during the school year. Her favorite subjects are science, reading, and history. In her spare time she loves to play with her dog Izzy, and is a competitive tennis player. Iman is so thrilled to tutor this summer and cannot wait to meet your kiddos! 
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
)(Tutors)