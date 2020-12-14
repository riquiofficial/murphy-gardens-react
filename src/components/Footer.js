import logo from "../images/Logo large.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer__logo-box">
        <img src={logo} alt="Full logo" class="footer__logo" />
      </div>

      <div class="footer__navigation">
        <ul class="footer__list">
          <li class="footer__item">
            <Link to="/" class="footer__link">
              Home
            </Link>
          </li>
          <li class="footer__item">
            <a href="contact.html" class="footer__link">
              Contact Us
            </a>
          </li>
          <li class="footer__item">
            <Link to="/gallery" class="footer__link">
              Gallery
            </Link>
          </li>
          <li class="footer__item">
            <a href="/pricing.html" class="footer__link">
              Pricing
            </a>
          </li>
          <li class="footer__item">
            <Link to="/about" class="footer__link">
              about
            </Link>
          </li>
        </ul>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright-text">
          Built by{" "}
          <a href="https://www.rqwebdev.com" class="footer__link">
            RQ Web Development
          </a>{" "}
          for &#169; Murphy Gardens 2020
        </p>
      </div>
    </div>
  );
};

export default Footer;
