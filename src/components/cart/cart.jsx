import React from "react";
import "./cart.css";

import { ReactComponent as FavoriteIcon } from "../../assets/icons/card-favorite.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart-bag.svg";

function Cart({ data }) {
  return (
    <>
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
    </>
  );
}

export default Cart;
