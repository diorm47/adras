import React, { useState } from "react";
import "./login.css";
import InputMask from "react-input-mask";
import { ReactComponent as ExitIcon } from "../../assets/icons/close.svg";
function Login({ setActiveModal }) {
  const [disabledModal, setDisabledModal] = useState(false);
  const [phone, setPhone] = useState("");

  const closeModal = () => {
    setDisabledModal(true);
    setTimeout(() => {
      setActiveModal(false);
    }, 300);
  };

  const handleChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div className="modal_wrapper">
      <div className="modal_bg" onClick={closeModal}></div>
      <div
        className={
          disabledModal
            ? "modal_wrapper_content from_top_anim"
            : "modal_wrapper_content from_bottom_anim"
        }
      >
        <div className="modal_header">
          <button className="exit_btn" onClick={closeModal}>
            <ExitIcon />
          </button>
        </div>
        <div className="sign_in_wrapper">
          <p className="sign_in_title">Telefon raqamini kiriting</p>
          <p className="sign_in_des">Tasdiqlash kodini SMS orqali yuboramiz</p>
          <div className="input_wrapper_sign">
            <div class="number_before">+998</div>
            <InputMask
              mask="99 999-99-99"
              value={phone}
              placeholder="00 000-00-00"
              onChange={handleChange}
              maskChar={null}
            />
            {/* <input type="text" placeholder="00 000-00-00" /> */}
          </div>

          <button className="sign_in_wrapper_btn">Kodni olish</button>
        </div>
        <div className="security_login">
          <p>
            Avtotizatsiyadan o'tish orqali siz{" "}
            <span>
              shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
