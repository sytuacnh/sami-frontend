import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
// import { actionCreators } from './store';
import withStyles from "@material-ui/core/styles/withStyles";
import MKHeader from "components/Header/Header.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import HeaderLinks from "./components/HeaderLinks.jsx";
import { 
  HeaderWrapper,
 } from "./style";

class Header extends PureComponent {

    render() {
        const { classes, ...rest } = this.props;
        // console.log(classes)
        return (
            <HeaderWrapper>
                <MKHeader
                    color="transparent"
                    brand="San Antonio Math Include"
                    links={<HeaderLinks dropdownHoverColor="info" />}
                    fixed
                    changeColorOnScroll={{
                        height: 100,
                        color: "white"
                    }}
                    {...rest}
                />
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose(
    withStyles(landingPageStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(Header)