import React, { PureComponent } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import bgImage from "../../static/geo_bg.jpg";

class Home extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Parallax image={bgImage} filter="dark">
                <div className={classes.container}>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <h1 className={classes.title}>Your Story Starts With Us.</h1>
                        <h4>
                          Every landing page needs a small description after the big
                          bold title, that{"'"}s why we added this text here. Add here
                          all the information that can make you or your product create
                          the first impression.
                        </h4>
                        <br />
                        <Button
                          color="danger"
                          size="lg"
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                          target="_blank"
                        >
                          <i className="fas fa-play" />
                          Watch video
                        </Button>
                      </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
        )
    }
}

export default withStyles(landingPageStyle)(Home)
