import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import empty_cart_img from "../../assets/images/empty-cart-img.webp";
import CarouselOffer from "../../components/carousel-offer/carousel-offer";
import { school_data } from "../../components/data";
import {
  decrementItem,
  deleteFromCart,
  incrementItem,
  setActiveInCart,
  setDisActiveInCart,
} from "../../redux/cart-reducer";
import "./cart.css";
import "../../components/cart/cart.css";

import { ReactComponent as CheckedIcon } from "../../assets/icons/checked.svg";
import { ReactComponent as CheckoutIcon } from "../../assets/icons/circle.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash-icon.svg";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inCart = useSelector((state) => state.cart.cart);
  const addDelCart = (data) => {
    dispatch(deleteFromCart(data.id));
  };

  useEffect(() => {});

  const increment = (item) => {
    dispatch(incrementItem(item.id));
  };

  const decrement = (item) => {
    dispatch(decrementItem(item.id));
  };
  const handleActiveInCart = (item) => {
    if (item.isInCartActive) {
      dispatch(setDisActiveInCart(item.id));
    } else {
      dispatch(setActiveInCart(item.id));
    }
  };

  const redirectCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="main_page_wrapper cart_page">
      {inCart && inCart.length ? (
        <>
          <div className="in_cart_items">
            <div className="in_cart_items_list_title">
              <h2>
                Savatingiz, <span>{inCart.length} mahsulot</span>
              </h2>
            </div>
            <div className="incart_items_wrapper">
              <div className="in_cart_items_list">
                <div className="in_cart_items_list_top">
                  <div className="selected_all">
                    <input type="checkbox" />
                    <p>Hammasini yechish</p>
                  </div>
                  <div className="delievering_date">
                    <p>Yetkazib berishning eng yaqin sanasi:</p>
                    <div>M08 8 (Erta)</div>
                  </div>
                </div>
                <div className="in_cart_items_list_wrapper">
                  {inCart.map((item) => (
                    <div className="in_cart_items_list_item" key={item.id}>
                      <div className="selected_all">
                        <input
                          type="checkbox"
                          defaultChecked={item.isInCartActive}
                          onClick={() => handleActiveInCart(item)}
                        />
                      </div>
                      <div className="cart_item_img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="cart_item_description">
                        <div className="cart_item_description_top">
                          <h4>{item.description}</h4>
                          <div
                            className="delete_cart_item"
                            onClick={() => addDelCart(item)}
                          >
                            <TrashIcon />
                            <p>
                              Yo'q <br /> qilish
                            </p>
                          </div>
                        </div>

                        <div className="cart_item_descr_cashier_calc">
                          <div>
                            <p>
                              <span>Sotuvchi:</span>O'quvchilar do'koni
                            </p>
                            <p>
                              <span>Naqshlar:</span>Panda
                            </p>
                          </div>
                          <div className="inc_denc_buttons">
                            <button onClick={() => decrement(item)}>-</button>
                            <p>{item.count}</p>
                            <button onClick={() => increment(item)}>+</button>
                          </div>
                          <div className="cart_item_price">
                            <p>
                              {new Intl.NumberFormat("ru-RU").format(
                                item.real_price * item.count
                              )}{" "}
                              so'm
                            </p>
                            <p className="ci_d_price">
                              {new Intl.NumberFormat("ru-RU").format(
                                item.discount_price * item.count
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="right_checkout_block">
                <div className="top_checkout_descr">
                  <div className="checkout_description">
                    <CheckoutIcon className="checked_icon_wrapper" />
                    <CheckedIcon className="checked_icon" />
                  </div>
                  <div className="checkout_description_text">
                    <p>
                      <span>Buyurtmangizni rasmiy topshirish</span> punktiga
                      bepul yetkazib beramiz
                    </p>
                    <p>
                      Eshikkacha yetkazib berishgacha yana{" "}
                      {new Intl.NumberFormat("ru-RU").format(
                        500000 -
                          inCart.reduce(
                            (accumulator, current) =>
                              accumulator + current.real_price * current.count,
                            0
                          )
                      )}{" "}
                      so'm
                    </p>
                  </div>
                </div>
                <div className="checkout_items_count">
                  <p className="summary_title">Buyurtmangiz</p>
                </div>
                <div className="chechout_cound_price">
                  <div className="products_count_discount">
                    <p>Mahsulotlar ({inCart.length}):</p>
                    <p>
                      {" "}
                      {new Intl.NumberFormat("ru-RU").format(
                        inCart.reduce(
                          (accumulator, current) =>
                            current.isInCartActive
                              ? accumulator +
                                current.discount_price * current.count
                              : accumulator,
                          0
                        )
                      )}{" "}
                      so'm
                    </p>
                  </div>
                  <div className="delievering_date">
                    <div>Yetkazib berish M08 8 (Erta)</div>
                  </div>
                  <div className="total_price">
                    <p>Jami:</p>
                    <div>
                      <p>
                        {new Intl.NumberFormat("ru-RU").format(
                          inCart.reduce(
                            (accumulator, current) =>
                              current.isInCartActive
                                ? accumulator +
                                  current.real_price * current.count
                                : accumulator,
                            0
                          )
                        )}{" "}
                        so'm
                      </p>
                      {inCart.reduce(
                        (accumulator, current) =>
                          current.isInCartActive
                            ? accumulator +
                              current.discount_price * current.count
                            : accumulator,
                        0
                      ) > 0 ? (
                        <span>
                          Tejovingiz:{" "}
                          {new Intl.NumberFormat("ru-RU").format(
                            inCart.reduce(
                              (accumulator, current) =>
                                current.isInCartActive
                                  ? accumulator +
                                    current.discount_price * current.count
                                  : accumulator,
                              0
                            ) -
                              inCart.reduce(
                                (accumulator, current) =>
                                  current.isInCartActive
                                    ? accumulator +
                                      current.real_price * current.count
                                    : accumulator,

                                0
                              )
                          )}{" "}
                          so'm
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={redirectCheckout}
                  className={
                    inCart.reduce(
                      (accumulator, current) =>
                        current.isInCartActive
                          ? accumulator + current.real_price * current.count
                          : accumulator,
                      0
                    ) === 0
                      ? "checkout_btn checkout_btn_disabled"
                      : "checkout_btn"
                  }
                  disabled={
                    inCart.reduce(
                      (accumulator, current) =>
                        current.isInCartActive
                          ? accumulator + current.real_price * current.count
                          : accumulator,
                      0
                    ) === 0
                      ? true
                      : false
                  }
                >
                  Rasmiylashtirishga o'tish
                </button>
                <a href="tel:+998999999999">
                  <button className="checkout_btn">Qo'ng'iroq qilish</button>
                </a>
              </div>
            </div>
          </div>
          <div className="express_content">
            <CarouselOffer
              title="Bu mahsulot bilan quyidagilar xarid qilinadi:"
              data={school_data}
            />
          </div>
        </>
      ) : (
        <div className="empty_cart_block">
          <img src={empty_cart_img} alt="cart is empty" />
          <p className="empty_block_title">Savatda hozircha mahsulot yo'q</p>
          <p className="empty_block_descriptions">
            Bosh sahifadagi to'plamlardan boshlang yoki kerakli mahsulotni
            qidiruv orqali toping
          </p>
          <NavLink to="/">
            <button className="main_button_template">Bosh sahifa</button>
          </NavLink>
        </div>
      )}
      <div className="best_sellings">
        <CarouselOffer title="Ommabop mahsulotlar" data={school_data} />
      </div>
    </div>
  );
}

export default Cart;
