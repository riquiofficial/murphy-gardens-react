import logoLarge from "../images/Logo large.png";
import phone from "../images/iconmonstr-smartphone-7 1.svg";
import time from "../images/iconmonstr-time-3 1.svg";
import facebook from "../images/iconmonstr-facebook-6.svg";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header class="header" id="header">
      <div class="header__logo-large">
        <img
          class="header__logo-large--img"
          src={logoLarge}
          alt="Murphy Gardens Logo"
        />
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
          <a href="contact.html" class="btn">
            GET A QUOTE
          </a>
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
                <a href="/index.html" class="navigation__link">
                  home
                </a>
              </li>
              <li class="navigation__item">
                <a href="/about.html" class="navigation__link">
                  About
                </a>
              </li>
              <li class="navigation__item">
                <a href="/pricing.html" class="navigation__link">
                  pricing
                </a>
              </li>
              <li class="navigation__item">
                <a href="/gallery.html" class="navigation__link">
                  gallery
                </a>
              </li>
              <li class="navigation__item">
                <a href="/contact.html" class="navigation__link">
                  contact
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
              <a href="/index.html" class="header__nav-link">
                Home
              </a>
            </li>
            <li class="header__li-nav">
              <a href="/about.html" class="header__nav-link">
                About
              </a>
            </li>
            <li class="header__li-nav">
              <a href="gallery.html" class="header__nav-link">
                Gallery
              </a>
            </li>
            <li class="header__li-nav">
              <a href="pricing.html" class="header__nav-link">
                Pricing
              </a>
            </li>
            <li class="header__li-nav">
              <a href="contact.html" class="header__nav-link">
                Contact
              </a>
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

export default Header;
