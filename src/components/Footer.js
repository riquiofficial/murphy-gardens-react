import logo from "../images/Logo large.png";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer__logo-box">
        <img src={logo} alt="Full logo" class="footer__logo" />
      </div>

      <div class="footer__navigation">
        <ul class="footer__list">
          <li class="footer__item">
            <a href="index.html" class="footer__link">
              Home
            </a>
          </li>
          <li class="footer__item">
            <a href="contact.html" class="footer__link">
              Contact Us
            </a>
          </li>
          <li class="footer__item">
            <a href="/gallery.html" class="footer__link">
              Gallery
            </a>
          </li>
          <li class="footer__item">
            <a href="/pricing.html" class="footer__link">
              Pricing
            </a>
          </li>
          <li class="footer__item">
            <a href="/about.html" class="footer__link">
              about
            </a>
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
