import logoLarge from "../images/Logo large.png";
import phone from "../images/iconmonstr-smartphone-7 1.svg";
import time from "../images/iconmonstr-time-3 1.svg";
import facebook from "../images/iconmonstr-facebook-6.svg";
import logo from "../images/logo.png";
//router
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header class="header" id="header">
      <div className="header__logo-large">
        <Link to="/">
          <img
            class="header__logo-large--img"
            src={logoLarge}
            alt="Murphy Gardens Logo"
          />
        </Link>
      </div>
      <div class="header__info">
        <div class="header__hours">
          <img class="header__icon" src={time} alt="hours" />
          <p class="header__hours-text">Mon - Sat 9.00 - 18.00</p>
        </div>
        <div class="header__contact">
          <a class="contact-anchor" href="tel:07470359110">
            <img
              class="header__icon header__icon-phone"
              src={phone}
              alt="contact details"
            />
            <p class="header__contact-text-phone">(+44) 07470 359110</p>
          </a>
          <a class="contact-anchor" href="mailto:murphygardens1@gmail.com">
            <p class="header__contact-text-email">murphygardens1@gmail.com</p>
          </a>
        </div>
        <div class=".btn">
          <Link to="/contact" class="btn">
            GET A QUOTE
          </Link>
        </div>
      </div>
      <div class="mobile__nav">
        <div class="navigation">
          <input
            type="checkbox"
            class="navigation__checkbox"
            id="navi-toggle"
          />
          <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
          </label>
          <div class="navigation__background">&nbsp;</div>

          <nav class="navigation__nav">
            <ul class="navigation__list">
              <li class="navigation__item">
                <a href="/" class="navigation__link">
                  Home
                </a>
              </li>
              <li class="navigation__item">
                <a href="/about" class="navigation__link">
                  About
                </a>
              </li>
              <li class="navigation__item">
                <a href="/pricing" class="navigation__link">
                  Pricing
                </a>
              </li>
              <li class="navigation__item">
                <a href="/gallery" class="navigation__link">
                  Gallery
                </a>
              </li>
              <li class="navigation__item">
                <a href="/contact" class="navigation__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="header__nav">
        <div class="header__nav-inside">
          <ul class="header__nav-items">
            <li class="header__li-nav">
              <Link to="/" class="header__nav-link">
                Home
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/" ? "60%" : "0" }}
              />
            </li>
            <li class="header__li-nav">
              <Link to="/about" class="header__nav-link">
                About
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/about" ? "60%" : "0" }}
              />
            </li>
            <li class="header__li-nav">
              <Link to="/gallery" class="header__nav-link">
                Gallery
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/gallery" ? "60%" : "0" }}
              />
            </li>
            <li class="header__li-nav">
              <Link to="pricing" class="header__nav-link">
                Pricing
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/pricing" ? "60%" : "0" }}
              />
            </li>
            <li class="header__li-nav">
              <Link to="contact" class="header__nav-link">
                Contact
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/contact" ? "60%" : "0" }}
              />
            </li>
          </ul>
          <div class="header__nav-networks">
            <a
              class="header__nav-networks-link"
              href="https://www.facebook.com/murphygardens1/"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <img class="header__nav-logo" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #2d652c;
  width: 0%;
  position: absolute;
  bottom: -60%;
  left: 20%;
  z-index: 2000;
`;

export default Header;
