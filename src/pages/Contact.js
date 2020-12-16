import strimmer from "../images/strimmer.jpg";
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
      ></ContactBg>
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
  height: 450px;
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
