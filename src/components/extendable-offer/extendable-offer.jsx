import React from "react";
import "./extendable-offer.css";

import { ReactComponent as RightArrow } from "../../assets/icons/offer-right.svg";
import Cart from "../cart/cart";

function ExtendableOffer({ data, title }) {
  return (
    <div className="offer_wrapper">
      <div className="offer_wrapper_title">
        <h2>{title}</h2>
        <RightArrow />
      </div>
      <div className="offers_list">
        <Cart data={data} />
      </div>
      <div className="show_more_btn_block">
        <button className="show_more_btn">Yana ko'rsatish 20</button>
      </div>
    </div>
  );
}

export default ExtendableOffer;
