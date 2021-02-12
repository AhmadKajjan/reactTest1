import React from "react";

import IconButton from "../IconButton/IconButton";
import ImageButton from "../ImageButton/ImageButton";

import facebookIcon from "../../assests/facebook-white.svg";
import twitterIcon from "../../assests/twitter-white.svg";
import instagramIcon from "../../assests/instagram-white.svg";
import appStoreImage from "../../assests/app-store.svg";
import playStoreImage from "../../assests/play-store.svg";
import windowsStoreImage from "../../assests/windows-store.svg";

import "./Footer.scss";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="margin-div-left" />
        <div className="footer-content">
          <ul className="list">
            <li>Home</li>
            <li>|</li>
            <li>Terms and Conditions</li>
            <li>|</li>
            <li>Privacy Policy</li>
            <li>|</li>
            <li>Collection Statement</li>
            <li>|</li>
            <li>Help</li>
            <li>|</li>
            <li>Manage Account</li>
          </ul>

          <div className="copyright">
            <p>
              Copyright @ {new Date().getFullYear()} DEMO Streaming,All Right
              Reserved.{" "}
            </p>
          </div>
          <div className="social-and-stores">
            <div className="socials">
              <IconButton imagePath={facebookIcon} imageName="facebook" />
              <IconButton imagePath={twitterIcon} imageName="facebook" />
              <IconButton imagePath={instagramIcon} imageName="facebook" />
            </div>
            <div className="stores">
              <ImageButton imagePath={appStoreImage} imageName="Apple Store" />
              <ImageButton imagePath={playStoreImage} imageName="Play Store" />
              <ImageButton
                imagePath={windowsStoreImage}
                imageName="Windows Store"
              />
            </div>
          </div>
        </div>
        <div className="margin-div-right" />
      </div>
    </div>
  );
};
export default Footer;
