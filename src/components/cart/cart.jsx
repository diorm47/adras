import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  addToCart,
  deleteFromCart,
  setCurrentItem,
} from "../../redux/cart-reducer";
import {
  addToFavorite,
  deleteFromFavorite,
} from "../../redux/favorite-reducer";

import { ReactComponent as FavoriteIcon } from "../../assets/icons/card-favorite.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart-bag.svg";

function Cart({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoriteEl = useSelector((state) => state.favorite.favorite);
  const inCart = useSelector((state) => state.cart.cart);

  const addDelFavor = (data) => {
    const isItemInFav = favoriteEl.some((item) => item.id === data.id);
    if (isItemInFav) {
      dispatch(deleteFromFavorite(data.id));
    } else {
      dispatch(addToFavorite(data));
    }
  };

  const addDelCart = (data) => {
    const isItemInCart = inCart.some((item) => item.id === data.id);
    if (!isItemInCart) {
      dispatch(addToCart(data));
    }
  };

  const handleClick = (item) => {
    dispatch(setCurrentItem(item));
    navigate(`/about/${item.id}`);
  };
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className="main_card_item">
            <div className="main_card_item_img">
              <div className="add_delete_fav" onClick={() => addDelFavor(item)}>
                <FavoriteIcon
                  className={
                    favoriteEl.some((data) => data.id === item.id)
                      ? "selected_cart"
                      : "not_selected_cart"
                  }
                />
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
                <p>
                  {new Intl.NumberFormat("ru-RU").format(item.price_per_month)}
                  {" "}  so'm/oyiga
                </p>
              </div>
              <div className="main_card_item_prices">
                <div>
                  <p>
                    {new Intl.NumberFormat("ru-RU").format(item.discount_price)}
                    so'm
                  </p>
                  <p>
                    {new Intl.NumberFormat("ru-RU").format(item.real_price)}so'm
                  </p>
                </div>
                <div
                  className="shopping_cart_cart"
                  onClick={() => addDelCart(item)}
                >
                  <CartIcon />
                  {/* inCart.some((data) => data.id === item.id)
                  ? "Куплен"
                  : "Купить" */}
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
