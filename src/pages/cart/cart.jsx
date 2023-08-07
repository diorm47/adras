import React from "react";
import empty_cart_img from "../../assets/images/empty-cart-img.webp";
import "./cart.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const inCart = useSelector((state) => state.cart.cart);

  return (
    <div className="main_page_wrapper cart_page">
      <div className="in_cart_items">
        <div className="in_cart_items_list_title">
          <h2>
            Savatingiz, <span>{inCart.length} mahsulot</span>
          </h2>
        </div>
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
              <div className="in_cart_items_list_item">
                <div className="selected_all">
                  <input type="checkbox" />
                </div>
                <div className="cart_item_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart_item_description">
                  <h4>{item.description}</h4>
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
                      <button>-</button>
                      <p>1</p>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="empty_cart_block">
        <img src={empty_cart_img} alt="cart is empty" />
        <p className="empty_block_title">Savatda hozircha mahsulot yo'q</p>
        <p className="empty_block_descriptions">
          Bosh sahifadagi to'plamlardan boshlang yoki kerakli mahsulotni qidiruv
          orqali toping
        </p>
        <NavLink to="/">
          <button className="main_button_template">Bosh sahifa</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Cart;
