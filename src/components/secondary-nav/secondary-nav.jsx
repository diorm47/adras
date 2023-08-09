import React from "react";
import "./secondary-nav.css";
import logo from "../../assets/icons/logo-png.png";
import { ReactComponent as LockIcon } from "../../assets/icons/lock-icon.svg";
import { NavLink } from "react-router-dom";

function SecondaryNav({ setActiveModal }) {
  return (
    <>
      <div className="secondary_nav">
        <div className="secondary_nav_wrapper">
          <NavLink to="/">
            <div className="secondar_nav_logo">
              <img src={logo} alt="" />
              <p>adras</p>
            </div>
          </NavLink>
          <div className="secirity_connect">
            <LockIcon />
            <p>Ulanish himoyalangan</p>
          </div>
          <div className="checkout_links">
            <p>Qaytarib olish shartlari</p>
            <p>Qo'llab-quvvatlash xizmati</p>
          </div>
          <button className="log_in" onClick={() => setActiveModal(true)}>
            Kirish
          </button>
        </div>
      </div>
    </>
  );
}

export default SecondaryNav;
