import React from "react";
import "./footer.css";

import { ReactComponent as AppleIcon } from "../../assets/icons/footer-icons/apple-icon.svg";
import { ReactComponent as GooglePlay } from "../../assets/icons/footer-icons/googleplay-icon.svg";
import { ReactComponent as Instagram } from "../../assets/icons/footer-icons/instagram-icon.svg";
import { ReactComponent as Telegram } from "../../assets/icons/footer-icons/telegram-icon.svg";
import { ReactComponent as Youtube } from "../../assets/icons/footer-icons/youtube-icon.svg";
import { ReactComponent as Facebook } from "../../assets/icons/footer-icons/facebook-icon.svg";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="top_footer_links">
          <div className="top_footer_link_block">
            <div className="top_footer_link_block_title">
              <p>Biz haqimizda</p>
            </div>
            <div className="top_footer_link">
              <p>Topshirish punktlari</p>
            </div>
            <div className="top_footer_link">
              <p>Vakansiyalar</p>
            </div>
          </div>
          <div className="top_footer_link_block">
            <div className="top_footer_link_block_title">
              <p>Foydalanuvchilarga</p>
            </div>
            <div className="top_footer_link">
              <p>Biz bilan bog'lanish </p>
            </div>
            <div className="top_footer_link">
              <p>Savol-Javob </p>
            </div>
          </div>
          <div className="top_footer_link_block">
            <div className="top_footer_link_block_title">
              <p>Tadbirkorlarga</p>
            </div>
            <div className="top_footer_link">
              <p>Uzumda soting </p>
            </div>
            <div className="top_footer_link">
              <p>Sotuvchi kabinetiga kirish </p>
            </div>
          </div>
          <div className="top_footer_link_block">
            <div className="top_footer_link_block_title">
              <p>Ilovani yuklab olish</p>
            </div>
            <div className="download_app_footer">
              <div className="apple_download">
                <AppleIcon fill="#000" />
                <p>AppStore</p>
              </div>
              <div>
                <GooglePlay />
                <p>Google Play</p>
              </div>
            </div>
            <div className="top_footer_link_block_title">
              <p>Uzum ijtimoiy tarmoqlarda</p>
            </div>
            <div className="footer_socials">
              <Instagram />
              <Telegram />
              <Youtube />
              <Facebook />
            </div>
          </div>
        </div>
        <div className="footer_bottom_policy">
          <div className="left_footer_policy">
            <p> Maxfiylik kelishuvi </p>
            <p>Foydalanuvchi kelishuvi</p>
          </div>
          <div className="footer_company_descriptions">
            <p>
              «2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
              himoyalangan»
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
