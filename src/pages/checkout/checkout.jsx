import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactComponent as CheckedIcon } from "../../assets/icons/checked.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/icons/down-arrow.svg";

import { ReactComponent as UzcardCard } from "../../assets/icons/uzcard-cart.svg";
import SecondaryNav from "../../components/secondary-nav/secondary-nav";
import "./checkout.css";
import "../cart/cart.css";
import InputMask from "react-input-mask";
import humo_card from "../../assets/icons/humo-logo.png";

function Checkout({ setActiveModal }) {
  const inCart = useSelector((state) => state.cart.cart);
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <>
      <SecondaryNav setActiveModal={setActiveModal} />
      <div className="main_page_wrapper checkout_page">
        <div className="checkout_title">
          <h1>Buyurtmani rasmiylashtirish</h1>
        </div>
        <div className="checkout_items_wrapper">
          <div className="checkout_actions_block">
            <div className="checkout_descriptions">
              <div className="checkout_descriptions_wrapper">
                <div className="checkout_descriptions_title">
                  <p>Qabul qilish usuli va yetkazib berish manzili:</p>
                </div>
                <div className="delivery_place">
                  <p className="main_titles_ch">Yetkazib berish shahri</p>
                  <select name="" id="">
                    <option value="">Namangan</option>
                    <option value="">Toshkent</option>
                    <option value="">Andijon</option>
                  </select>
                </div>
                <div className="take_choice">
                  <p className="main_titles_ch">Olish usuli</p>
                  <div className="take_choice_item take_choice_1">
                    <div className="take_choice_item_type">
                      <input type="radio" name="" id="" />
                      <div>
                        <p>Uzum topshirish punkti</p>
                        <p>
                          Mustaqil M08 10 (Indin), <span>bepul</span>
                        </p>
                      </div>
                    </div>
                    <div className="take_choice_item_descriptions">
                      <div>
                        <CheckedIcon />
                        <p>Buyurtmani saqlash muddati - 5 kun</p>
                      </div>
                      <div>
                        <CheckedIcon />
                        <p>Mahsulotni tekshirish va kiyib ko'rish mumkin</p>
                      </div>
                      <div>
                        <CheckedIcon />
                        <p>
                          Mahsulotlarning tez va muammosiz qaytarib olinishi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="take_choice_item">
                    <div className="take_choice_item_type">
                      <input type="radio" name="" id="" />
                      <div>
                        <p>Kuryer orqali eshikkacha</p>
                        <p>Yetkazib beramiz erta , 30 000 so'm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout_form">
              <div className="checkout_descriptions_title">
                <p>Buyurtma qabul qiluvchi:</p>
                <p className="form_description_checkout">
                  <span onClick={() => setActiveModal(true)}>
                    Tizimga kiring
                  </span>
                  , agar Uzum orqali xarid qilgan boʻlsangiz
                </p>
              </div>
              <div className="checkout_form_block">
                <div className="checkout_form_items">
                  <div className="checkout_form_item">
                    <p>
                      Familiya <span>*</span>
                    </p>
                    <input type="text" placeholder="Familiyangizni kiriting" />
                  </div>
                  <div className="checkout_form_item">
                    <p>
                      Ism <span>*</span>
                    </p>
                    <input type="text" placeholder="Ismingizni kiriting" />
                  </div>
                </div>
                <div className="ch_phone_form_alert">
                  <p>
                    Siz ko'rsatgan telefon raqamiga buyurtma holati haqida
                    bildirishnoma yuboramiz. <br />
                    Yetkazib berish vaqtini aniqlashtirish uchun kuryer siz
                    bilan telefon orqali bog'lanadi.
                  </p>
                </div>
                <div className="ch_phone">
                  <div className="checkout_form_item">
                    <p>
                      Telefon raqami <span>*</span>
                    </p>

                    <InputMask
                      mask="999 99 999-99-99"
                      value={phone}
                      placeholder="+998 __ ___-__-__"
                      onChange={handleChange}
                      maskChar={null}
                    />
                  </div>
                </div>
                <div className="newslatters_ch">
                  <input type="checkbox" name="" id="" />
                  <p>
                    Yangiliklarimiz va aksiyalarimizga obuna bo'ling. Yangi
                    chegirmalar, aksiyalar va sotib tugatishlar <br /> haqida
                    birinchilar qatorida bilib olasiz.
                  </p>
                </div>
              </div>
            </div>
            <div className="checkout_form checkout_payment_type">
              <div className="checkout_descriptions_title">
                <p>To'lov turi</p>
              </div>
              <div className="take_choice_item">
                <div className="take_choice_item_type">
                  <input type="radio" name="" id="" />
                  <div>
                    <p>Onlayn karta orqali (UZCARD, HUMO)</p>
                    <div className="payment_cards">
                      <UzcardCard />
                      <img src={humo_card} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="take_choice_item diabled_take_choice_item">
                <div className="take_choice_item_type">
                  <input type="radio" name="" id="" disabled />
                  <div>
                    <p>Uzum Nasiya</p>
                    <div className="nasiya_blocks">
                      <div className="nasiya_block_item">
                        <p>3 oy</p>
                        <p>
                          dan{" "}
                          {new Intl.NumberFormat("ru-RU").format(
                            inCart.reduce(
                              (accumulator, current) =>
                                current.isInCartActive
                                  ? accumulator +
                                    current.real_price * current.count
                                  : accumulator,
                              0
                            ) / 3
                          )}{" "}
                          so'mdan
                        </p>
                      </div>
                      <div className="nasiya_block_item">
                        <p>6 oy</p>
                        <p>
                          dan{" "}
                          {new Intl.NumberFormat("ru-RU").format(
                            inCart.reduce(
                              (accumulator, current) =>
                                current.isInCartActive
                                  ? accumulator +
                                    current.real_price * current.count
                                  : accumulator,
                              0
                            ) +
                              (inCart.reduce(
                                (accumulator, current) =>
                                  current.isInCartActive
                                    ? accumulator +
                                      current.real_price * current.count
                                    : accumulator,
                                0
                              ) /
                                100) *
                                26
                          )}{" "}
                          so'mdan
                        </p>
                      </div>
                      <div className="nasiya_block_item ">
                        <p>6 oy</p>
                        <p>
                          dan{" "}
                          {new Intl.NumberFormat("ru-RU").format(
                            inCart.reduce(
                              (accumulator, current) =>
                                current.isInCartActive
                                  ? accumulator +
                                    current.real_price * current.count
                                  : accumulator,
                              0
                            ) +
                              (inCart.reduce(
                                (accumulator, current) =>
                                  current.isInCartActive
                                    ? accumulator +
                                      current.real_price * current.count
                                    : accumulator,
                                0
                              ) /
                                100) *
                                44
                          )}{" "}
                          so'mdan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="take_choice_item ">
                <div className="take_choice_item_type ">
                  <input type="radio" name="" id="" />
                  <div>
                    <p>Qabul qilinganda</p>
                    <p className="in_recieve">Naqd pul yoki karta orqali</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout_form">
              <div className="checkout_descriptions_title">
                <p>Buyurtmadagi mahsulotlar</p>
              </div>
              <div className="checkout_items_list">
                {inCart.map((item) => (
                  <div className="in_cart_items_list_item" key={item.id}>
                    <div className="cart_item_img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="cart_item_description">
                      <div className="cart_item_description_top">
                        <h4>{item.description}</h4>
                      </div>

                      <div className="cart_item_descr_cashier_calc">
                        <div>
                          <p>
                            <span>Sotuvchi:</span>O'quvchilar do'koni
                          </p>
                        </div>
                        <div className="checkount_item_count">
                          <p>
                            <span>Miqdor:</span> {item.count} dona
                          </p>
                        </div>

                        <div className="cart_item_price">
                          <p>
                            {new Intl.NumberFormat("ru-RU").format(
                              item.real_price * item.count
                            )}{" "}
                            so'm
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="checkout_items_block">
            <div className="checkout_items_block_title">
              <p>Buyurtmangiz</p>
              <NavLink to="/cart">
                <p>Savatga o'tish</p>
              </NavLink>
            </div>
            <div className="checkout_items_block_item">
              <p>Mahsulotlar ({inCart.length}):</p>
              <p>
                {new Intl.NumberFormat("ru-RU").format(
                  inCart.reduce(
                    (accumulator, current) =>
                      current.isInCartActive
                        ? accumulator + current.real_price * current.count
                        : accumulator,
                    0
                  )
                )}{" "}
                so'm
              </p>
            </div>
            <div className="checkout_items_block_item">
              <p>Yetkazib berish:</p>
              <p>Bepul</p>
            </div>

            <div className="checkout_total">
              <p>Jami:</p>
              <p>
                {new Intl.NumberFormat("ru-RU").format(
                  inCart.reduce(
                    (accumulator, current) =>
                      current.isInCartActive
                        ? accumulator + current.real_price * current.count
                        : accumulator,
                    0
                  )
                )}{" "}
                so'm
              </p>
            </div>
            <div className="promocode">
              <DownArrowIcon />
              <p>Promokod bormi?</p>
            </div>

            <button
              // onClick={redirectCheckout}
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
              Buyurtmani rasmiylashtirish
            </button>
            <div className="checkout_alerts">
              <p>
                Buyurtma berish orqali shaxsiy ma'lumotlarning Uzum
                platformasining <span>Maxfiylik kelishuvi</span> va{" "}
                <span>Foydalanuvchi kelishuvi</span> qoidalariga muvofiq qayta
                ishlanishiga rozilik bildirasiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
