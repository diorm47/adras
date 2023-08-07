import React from "react";
import "./nav-bar.css";

import { NavLink } from "react-router-dom";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as UzbFlag } from "../../assets/icons/uzb-flag.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as LoginIcon } from "../../assets/icons/user.svg";
import { ReactComponent as BagIcon } from "../../assets/icons/bag.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite.svg";
import { ReactComponent as SearchingIcon } from "../../assets/icons/searching-icon.svg";
import katalog_icon from "../../assets/icons/katalog.png";
import { useSelector } from "react-redux";

function NavBar() {
  const inCart = useSelector((state) => state.cart.cart);
  return (
    <nav>
      <div className="navbar_wrapper">
        <div className="top_nav_bar">
          <div className="top_nav_bar_wrapper">
            <div className="top_nav_left">
              <div className="top_nav_city">
                <LocationIcon />
                <p>Shahar: </p>
                <span>Namangan</span>
              </div>
              <NavLink to="/">
                <div className="delivery_points">
                  <p>Topshirish punktlari</p>
                </div>
              </NavLink>
            </div>
            <div className="top_nav_center">
              <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
            </div>
            <div className="top_nav_right">
              <NavLink to="/faq">
                <p>Savol-javoblar</p>
              </NavLink>
              <NavLink to="/faq">
                <p>Buyurtmalarim</p>
              </NavLink>
              <div className="lang_changer">
                <UzbFlag />
                <p>Оʻzbekcha</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main_nav_bar">
          <div className="main_nav_bar_wrapper">
            <NavLink to="/">
              <div className="left_main_logo">
                <Logo />
              </div>
            </NavLink>
            <div className="catalogue_searching">
              <button className="catalogue_btn">
                <img src={katalog_icon} alt="" />
                <p>Katalog</p>
              </button>
              <div className="searching_input">
                <div className="searching_input_item">
                  <input
                    type="text"
                    placeholder="Mahsulotlar va turkumlar izlash"
                  />
                  <button>
                    <SearchingIcon />
                  </button>
                </div>
              </div>
            </div>

            <div className="nav_actions_btns">
              <div className="nav_actions_btn">
                <LoginIcon />
                <p>Kirish</p>
              </div>
              <NavLink to="/wishes">
                <div className="nav_actions_btn">
                  <FavoriteIcon />
                  <p>Saralangan</p>
                </div>
              </NavLink>
              <NavLink to="/cart">
                <div className="nav_actions_btn">
                  <BagIcon />
                  <p>Savat</p>
                  {!inCart.length || (
                    <div className="in_cart_det">
                      <p>{inCart.length}</p>
                    </div>
                  )}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="nav_bottom_filters">
          <div className="nav_bottom_filter_items">
            <div className="nav_bottom_filter_item">
              <p>Elektronika</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Maishiy texnika</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Kiyim</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Poyabzallar</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Aksessuarlar</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Go'zallik</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Salomatlik</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Uy-ro'zg'or buyumlari</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Qurilish va ta'mirlash</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Avtotovarlar</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Bolalar tovarlari</p>
            </div>
            {/* <div className="nav_bottom_filter_item">
              <p>Xobbi va ijod</p>
            </div>
            <div className="nav_bottom_filter_item">
              <p>Sport va hordiq</p>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
