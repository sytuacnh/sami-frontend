import React, { PureComponent, Fragment } from 'react';
// for material-kit
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

class MKHeader extends PureComponent {

    render() {
        const { classes, ...rest } = this.props;
        // console.log(classes)
        return (
            <Header
                color="transparent"
                brand="San Antonio Math Include"
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                changeColorOnScroll={{
                    height: 50,
                    color: "primary"
                }}
                {...rest}
            />
        );
    }
}

export default withStyles(landingPageStyle)(MKHeader)