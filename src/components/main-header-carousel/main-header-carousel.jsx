import React from "react";
import "./main-header-carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import car1 from "../../assets/images/main-carousel/car-1.jpg";
import car2 from "../../assets/images/main-carousel/car-2.jpg";
import car3 from "../../assets/images/main-carousel/car-3.jpg";
import car4 from "../../assets/images/main-carousel/car-4.jpg";

import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <RightArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <LeftArrow />
    </div>
  );
}

function MainHeaderCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="main_page_carousel">
      <Slider {...settings}>
        <div className="main_page_carousel_item">
          <img src={car1} alt="" />
        </div>
        <div className="main_page_carousel_item">
          <img src={car2} alt="" />
        </div>
        <div className="main_page_carousel_item">
          <img src={car3} alt="" />
        </div>
        <div className="main_page_carousel_item">
          <img src={car4} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default MainHeaderCarousel;
