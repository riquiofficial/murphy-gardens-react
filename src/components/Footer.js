import logo from "../images/Logo large.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Full logo" className="footer__logo" />
      </div>

      <div className="footer__navigation">
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/contact" className="footer__link">
              Contact Us
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/gallery" className="footer__link">
              Gallery
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/pricing" className="footer__link">
              Pricing
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/about" className="footer__link">
              about
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright-text">
          Built by{" "}
          <a href="https://www.rqwebdev.com" className="footer__link">
            RQ Web Development
          </a>{" "}
          for &#169; Murphy Gardens 2020
        </p>
      </div>
    </div>
  );
};

export default Footer;
