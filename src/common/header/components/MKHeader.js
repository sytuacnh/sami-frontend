import React, { PureComponent } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import HeaderLinks from "./HeaderLinks.jsx";

class MKHeader extends PureComponent {

    render() {
        const { classes, ...rest } = this.props;
        // console.log(classes)
        return (
            <Header
                color="transparent"
                brand="SaMi"
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                changeColorOnScroll={{
                    height: 100,
                    color: "primary"
                }}
                {...rest}
            />
        );
    }
}

export default withStyles(landingPageStyle)(MKHeader)