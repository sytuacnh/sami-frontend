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
import { Link } from "react-router-dom";

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
import LocationOn from "@material-ui/icons/LocationOn";
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

  const { classes, dropdownHoverColor } = props;
  return (
    <Fragment>
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          component={ Link }
          to="/"
          className={
            classes.navLink + " " + classes.navLinkActive
          }
          color="transparent"
        >
          <IconSpan>&#xe64b;</IconSpan>
          HOME
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            href="/TUTORING"
            className={
              classes.navLink
            }
            onClick={e => e.preventDefault()}
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
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Event}
          dropdownList={[
            <Link to="/pi-day-celebration" className={classes.dropdownLink}>
              <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe9ee;</IconSpan> Pi Day Celebration
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            href="/TUTORING"
            className={
              classes.navLink
            }
            onClick={e => e.preventDefault()}
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
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={SupervisedUserCircle}
          dropdownList={[
            <Link
              to="/advisors"
              className={classes.dropdownLink}
            >
              <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe608;</IconSpan> ADVISORS
            </Link>,
            <Link
              to="/officers"
              className={classes.dropdownLink}
            >
              <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe722;</IconSpan> OFFICERS
            </Link>,
            <Link
              to="/tutors"
              className={classes.dropdownLink}
            >
              <IconSpan className={classes.dropdownIcons + " dropDownIconFont"}>&#xe66f;</IconSpan> TUTORS
            </Link>
          ]}
        />
      </ListItem>
      
    </List>

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
    
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
          <Button
            href="/contact"
            className={
              classes.navLink
            }
            onClick={e => e.preventDefault()}
            color="transparent"
          >
            <IconSpan>&#xe959;</IconSpan>
            CONTACT
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            href="/donate"
            className={
              classes.navLink
            }
            onClick={e => e.preventDefault()}
            color="transparent"
          >
            <IconSpan>&#xeb16;</IconSpan>
            DONATE
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={ Link }
          to="/register-program"
          color={window.innerWidth < 960 ? "info" : "white"}
          className={classes.navButton}
          round
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
        hoverColor: state.getIn(['header', 'hoverColor'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentProgramData(e) {
            const action = actionCreators.getCurrentProgram();
            dispatch(action);
        }
    }
}

export default compose(
    withStyles(headerLinksStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderLinks)