import React,  { useEffect } from 'react';
// import React, { PureComponent } from 'react';
import { useMediaQuery } from 'react-responsive'
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import {
    HomeWrapper
} from "./style";
import HomeSection from "./components/HomeSection";
import CustomParallax from "./components/CustomParallax"


const Home = props => {
    const { classes } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const bgImageName = "dice";
    const bgImageNameSM = "dice_sm";

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    
    return (
        <HomeWrapper>
            {isDesktopOrLaptop 
                && 
                (<CustomParallax bgImageName={bgImageName} />)
            }
            {isTabletOrMobile 
                && 
                (<CustomParallax bgImageName={bgImageNameSM} />)
            }
            <div className={classNames(classes.main, classes.mainRaised)}>
                <HomeSection />
            </div>
        </HomeWrapper>
    );
}

Home.propTypes = {
    classes: PropTypes.object
};

export default withStyles(landingPageStyle)(Home)