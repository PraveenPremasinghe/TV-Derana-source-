import React from "react";
import "./Footer.css";



import { Icon } from '@iconify/react';

import Tvderana_logo from "../Header/tv_derana_logo.png";







function Footer() {
  return (
    <div>
      <div className="footer1">
        <div className="Tvderana_logo">
          <img src={Tvderana_logo} />
        </div>

        <div className="Tvderanatitle">Premiun Entertainment Channel</div>
        <div className="socialmedia">
          <Icon
            className="socialmedia-icon"
            icon="ri:facebook-circle-fill"
            color="#000"
            width={40}
          />
          <Icon
            className="socialmedia-icon"
            icon="fa:youtube"
            color="#000"
            width={40}
          />
          <Icon
            className="socialmedia-icon"
            icon="logos:tiktok-icon"
            color="#000"
            width={40}
          />
          <Icon
            className="socialmedia-icon"
            icon="bxl:instagram-alt"
            color="#000"
            width={40}
          />
          <Icon
            className="socialmedia-icon"
            icon="ant-design:twitter-circle-filled"
            color="#000"
            width={40}
          />
        </div>
        <hr className="footerhr" />

        <footer class="footer">
          <div class="footer__addr">
            Discover Other Websites
            <div>
          <Icon
            className="socialmedia-icon"
            icon="ri:facebook-circle-fill"
            color="#000"
            width={40}
          />
          <Icon
            className="socialmedia-icon"
            icon="fa:youtube"
            color="#000"
            width={40}
          />
          <Icon
            className="socialmedia-icon"
            icon="logos:tiktok-icon"
            color="#000"
            width={40}
          />
          <Icon
            className="socialmedia-icon"
            icon="bxl:instagram-alt"
            color="#000"
            width={40}
          />
          <Icon
            className="socialmedia-icon"
            icon="ant-design:twitter-circle-filled"
            color="#000"
            width={40}
          />
        </div>
          </div>
          

          <ul class="footer__nav">
            <li class="nav__item nav__item--extra"></li>

            <li class="nav__item">
              <h2 class="nav__title">Search More</h2>

              <ul class="nav__ul">
                <li>
                  <a href="#">Live</a>
                </li>

                <li>
                  <a href="#">Categories</a>
                </li>

                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">App</a>
                </li>
              </ul>
            </li>

            <li class="nav__item">
              <h2 class="nav__title">Help & Support</h2>

              <ul class="nav__ul">
                <li>
                  <a href="#">About us</a>
                </li>

                <li>
                  <a href="#">Ad Choices</a>
                </li>

                <li>
                  <a href="#">Advertise With Us</a>
                </li>
                <li>
                  <a href="#">Copyright Policy</a>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </div>

      
      <div className="footer_copyright">
      @2022 TV Derana.All right reserved.solution by Thenology Partner FortunaCreatives
      </div>

    </div>
  );
}

export default Footer;
