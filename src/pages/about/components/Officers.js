import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";



import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import HannahGuan from "../../../static/about/officers/HannahG.jpg";
import CoinP from "../../../static/about/officers/CoinP.jpg";
import JoshW from "../../../static/about/officers/JoshW.jpg";
import SamanthaF from "../../../static/about/officers/SamanthaF.jpg";
import EricZ from "../../../static/about/officers/EricZ.jpg";
import AnnastinaT from "../../../static/about/officers/AnnastinaT.jpg";
import TanyaL from "../../../static/about/officers/TanyaL.jpg";
import AndrewR from "../../../static/about/officers/AndrewR.jpg";
import EmilyC from "../../../static/about/officers/EmilyC.jpg";

class Officers extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div id="officers" className={classes.team}>
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
                    <h2 className={classes.title}>SaMi Officers</h2>
                    <h5 className={classes.description}>
                        Our officers have a track record of success and leadership skills. They oversee and direct the major aspects of SaMi's operations.
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
                        <h4 className={classes.cardTitle}>Hannah G.</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Founding President</h6>
                        </Muted>
                        <p className={classes.description}>
                            CEO of SaMi.
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={CoinP} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Coin P.</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Vice President</h6>
                        </Muted>
                        <p className={classes.description}>
                           Assists the President. 
                        </p>
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
                        <Muted>
                          <h6 className={classes.cardCategory}>Header Curriculum Developert</h6>
                        </Muted>
                        <p className={classes.description}>
                          Develops the curriculum. 
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={JoshW} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Josh W.</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Head Recruitment Officer</h6>
                        </Muted>
                        <p className={classes.description}>
                            Reaches out to all schools. 
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={SamanthaF} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Samantha F.</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Head Sponsorship Officer</h6>
                        </Muted>
                        <p className={classes.description}>
                            Oversees the sponsorship program.
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={AnnastinaT} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Annastina T.</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Sponsorship Coordinator</h6>
                        </Muted>
                        <p className={classes.description}>
                            Reaches out to businesses to collect sponsorship funds. 
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={TanyaL} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Tanya L.</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Fundraising Coordinator</h6>
                        </Muted>
                        <p className={classes.description}>
                            Organizes fundraising activities to collect grassroots donations. 
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={AndrewR} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Andrew R.</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Secretary</h6>
                        </Muted>
                        <p className={classes.description}>
                            Records meetings. 
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={EmilyC} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Emily C.</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Community Relations Manager</h6>
                        </Muted>
                        <p className={classes.description}>
                            Works with parents to achieve the best learning environment for the students. 
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        );
    }

}

export default withStyles(teamsStyle)(Officers)
