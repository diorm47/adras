import React from "react";
import empty_wishes_img from "../../assets/images/empty-wishes-img.webp";
import "./wishes.css";
import "../cart/cart.css";
import { useSelector } from "react-redux";
import Cart from "../../components/cart/cart";

function Wishes({ setActiveModal }) {
  const favorites = useSelector((state) => state.favorite.favorite);

  return (
    <div className="main_page_wrapper cart_page">
      {favorites && favorites.length ? (
        <>
          <div className="carts_title">
            <p>Istaklarim</p>
          </div>
          <div className="select_sort_carts">
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
          <div className="carts_selected_list">
            <Cart data={favorites} />
          </div>
        </>
      ) : (
        <div className="empty_cart_block">
          <img src={empty_wishes_img} alt="wishes is empty" />
          <p className="empty_block_title">Sizga yoqqanini qo'shing</p>
          <p className="empty_block_descriptions">
            Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha
            saralanganlar saqlanib qoladi
          </p>

          <button
            className="main_button_template"
            onClick={() => setActiveModal(true)}
          >
            Akkauntga kirish
          </button>
        </div>
      )}
    </div>
  );
}

export default Wishes;
