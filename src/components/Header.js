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
    <header className="header" id="header">
      <div className="header__logo-large">
        <Link to="/">
          <img
            className="header__logo-large--img"
            src={logoLarge}
            alt="Murphy Gardens Logo"
          />
        </Link>
      </div>
      <div className="header__info">
        <div className="header__hours">
          <img className="header__icon" src={time} alt="hours" />
          <p className="header__hours-text">Mon - Sat 9.00 - 18.00</p>
        </div>
        <div className="header__contact">
          <a className="contact-anchor" href="tel:07470359110">
            <img
              className="header__icon header__icon-phone"
              src={phone}
              alt="contact details"
            />
            <p className="header__contact-text-phone">(+44) 07470 359110</p>
          </a>
          <a className="contact-anchor" href="mailto:murphygardens1@gmail.com">
            <p className="header__contact-text-email">
              murphygardens1@gmail.com
            </p>
          </a>
        </div>
        <div className=".btn">
          <Link to="/contact" className="btn">
            GET A QUOTE
          </Link>
        </div>
      </div>
      <div className="mobile__nav">
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="/" className="navigation__link">
                  Home
                </a>
              </li>
              <li className="navigation__item">
                <a href="/about" className="navigation__link">
                  About
                </a>
              </li>
              <li className="navigation__item">
                <a href="/pricing" className="navigation__link">
                  Pricing
                </a>
              </li>
              <li className="navigation__item">
                <a href="/gallery" className="navigation__link">
                  Gallery
                </a>
              </li>
              <li className="navigation__item">
                <a href="/contact" className="navigation__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__nav">
        <div className="header__nav-inside">
          <ul className="header__nav-items">
            <li className="header__li-nav">
              <Link to="/" className="header__nav-link">
                Home
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/" ? "60%" : "0" }}
              />
            </li>
            <li className="header__li-nav">
              <Link to="/about" className="header__nav-link">
                About
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/about" ? "60%" : "0" }}
              />
            </li>
            <li className="header__li-nav">
              <Link to="/gallery" className="header__nav-link">
                Gallery
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/gallery" ? "60%" : "0" }}
              />
            </li>
            <li className="header__li-nav">
              <Link to="pricing" className="header__nav-link">
                Pricing
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/pricing" ? "60%" : "0" }}
              />
            </li>
            <li className="header__li-nav">
              <Link to="contact" className="header__nav-link">
                Contact
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0" }}
                animate={{ width: pathname === "/contact" ? "60%" : "0" }}
              />
            </li>
          </ul>
          <div className="header__nav-networks">
            <a
              className="header__nav-networks-link"
              href="https://www.facebook.com/murphygardens1/"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <img className="header__nav-logo" src={logo} alt="logo" />
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
