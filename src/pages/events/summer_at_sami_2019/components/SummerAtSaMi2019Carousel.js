import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";

import image1 from "../../../../static/events/summer_at_sami/gallery/summer_camp_img_36.jpg";
import image2 from "../../../../static/events/summer_at_sami/gallery/summer_camp_img_10.jpg";
import image3 from "../../../../static/events/summer_at_sami/gallery/summer_camp_img_17.jpg";
import image4 from "../../../../static/events/summer_at_sami/gallery/summer_camp_img_113.jpg";
import image5 from "../../../../static/events/summer_at_sami/gallery/summer_camp_img_116.jpg";
import image6 from "../../../../static/events/summer_at_sami/gallery/summer_camp_img_125.jpg";


const useStyles = makeStyles(carouselStyle);

export default function SummerAtSaMi2019Carousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section} id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image4} alt="Fourth slide" className="slick-image" />
                </div>
                <div>
                  <img src={image5} alt="Fifth slide" className="slick-image" />
                </div>
                <div>
                  <img src={image6} alt="Sixth slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}