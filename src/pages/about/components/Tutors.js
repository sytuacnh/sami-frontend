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
import jiang from "../../../static/about/advisors/AlbertJiang.jpg";
import ErikaHsie from "../../../static/about/advisors/ErikaHsie.jpg";
import QilongLu from "../../../static/about/advisors/QilongLu.jpg";
import HoaNguyen from "../../../static/about/advisors/HoaNguyen.jpg";

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
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={jiang} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Dr. Albert Jiang</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Advisory Board</h6>
                        </Muted>
                        <p className={classes.description}>
                          Assistant Professor, <br /> Department of Computer Science, <br /> Trinity University
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={ErikaHsie} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Dr. Erika Hsie</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Advisory Board</h6>
                        </Muted>
                        <p className={classes.description}>
                            Director, <br /> 
                            Modeling Analytics,<br />  
                            USAA 
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={QilongLu} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Dr. Qilong Lu</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Advisory Board</h6>
                        </Muted>
                        <p className={classes.description}>
                          Program Manager, <br />
                          Powertrain Engineering Division, <br />
                          Southwest Research Institute
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={HoaNguyen} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Dr. Hoa Nguyen</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Advisory Board</h6>
SaMi Advisors</Muted>
                        <p className={classes.description}>
                          Associate Professor, <br />
                          Department of Mathematics, <br />
                          Trinity University
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

export default withStyles(teamsStyle)(Tutors)
