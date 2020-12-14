import strimmer from "../images/strimmer.jpg";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <ContactBg>
        <div class="contact-form">
          <div class="contact">
            <form
              action="/thanks.html"
              class="contact__form"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
            >
              <div class="form__group">
                <input
                  class="form__input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
                <label class="form__label" for="name">
                  Your Name &uarr;
                </label>
              </div>
              <div class="form__group">
                <input
                  class="form__input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <label class="form__label" for="email">
                  Your Email &uarr;
                </label>
              </div>
              <textarea
                class="form__input"
                name="message"
                placeholder="Your message"
                required
              ></textarea>
              <label class="form__label" for="message">
                Your Message &uarr;
              </label>
              <div data-netlify-recaptcha="true"></div>
              <button type="submit" class="btn--send">
                Send
              </button>
            </form>
          </div>
        </div>
      </ContactBg>
      <section class="contact__us">
        <div class="main__services">
          <div class="row">
            <h1 class="main__services-heading">Contact Murphy Gardens</h1>
            <div class="main__services-text">
              <h2 class="main__services-text--second-heading">
                Leave Us a Message{" "}
              </h2>
              <p class="main__services-paragraph">
                We will get back to you as soon as possible!
              </p>
              <p class="main__services-paragraph">
                If your matter is urgent, contact us on{" "}
                <a class="contact-anchor" href="tel:07470359110">
                  07470 359110
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ContactBg = styled.div`
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
