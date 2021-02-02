import strimmer from "../images/strimmer.webp";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Contact = () => {
  return (
    <>
      <ContactBg
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="contact-form">
          <div className="contact">
            <form
              className="contact__form"
              name="contact"
              data-netlify-recaptcha="true"
              method="post"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
                <label className="form__label" htmlFor="name">
                  Your Name &uarr;
                </label>
              </div>

              <div className="form__group">
                <input
                  className="form__input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
                <label className="form__label" htmlFor="email">
                  Your Email &uarr;
                </label>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  type="tel"
                  name="number"
                  placeholder="Your Phone Number"
                  pattern="[0-9]{11}"
                />
                <label className="form__label" htmlFor="number">
                  Your Phone Number &uarr;
                </label>
              </div>
              <br />
              <textarea
                className="form__input"
                name="message"
                placeholder="Your message"
                required
              ></textarea>
              <label className="form__label" htmlFor="message">
                Your Message &uarr;
              </label>

              <div data-netlify-recaptcha="true"></div>
              <button type="submit" className="btn--send">
                Send
              </button>
            </form>
          </div>
        </div>
      </ContactBg>
      <section className="contact__us">
        <div className="main__services">
          <div className="row">
            <h1 className="main__services-heading">Contact Murphy Gardens</h1>
            <div className="main__services-text">
              <h2 className="main__services-text--second-heading">
                Leave Us a Message at{" "}
                <a
                  href="mailto:murphygardens1@gmail.com"
                  className="contact-anchor2"
                >
                  murphygardens1@gmail.com
                </a>
              </h2>

              <p className="main__services-paragraph">
                We will get back to you as soon as possible!
              </p>
              <p className="main__services-paragraph">
                If your matter is urgent, contact us on{" "}
                <a className="contact-anchor2" href="tel:07470359110">
                  07470 359110
                </a>
              </p>
            </div>
          </div>
        </div>
        <ScrollTop />
      </section>
    </>
  );
};

const ContactBg = styled(motion.div)`
  width: 100%;
  height: 600px;
  background: linear-gradient(
      179.99deg,
      rgba(0, 0, 0, 0.75) 99.97%,
      rgba(0, 0, 0, 0.15) 99.98%,
      rgba(255, 255, 255, 0) 99.99%
    ),
    url(${strimmer});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center right;
`;

export default Contact;
