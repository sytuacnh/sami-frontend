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
import KassieL from "../../../static/about/chapters/KassieL.jpg";
import LauraE from "../../../static/about/chapters/LauraE.jpg";

class Chapters extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div id="chapters" className={classes.team}>
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
                    <h2 className={classes.title}>SaMi Chapters</h2>
                    <h5 className={classes.description}>
                        SaMi Chapters are directed by high school students across the nation. 
                    </h5>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={KassieL} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Kassie L.</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Director of North California Chapter</h6>
                        </Muted>
                        <p className={classes.description}>
                          9th grade<br />
                          XXX High School
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={LauraE} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Laura E. </h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Director of New York Chapter</h6>
                        </Muted>
                        <p className={classes.description}>
                          9th Graade <br /> 
                          XXX High School 
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

export default withStyles(teamsStyle)(Chapters)

