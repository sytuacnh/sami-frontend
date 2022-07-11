import React, { PureComponent } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted.jsx";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import tan from "../../../static/about/advisors/ShengTan.jpg";
import TeacherMissing from "../../../static/about/advisors/Teacher_missing.png";
import ErikaHsie from "../../../static/about/advisors/ErikaHsie.jpg";
import QilongLu from "../../../static/about/advisors/QilongLu.jpg";
import HoaNguyen from "../../../static/about/advisors/HoaNguyen.jpg";

class Advisors extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div id="advisors" className={classes.team}>
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
                    <h2 className={classes.title}>SaMi Advisors</h2>
                    <h5 className={classes.description}>
                        Our advisory board is composed of accomplished experts in academia and industry. They offer innovative advice and a dynamic perspective to SaMi.
                    </h5>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={TeacherMissing} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ms. Vidya Mannem</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Faculty Advisor</h6>
                        </Muted>
                        <p className={classes.description}>
                          AP Calculus AB Teacher, <br />
                          Mathcounts Coach, <br />
                          Basis San Antonio Shavano.
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={tan} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Dr. Sheng Tan</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Chair, Advisory Board</h6>
                        </Muted>
                        <p className={classes.description}>
                          Assistant Professor, <br /> Department of Computer Science, <br /> Trinity University
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
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
                  <GridItem xs={12} sm={4} md={4}>
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
                  <GridItem xs={12} sm={4} md={4}>
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
                        </Muted>
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

export default withStyles(teamsStyle)(Advisors)
