import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import Footer from "components/Footer/Footer.jsx";

import { IconSpan } from '../style';

class MKFooter extends PureComponent {
    render() {
        const { classes } = this.props;
        // console.log(classes)
        return (
            <Footer
              content={
              <div className={classes.center}>
                Copyright &copy; {1900 + new Date().getYear()} {" "}
                <IconSpan>&#xe9ee;</IconSpan> {" "}
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