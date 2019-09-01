/*!

=========================================================
* Material Kit PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/* eslint-disable */
// useEffect is a hook which can replace both componentDidMount and componentDidUpdate
import React, { Fragment, useEffect } from "react";
import { connect } from 'react-redux';
import compose from 'recompose/compose'
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Search from "@material-ui/icons/Search";
import CustomInput from "components/CustomInput/CustomInput.jsx";

// @material-ui/icons
import Event from "@material-ui/icons/Event";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";
import { 
  IconSpan,
  SearchWrapper
 } from "../style";
import { actionCreators } from "../store";

const HeaderLinks = ({ ...props }) => {

  useEffect(() => {
    // console.log('did mount!!!!')
    // const api_url = process.env.REACT_APP_API_URL+'programs/1';
    // console.log("API_URL: " + api_url);
    props.changeCurrentProgramData();
  });

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { classes, dropdownHoverColor, currentNav, handleChangeCurrentNav, handleChangeCurrentNavDropDown } = props;

  // const TutoringLogo = <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe9ee;</IconSpan>

  return (
    <Fragment>
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          component={ Link }
          to="/"
          id="homeNav"
          className={ currentNav==="homeNav" ? classes.navLink + " " + classes.navLinkActive : classes.navLink} 
          color="transparent"
          onClick={handleChangeCurrentNav}
        >
          <IconSpan>&#xe64b;</IconSpan>
          HOME
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            component={ Link }
            to="/tutoring"
            id="tutoringNav"
            className={ currentNav==="tutoringNav" ? classes.navLink + " " + classes.navLinkActive : classes.navLink} 
            onClick={handleChangeCurrentNav}
            color="transparent"
          >
            <IconSpan>&#xe660;</IconSpan>
            TUTORING
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="EVENTS"
          buttonProps={{
            id: "eventsNav",
            className: currentNav==="casting-your-future-scholarship" || currentNav==="free-tutoring-2019-2020" || currentNav==="free-tutoring-2018-2019" || currentNav==="summer-at-sami-2019" || currentNav==="pi-day-celebration-2019" ? classes.navLink + " " + classes.navLinkActive : classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <CustomDropdown
              data-ref="multi"
              innerDropDown
              noLiPadding
              hoverColor={dropdownHoverColor}
              buttonText="Free Tutoring"
              buttonProps={{
                simple: true,
                block: true,
              }}
              dropPlacement="right-start"
              dropdownList={[
                  <Link
                    id="free-tutoring-2019-2020"
                    to="/free-tutoring-2019-2020" 
                    onClick={handleChangeCurrentNav}
                    className={classes.dropdownLink}
                  >
                    <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe660;</IconSpan>
                    Free Tutoring 2019-2020 
                  </Link>,
                  <Link 
                    id="free-tutoring-2018-2019"
                    to="/free-tutoring-2018-2019" 
                    onClick={handleChangeCurrentNav}
                    className={classes.dropdownLink}
                  >
                    <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe61a;</IconSpan>
                    Free Tutoring 2018-2019
                  </Link>
              ]}
            />
            ,
            { divider: true },
            <CustomDropdown
              data-ref="multi"
              innerDropDown
              noLiPadding
              hoverColor={dropdownHoverColor}
              buttonText="Summer@Sami"
              buttonProps={{
                simple: true,
                block: true,
              }}
              dropPlacement="right-start"
              dropdownList={[
                  <Link 
                    id="summer-at-sami-2019"
                    onClick={handleChangeCurrentNav}
                    to="/summer-at-sami-2019" 
                    className={classes.dropdownLink}
                  >
                    <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe74a;</IconSpan> Summer@Sami 2019
                  </Link>
              ]}
            />
            ,
            { divider: true },
            <CustomDropdown
              data-ref="multi"
              innerDropDown
              noLiPadding
              hoverColor={dropdownHoverColor}
              buttonText="Pi Day Celebration"
              buttonProps={{
                simple: true,
                block: true,
              }}
              dropPlacement="right-start"
              dropdownList={[
                  <Link 
                    id="pi-day-celebration-2019"
                    to="/pi-day-celebration-2019" 
                    onClick={handleChangeCurrentNav}
                    className={classes.dropdownLink}
                  >
                    <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe9ee;</IconSpan> Pi Day Celebration 2019
                  </Link> 
              ]}
            />
            ,
            { divider: true },
            <CustomDropdown
              data-ref="multi"
              innerDropDown
              noLiPadding
              hoverColor={dropdownHoverColor}
              buttonText="Scholarship"
              buttonProps={{
                simple: true,
                block: true,
              }}
              dropPlacement="right-start"
              dropdownList={[
                  <Link 
                    id="casting-your-future-scholarship"
                    to="/casting-your-future-scholarship" 
                    onClick={handleChangeCurrentNav}
                    className={classes.dropdownLink}
                  >
                    <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe612;</IconSpan> Casting Your Future Scholarship
                  </Link> 
              ]}
            />
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            href="https://www.youtube.com/channel/UCuXmN7-h56VP_-216V-1dZg"
            target="_blank"
            id="youtubeChannel"
            className={ classes.navLink } 
            onClick={handleChangeCurrentNav}
            color="transparent"
          >
            <IconSpan>&#xe880;</IconSpan>
            Youtube
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
          component={ Link }
            to="/gallery"
            id="galleryNav"
            className={ currentNav==="galleryNav" ? classes.navLink + " " + classes.navLinkActive : classes.navLink} 
            onClick={handleChangeCurrentNav}
            color="transparent"
          >
            <IconSpan>&#xe70d;</IconSpan>
            GALLERY
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="ABOUT"
          buttonProps={{
            className: currentNav==="aboutNav#tutors" || currentNav==="aboutNav#officers" || currentNav==="aboutNav#advisors" ? classes.navLink + " " + classes.navLinkActive : classes.navLink,
            color: "transparent"
          }}
          buttonIcon={SupervisedUserCircle}
          dropdownList={[
            <Link
              id="aboutNav#advisors"
              onClick={handleChangeCurrentNav}
              to="/about#advisors"
              className={classes.dropdownLink}
            >
              <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe608;</IconSpan> ADVISORS
            </Link>,
            <Link
              id="aboutNav#officers"
              onClick={handleChangeCurrentNav}
              to="/about#officers"
              className={classes.dropdownLink}
            >
              <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe722;</IconSpan> OFFICERS
            </Link>,
            <Link
              id="aboutNav#tutors"
              onClick={handleChangeCurrentNav}
              to="/about#tutors"
              className={classes.dropdownLink}
            >
              <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe66f;</IconSpan> TUTORS
            </Link>
          ]}
        />
      </ListItem>
      
    </List>
  {/* 
    <SearchWrapper className={classes.mlAuto}>
      <CustomInput
        white
        inputRootCustomClasses={classes.inputRootCustomClasses}
        formControlProps={{
          className: classes.formControl
        }}
        inputProps={{
          placeholder: "Search",
          inputProps: {
            "aria-label": "Search",
            className: classes.searchInput
          }
        }}
      />
    </SearchWrapper>
    */}
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
          <Button
            component={ Link }
            to="/contact"
            id="contactNav"
            className={ currentNav==="contactNav" ? classes.navLink + " " + classes.navLinkActive : classes.navLink} 
            onClick={handleChangeCurrentNav}
            color="transparent"
          >
            <IconSpan>&#xe959;</IconSpan>
            CONTACT
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            component={ Link }
            to="/donate"
            id="donateNav"
            className={ currentNav==="donateNav" ? classes.navLink + " " + classes.navLinkActive : classes.navLink} 
            onClick={handleChangeCurrentNav}
            color="transparent"
          >
            <IconSpan>&#xeb16;</IconSpan>
            DONATE
          </Button>
      </ListItem>
      
      {/* color={window.pageYOffset < 100 ? "rose" : "rose"} */}
      <ListItem className={classes.listItem}>
        <Button
          component={ Link }
          to="/register-program"
          id="registerProgramNav"
          color="rose"
          className={classes.navButton}
          round
          onClick={handleChangeCurrentNav}
        >
          { /*<IconSpan className="joinIcon">&#xe77c;</IconSpan> // not enough space */}
          Register Program
        </Button>
      </ListItem>
    </List>
    </Fragment>
  );
}

// HeaderLinks.defaultProps = {
//   hoverColor: "primary"
// };

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

// export default withStyles(headerLinksStyle)(HeaderLinks);

const mapStateToProps = (state) => {
    return { 
        currentProgram: state.getIn(['header', 'currentProgram']),
        hoverColor: state.getIn(['header', 'hoverColor']),
        currentNav: state.getIn(['header', 'currentNav'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentProgramData(e) {
            const action = actionCreators.getCurrentProgram();
            dispatch(action);
        },
        handleChangeCurrentNav(e) {
            const action = actionCreators.changeCurrentNav(e.currentTarget.id);
            dispatch(action); 
        },
        handleChangeCurrentNavDropDown(id) {
            const action = actionCreators.changeCurrentNav(id);
            dispatch(action); 
        }
    }
}

export default compose(
    withStyles(headerLinksStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderLinks)