import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ReactComponent as RightArrow } from "../../assets/icons/offer-right.svg";
import "./carousel-offer.css";

import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrowCar } from "../../assets/icons/right-arrow.svg";

import { ReactComponent as FavoriteIcon } from "../../assets/icons/card-favorite.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart-bag.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <RightArrowCar />
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

function CarouselOffer({ data, title }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="offer_wrapper">
      <div className="offer_wrapper_title">
        <h2>{title}</h2>
        <RightArrow />
      </div>
      <div className="carousel_offers_list">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div key={item.id} className="main_card_item">
                <div className="main_card_item_img">
                  <div className="add_delete_fav">
                    <FavoriteIcon />
                  </div>
                  <div className="product_badger">
                    <p>{item.product_badge}</p>
                  </div>
                  <img src={item.image} alt="" />
                </div>
                <div className="main_card_item_descriptions">
                  <div className="main_card_item_description">
                    <p>{item.description}</p>
                  </div>
                  <div className="main_card_item_rate">
                    <StarIcon />
                    <p>
                      {item.rate}.0 ({item.review} baho)
                    </p>
                  </div>
                  <div className="creadit_price">
                    <p>{item.price_per_month} so'm/oyiga</p>
                  </div>
                  <div className="main_card_item_prices">
                    <div>
                      <p>{item.discount_price} so'm</p>
                      <p>{item.real_price} so'm</p>
                    </div>
                    <div className="shopping_cart_cart">
                      <CartIcon />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselOffer;
