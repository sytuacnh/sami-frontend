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
import HannahGuan from "../../../static/about/officers/HannahGuan.jpg";
import PrateekMishra from "../../../static/about/officers/PrateekMishra.jpg";
import ColinPerera from "../../../static/about/officers/ColinPerera.jpg";
import LouisGeer from "../../../static/about/officers/LouisGeer.jpg";
import EricZou from "../../../static/about/officers/EricZou.jpg";
import AllenLiang from "../../../static/about/officers/AllenLiang.jpg";
import ElijahWhang from "../../../static/about/officers/ElijahWhang.jpg";

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
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={HannahGuan} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Hannah Guan</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Founding President</h6>
                        </Muted>
                        <p className={classes.description}>
                            CEO of SaMi
                        </p>
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
                        <Muted>
                          <h6 className={classes.cardCategory}>Vice President</h6>
                        </Muted>
                        <p className={classes.description}>
                           works closely with the president to define the mission of the organization
                        </p>
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
                        <Muted>
                          <h6 className={classes.cardCategory}>Vice President</h6>
                        </Muted>
                        <p className={classes.description}>
                           works closely with the president to define the mission of the organization
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={LouisGeer} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Louis Geer</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Secretary</h6>
                        </Muted>
                        <p className={classes.description}>
                            keep all meeting minutes and documents
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={EricZou} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Eric Zou</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Development Director</h6>
                        </Muted>
                        <p className={classes.description}>
                            plan and coordinate activities
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={AllenLiang} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Allen Liang</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Community Relationships Manager</h6>
                        </Muted>
                        <p className={classes.description}>
                            develop programs to represent SaMi favorably and make positive
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={ElijahWhang} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Elijah Whang</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Sponsorship Coordinator</h6>
                        </Muted>
                        <p className={classes.description}>
                            solicit business to collect funds
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
