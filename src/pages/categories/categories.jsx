import React from "react";
import { NavLink } from "react-router-dom";
import "./categories.css";
import "../wishes/wishes.css";

function Categories() {
  return (
    <div className="categories_page main_page_wrapper">
      <div className="categories_top_menu">
        <NavLink to="/">
          <p>Bosh sahifa</p>
        </NavLink>
        <span>/</span>
        <NavLink to="#">
          <p>Barcha toifalar</p>
        </NavLink>
        <span>/</span>
        <p>Elektronika</p>
      </div>
      <div className="categories_top_title">
        <div className="select_sort_carts">
          <div className="carts_title">
            <p>Istaklarim</p>
          </div>
          <div className="categories_select">
            <p>Saralash</p>
            <select name="" id="">
              <option value="">Ommabop</option>
              <option value="">Arzonroq</option>
              <option value="">Qimmatroq</option>
              <option value="">Reytingi yuqori</option>
              <option value="">Ko'p buyurtirilgan</option>
              <option value="">Yaqinda qo'shilgan</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
