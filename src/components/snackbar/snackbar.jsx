import React from "react";
import "./snackbar.css";
import { NavLink } from "react-router-dom";

function Snackbar({ item }) {
  console.log(item);
  return (
    <div className="snacbar_wrapper">
      <img src={item.image} alt="" />
      <div>
        <p>Mahsulot savatga qo'shildi!</p>
        <p>{item.description}</p>
      </div>
      <NavLink to="/cart">
        <button className="exit_btn">Savatga o'tish</button>
      </NavLink>
    </div>
  );
}

export default Snackbar;
