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
import AnshumanC from "../../../static/about/tutors/AnshumanC.jpg";
import AryamanC from "../../../static/about/tutors/AryamanC.png";
import ShiwinF from "../../../static/about/tutors/ShiwinF.jpg";
import LouisG from "../../../static/about/tutors/LouisG.jpg";
import AyushK from "../../../static/about/tutors/AyushK.jpg";
import AndrewR from "../../../static/about/tutors/AndrewR.jpg";
import TanyaL from "../../../static/about/tutors/TanyaL.jpg";
import AllenL from "../../../static/about/tutors/AllenL.jpg";
import EvaL from "../../../static/about/tutors/EvaL.jpg";
import MaggieJ from "../../../static/about/tutors/MaggieJ.jpg";
import JenL from "../../../static/about/tutors/JenL.jpg";
import JoshW from "../../../static/about/tutors/JoshW.jpg";
import JoyceL from "../../../static/about/tutors/JoyceL.jpg";
import PrateekM from "../../../static/about/tutors/PrateekM.jpg";
import FabrizioM from "../../../static/about/tutors/FabrizioM.jpg";
import SunnyV from "../../../static/about/tutors/SunnyV.jpg";
import SuranS from "../../../static/about/tutors/SuranS.jpg";
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
import MoeezA from "../../../static/about/tutors/MoeezA.jpg";
import ParthS from "../../../static/about/tutors/ParthS.jpg";
import PieroM from "../../../static/about/tutors/PieroM.jpg";
import PrasadS from "../../../static/about/tutors/PrasadS.jpg";
import SaadM from "../../../static/about/tutors/SaadM.jpg";
import SahanaB from "../../../static/about/tutors/SahanaB.jpg";
import SaiB from "../../../static/about/tutors/SaiB.jpg";
import TobyS from "../../../static/about/tutors/TobyS.jpg";
import TylerR from "../../../static/about/tutors/TylerR.jpg";
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
import AngieC from "../../../static/about/tutors/AngieC.jpeg";  
import AvaL from "../../../static/about/tutors/AvaL.jpg";  
import VictoriaK from "../../../static/about/tutors/VictoriaK.jpg";  
import AlyonaN from "../../../static/about/tutors/AlyonaN.png";   
import BradA from "../../../static/about/tutors/BradA.jpg";   
import BrettF from "../../../static/about/tutors/BrettF.png";   
import DanielC from "../../../static/about/tutors/DanielC.jpg";   
import DhamikK from "../../../static/about/tutors/DhamikK.jpg";   
import EvelynL from "../../../static/about/tutors/EvelynL.jpg";   
import JamesL from "../../../static/about/tutors/JamesL.JPG";   
import LasyaB from "../../../static/about/tutors/LasyaB.png";   
import NamrathaC from "../../../static/about/tutors/NamrathaC.jpg";   
import NeerajaS from "../../../static/about/tutors/NeerajaS.jpg";   
import PrestonB from "../../../static/about/tutors/PrestonB.jpeg";   
import VicC from "../../../static/about/tutors/VicC.jpg";   
import ZulfiyyaK from "../../../static/about/tutors/ZulfiyyaK.jpg";   

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
                          <img src={BradA} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Brad A.</h4>
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
                          <img src={EdwardB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Edward B.</h4>
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
                                            Edward is part of the Class of 2025 at Basis San Antonio Shavano. He enjoys the curriculum in Basis since he learned a lot from the rich resources. He is especially interested in math and science and begins to join some competitions. His team got the regional champaign in Science Bowl competition in 2020 and 2021. and he is currently preparing National Science Bowl competition. He plans to  gain competencies in a range of science disciplines in the future years. As a chess player, he used to serve as an assistant in regional chess competition events.  He enjoys teaching and wishes to help others to excel in math and science.
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
                          <img src={LasyaB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Lasya B.</h4>
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
                                            Lasya is part of the Class of 2025 at  Health Careers High School. She has been a member of NJHS and the student council since the beginning of middle school. Her favorite subjects are math and science. She loves to play the violin, paint, and read books. She has always loved math and wanted to help others have fun while learning new skills. She is very excited to help kids learn and appreciate math.
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
                  </GridItem>                  <GridItem xs={12} sm={3} md={3}>
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
                          <img src={SiriB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Siri B.</h4>
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
                                            Siri is part of the Class of 2026 at BASIS Shavano. Her favorite subjects are History, Math, and Chemistry. She has always loved math and is excited to start tutoring with SaMi. Siri is a quick learner and loves to learn new things. She is a member of NJHS, JCL (junior classical league), YLP (youth leadership program), rotary club, and orchestra at BASIS and tutors a 6th grade student every Thursday. Some of her favorite activities are teaching young kids and participating in community service events. In her free time, she likes to read and spend time with her friends. 
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
                          <img src={AngieC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Angie C.</h4>
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
                          <img src={DanielC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Daniel C.</h4>
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
                                            Daniel is part of the Class of 2022 at Basis San Antonio Shavano. His favorite subjects are Biology and Chemistry. Math has always been one of his favorite subjects, leading to his interest in calculus-based sciences. He has spent 6 years volunteering at Meals on Wheels and the San Antonio Food Bank. In his free time, he likes to play frisbee and engage in political discussions. He also enjoys trivia, specifically football, basketball, and baseball.
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
                          <img src={ErinC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Erin C.</h4>
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
                          <img src={NamrathaC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Namratha C.</h4>
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
                          <img src={SanjanaC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Sanjana C.</h4>
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
                                            Sanjana Chillara is part of the Class of 2025 at Ronald Reagan High School. She has participated in NJHS for two years. She played Softball in her first two years of middle school at Basis Shavano. She was born in New Orleans, Louisiana and absolutely loves the New Orleans Saints. Being the oldest of two brothers, she has good leadership skills. She likes to work with groups, rather than by herself. To pass time, she loves to listen to music and watch shows that are older than herself. She finds passion in sciences and arts, specifically Physics, Biology, Theatre, and Choir. Although, math was never caught her interest, she believes that it is quite fundamental.
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
                          <img src={VicC} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Vic C.</h4>
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
                  </GridItem>                   <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={EthanD} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ethan D.</h4>
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
                          <img src={BrettF} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Brett F.</h4>
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
                                            Brett is part of the Class of 2023 at Basis San Antonio Shavano. His favorite hobbies are producing music, drawing, and playing video games with his friends online. He has always loved doing math, and helping others learn it. Currently, He is in AP Calculus BC - he took AB last year, and got a 5 on the AP exam. BASIS taught him that some people learn best on a different pace, and that anyone can learn any subject if they have the right teacher. Sometimes they need to look at problems differently from the way they’re taught in school. He hopes to give students a different, more personalized outlook on their problems so that they may work more efficiently.
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
                          <img src={ChristinaF} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Christina F.</h4>
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
                                            Christina is part of the Class of 2023 at Basis San Antonio Shavano. She was a member of NJHS for three years and has joined NHS this year. In her free time, she enjoys playing guitar, listening to music, playing chess online, and reading. Her favorite subjects are math and biology. She joined SAMI because of its goal of providing free accessible tutoring for students, and she is looking forward to tutoring.
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
                        <h4 className={classes.cardTitle}>Alessandra F.</h4>
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
                        <h4 className={classes.cardTitle}>Francesca F.</h4>
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
                          <img src={AshleyH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ashley H.</h4>
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
                          <img src={OrryH} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Orry H.</h4>
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
                                            Orry is part of the Class of 2024 at Brandeis High School. His favorite subject in school is math. He participates in UIL Math as well as Science Bowl for Brandeis. He was in NJHS for two years in middle school, and he also plays the piano and the clarinet. In his free time, he enjoys sports, as well as talking to his friends.
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
                          <img src={AnshJ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ansh J.</h4>
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
                                            Ansh is part of the Class of 2022 at Basis San Antonio Shavano. He is an avid math and science enthusiast, who enjoys all aspects of STEM. At school, his favorite courses include World History, Calculus, and Physics. He is involved in many clubs like Speech and Debate, JSA, HOSA, as well as numerous stem based clubs prior. Out of school, he loves to engage in political discussions, play basketball with his friends, and watch shows on Disney+. Ansh is super excited to work with the amazing SAMI staff and bright students this upcoming summer! 
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
                          <img src={AnviK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Anvi K.</h4>
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
                                            Anvi is part of the class of 2025 at Basis Shavano San Antonio. Math has always been her best subject. She has been in NJHS for the past 2 years. In her free time, she enjoys painting and dancing. Anvi loves to help whenever she can. Previously, she had joined San Antonio Math Include (SaMi) as a learner and now, given the opportunity, she is excited to join SaMi as a tutor.
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
                          <img src={DhamikK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Dhamik K.</h4>
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
                                            Dharmik is part of the Class of 2024 at Basis San Antonio Shavano. He has been at Basis for all of middle school and now he is a sophomore. He really enjoys teaching and is great at breaking down topics when explaining. He has also participated in SaMi for the past three years and has a lot of experience in tutoring and understands the SaMi program. Dharmik can tutor in math, as this is the area he mainly excels in. Finally, Dharmik is very excited to tutor this year and is eager to help students who want to learn.
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
                          <img src={GiannaK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Gianna K.</h4>
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
                                            Gianna is part of the Class of 2024 at Mission San Jose High School. Her favorite subjects are English, History, and Math. After school, you could usually find her reading, writing, doing homework, jogging, or just working on some sort of project. She is passionate about learning new things and enjoys helping other people. Although she had made peace with the subject (and even came to enjoy it), she has a history of struggling with math when she was younger, which is why she decided to participate in this program and help others become better at it.
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
                          <img src={NayeonK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Nayeon K.</h4>
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
                                            Nayeon is part of the Class of 2022 at Winston Churchill High School. She plays the violin in the Churchill varsity orchestra and is part of her school’s academic UIL team. She is also a member of the Board of Directors of the Churchill NHS. Nayeon has a passion for STEM and is excited to be part of SaMi! 
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
                          <img src={SamikaK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Samika K.</h4>
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
                                            Samika is part of the 2025 Class of BASIS Shavano San Antonio. Her favorite subjects are math and biology. Her hobbies include swimming and cooking. She has won an award for a space-biology competition and a couple spelling and math awards. She is part of NJHS and NLHS. She hopes to be able to teach and help kids learn new concepts this summer. She is excited and cannot wait to work and meet new people.
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
                          <img src={VictoriaK} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Victoria K.</h4>
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
                                            Victoria is a part of the Class of 2022 at Rumsey Hall School in Washington, CT, a junior boarding school from 5-9 grade. Her home is San Antonio, TX, however since 7th grade, she has been living in the dorms during the school year. Her favorite subjects are Math and History. While she has not been able to participate in many math competitions on two of her math finals her score was 99. While at St. Mary’s Hall, she received both an award for Excellence in Math and a Science Achievement Award. In her free time, she enjoys drawing and watching Netflix. She hopes to be helpful to others with math and is also looking forward to working with kids.
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
                          <img src={EvelynL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Evelyn L.</h4>
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
                                            Evelyn is part of the Class of 2024 at Choate Rosemary Hall. Few of her favorite academic and extracurricular activities include math, writing, community service, and acting. In her free time, she likes to read and listen to music. She looks forward to becoming a member of the SaMi and sharing her love for mathematics with other students. 
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
                                            James is part of the Class of 2025 at Basis San Antonio Shavano. His favorite classes in school are AP Physics 1 and Pre-Calculus AB. In his free time he likes playing tennis, practicing karate, and participating in the TechnoWizards FTC robotics team. He also plays piano, loves learning computer science, and enjoys flying drones and building robots. He has always loved understanding the concepts and the reasoning as to why there is each step in math. He believes that SaMi is a great organization to spread STEM and is excited to contribute to this growing community.
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
                          <img src={EmilyM} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Emily M.</h4>
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
                                            Emily is part of the Class of 2024 at Marc Garneau Collegiate Institute. Her favourite subjects in school are math, science and music. She has been very passionate about math from a young age and is really excited to help tutor and to share her knowledge with others. Emily enjoys problem solving, and has participated in many math contests before. She likes to read books, hang out with friends, and cube. 
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
                          <img src={AlyonaN} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Alyona N.</h4>
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
                          <img src={DevahutiN} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Devahuti N.</h4>
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
                                            Devahuti is a part of the Class of 2023 at Health Careers High School. She loves engaging with people and loves learning with them along the way. She loves learning Math and being able to help others navigate through the interesting subject. At school, she is actively involved in clubs such as HOSA, JCL/ Latin Club, Student Council, in addition to being her class' historian. In her free time, Devahuti likes to dance, sing, play her guitar, and read.
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
                          <img src={EvanN} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Evan N.</h4>
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
                                            Evan is part of the Class of 2024 at Basis Shavano in San Antonio, Texas. He has been a member of the NJHS since middle school. His favorite classes are physics, biology, and math. Outside of school, he plays piano, cares for neighborhood animals and builds mechanical projects with his father. He is happy to work with other students to learn in an understandable way.
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
                          <img src={KarissaP} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Karissa P.</h4>
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
                                            Karissa is part of the class of 2022 at Ronald Reagan High school. Her favorite classes currently are AP Calculus AB and AP Psychology. In her free time she enjoys reading, spending time with her family and exercising outdoors. She hopes that by joining SaMi she is able to help educate young minds.
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
                  </GridItem>                   <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={ArielleR} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Arielle R.</h4>
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
                                            Arielle is a part of the class of 2022 at Basis Shavano. Despite not being a fan of math, she knows the importance of STEM education and is excited to help kids through classes she once struggled through. Aside from school she is a part of HOSA, theatre and activism clubs. In her free time, she enjoys playing guitar, overanalyzing movies, and obsessing over Paramore.
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
                          <img src={NeerajaS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Neeraja S.</h4>
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
                          <img src={RahulS} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Rahul S.</h4>
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
                                            Rahul is part of the Class of 2024 at Basis San Antonio Shavano. He is in NJHS and enjoys helping people in need. His favorite subjects are Math, Chemistry, Biology, and Computer Science. In his free time, he enjoys spending time with friends and family. Rahul aspires to be in the medical field helping others or in software engineering developing programs. He enjoys watching the NBA. His favorite players are Giannis Antetokounmpo, Kyrie Irving, and Anthony Davis, and his favorite team is the Los Angles Lakers. He enjoys playing basketball, listening to music, and binge-watching Netflix in his free time.
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
                          <img src={ChristineT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Christine T.</h4>
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
                                            Christine is part of the class of 2024 at South Texas ISD Health Professions high school. She has been a member of the National Junior Honor's Society (NJHS) for two years and has been in other clubs including TSA, HOSA, and UIL. Her hobbies include singing and playing the piano. She loves to help children become the best they can be and is looking forward to tutoring many kids.
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
                          <img src={LindaT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Linda T.</h4>
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
                          <img src={DanielW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Daniel W.</h4>
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
                                            Daniel is part of the Class of 2022 at Health Career High School, where his favorite subjects are the courses in the new Biomedical Engineering strand. In middle school, he was a member on MathCounts and First Lego League Robotics teams which in 2018 competed at the Chapter Invitational and International levels, respectively. As a proud Health Careers Phoenix, he runs the 400 meter individual and relay events in Track, plays the cello in Orchestra, and participates in Mu Alpha Theta, HOSA, and UIL Science and Solo and Ensemble. He looks forward to working with other students at SaMi as they learn about math and science together!
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
                          <img src={HannahW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Hannah W.</h4>
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
                          <img src={MirandaW} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Miranda W.</h4>
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
                          <img src={NathanX} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Nathan X.</h4>
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
                          <img src={RachelY} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Rachel Y.</h4>
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
                          <img src={AlenaZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Alena Z.</h4>
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
                                            Alena is part of the Class of 2023 at Jasper High School. She has been practicing math and piano for 11 years and has participated in competitive math for 8 years. She is an officer at her local math club. Her favorite subject is biology, and she enjoys reading, cooking, and sketching in her free time. When volunteering for a Girls in STEM mentorship program, she explained graphs to another student and discovered that teaching someone else is very rewarding. She hopes that by joining SaMi, she can help other kids discover the fun of math. 
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
                          <img src={AndyZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Andy Z.</h4>
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
                                            Andy is part of the 2024 class for Clements High School. He has participated in math competitions since a very young age. He has placed 6th place in national mathleague in 5th grade and DHR in AMC 8 every year since 6th grade and has participated in several competitions like AIME and State Mathcounts and was very close to achieving DHR on AMC 10. He additionally loves to help tutor people for math as he helped tutor an AMC 10 class for several months. Additionally, he likes to play the violin and go for runs in his spare time.
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
                          <img src={CalvinZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Calvin Z.</h4>
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
                                            Calvin is part of the Class of 2024 at Stuyvesant High School. He is interested in computer science and mathematics. Calvin has received several notable awards in mathematics competitions. He was also awarded Overall Academic Achievement when he graduated from his middle school, NEST+M. Calvin actively attends several extracurricular activities of computer science and mathematics. He is on the math team and is the IT Director of the freshman caucus at Stuyvesant High School.
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
                          <img src={CodyZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Cody Z.</h4>
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
                                            Cody is in the class of 2026 in Clements High School. He has always loved mathematics from a young age. He has attended lots of competitions and has achieved high scores on them such as getting 6th place in National Mathleague in 4th grade, getting a perfect score on AMC8 in 6th grade and qualifying for State Mathcounts and AIME in 7th grade, as well as achieving the Honor Roll in AMC10. He has also helped tutor for other AMC10 classes, and he likes to read and play violin. He is excited to learn from this camp and have fun teaching other students that have interest in math.
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
                          <img src={KaiwenZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Kaiwen Z.</h4>
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
                          <img src={RayZ} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ray Z.</h4>
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