import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import Footer from "components/Footer/Footer.jsx";

import { IconSpan, FooterWrapper } from '../style';

class MKFooter extends PureComponent {
    render() {
        const { classes } = this.props;
        // console.log(classes)
        return (
            <FooterWrapper>
                <Footer
                  content={
                  <div className={classes.center}>
                    Copyright &copy; {1900 + new Date().getYear()} {" "}
                    <IconSpan>&#xe61f;</IconSpan> {" "}
                    <Link to='\' className="link">
                      San Antonio Math Include
                    </Link>
                  </div>
                  }
                />
            </FooterWrapper>
        );
    }
}

export default withStyles(landingPageStyle)(MKFooter)