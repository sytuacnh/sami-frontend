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

import image1 from "../../../../static/events/pi_day_celebration/gallery/IMG_5084.JPG";
import image2 from "../../../../static/events/pi_day_celebration/gallery/IMG_5083.JPG";
import image3 from "../../../../static/events/pi_day_celebration/gallery/IMG_5392.JPG";
import image4 from "../../../../static/events/pi_day_celebration/gallery/IMG_5082.JPG";
import image5 from "../../../../static/events/pi_day_celebration/gallery/IMG_5377.JPG";
import image6 from "../../../../static/events/pi_day_celebration/gallery/IMG_5086.JPG";


const useStyles = makeStyles(carouselStyle);

export default function PiDayCelebrationCarousel() {
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