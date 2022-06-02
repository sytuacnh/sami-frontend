import React, { PureComponent, Fragment } from 'react';
// nodejs library to set properties for components
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import celebrate_pi_day from "../../../../../static/events/pi_day_celebration/celebrate_pi_day.jpg";
import trinity from "../../../../../static/events/pi_day_celebration/trinity.jpg";


class PiDayCelebrationCards extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <Card
                      raised
                      background
                      style={{ backgroundImage: "url(" + celebrate_pi_day + ")" }}
                    >
                      <CardBody background>
                        <h6 className={classes.category}>Pi Day Celebration 2021</h6>
                        <h3 className={classes.cardTitle}>
                          Program Poster
                        </h3>
                        <p className={classes.textCenter}>
                          Click button below to view our poster
                        </p>
                        <a className="link" href="https://drive.google.com/file/d/1RKcFOkIKZNK5JizMHDw9ZPyeiRRbATH1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Button round color="rose">
                                <FormatAlignLeft className={classes.icons} />View Poster
                            </Button>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <Card
                      raised
                      background
                      style={{ backgroundImage: "url(" + trinity + ")" }}
                    >
                      <CardBody background>
                        <h6 className={classes.category}>Pi Day Celebration 2021</h6>
                        <h3 className={classes.cardTitle}>
                          Map
                        </h3>
                        <p className={classes.category}>
                          We are online this year
                        </p>
                        <a className="link" href="https://drive.google.com/file/d/14cPe3u2f0b4JTAQ2HH8Ck1jRxdNUKXDX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Button round color="rose">
                                <FormatAlignLeft className={classes.icons} />View Map
                            </Button>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
            </Fragment>
        );
    }
}



export default withStyles(featuresStyle)(PiDayCelebrationCards);

// export default compose(
//     withStyles(style),
//     withStyles(contactUsStyle),
// )(ContactSection)