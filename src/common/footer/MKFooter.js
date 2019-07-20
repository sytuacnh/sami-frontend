import React, { PureComponent, Fragment } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import Footer from "components/Footer/Footer.jsx";
import Favorite from "@material-ui/icons/Favorite";
import { Link } from 'react-router-dom';

class MKFooter extends PureComponent {
    render() {
        const { classes } = this.props;
        // console.log(classes)
        return (
            <Footer
              content={
              <div className={classes.center}>
                Copyright &copy; {1900 + new Date().getYear()} {" "}
                <Favorite className={classes.icon} /> {" "}
                <Link to='\'>
                  San Antonio Math Include
                </Link>
              </div>
              }
            />
        );
    }
}

export default withStyles(landingPageStyle)(MKFooter)