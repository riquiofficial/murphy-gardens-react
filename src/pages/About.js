import aboutBg from "../images/about.webp";
import userLogo from "../images/iconmonstr-user-5-240.png";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const About = () => {
  return (
    <motion.div className="main" exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <div className="container">
        <AboutBg>
          <h1 className="main__services-heading-about">About Murphy Gardens</h1>
          <div className="row" style={{ marginBottom: "8rem" }}>
            <div className="story">
              <figure className="story__shape">
                <img src={userLogo} alt="user logo" className="story__img" />
                <figcaption className="story__caption">Clare Mansewood</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small text-green">"The garden looks great all year round"</h3>
                <p>
                  "Iain has been doing my garden for a number of years now and what a difference it has made. The garden looks great all year round. Iain offers a
                  very professional and efficient service. I highly recommend Murphy gardens for your garden maintenance"
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "8rem" }}>
            <div className="story">
              <figure className="story__shape">
                <img src={userLogo} alt="user logo" className="story__img" />
                <figcaption className="story__caption">Gillian, Barrhead</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small text-green">"I highly recommend Murphy Gardens"</h3>
                <p>
                  "They have been keeping my garden immaculate with weekly maintenance for over 2 years and always show up on time. They have also completed some
                  bigger jobs when asked. If you're looking for a gardener then Murphy Gardens are fab!"
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "4rem" }}>
            <div className="story">
              <figure className="story__shape">
                <img src={userLogo} alt="user logo" className="story__img" />
                <figcaption className="story__caption">Francine, Mearns</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small text-green">"Turn up every 2 weeks hail, rain or shine"</h3>
                <p>
                  "Iain (Murphy Gardens) has been taking great care of my garden since he started his business. He is super dependable, turns up every 2 weeks hail,
                  rain or shine. He has also carried out other jobs for me, gutter cleaning, power washing and have been delighted with his work. Highly
                  recommended!!!"
                </p>
              </div>
            </div>
          </div>
        </AboutBg>
      </div>

      <div className="row">
        <div className="main__services">
          <div className="main__services-text">
            <h2 className="main__services-text--second-heading">About us</h2>
            <p className="main__services-paragraph">
              Murphy Gardens are a fully licensed and insured garden maintenance company based in Glasgow, Scotland. We have a wealth of experience from regular
              tidy-ups to large scale clearances. We also work with both commercial and domestic customers.
            </p>
            <p className="main__services-paragraph">
              Our current services can be found{" "}
              <a href="/#section-features" className="btn-text">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
      <ScrollTop />
    </motion.div>
  );
};

const AboutBg = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 0;
  background-image: linear-gradient(179.99deg, rgba(0, 0, 0, 0.75) 99.97%, rgba(12, 155, 12, 0.15) 99.98%, rgba(17, 87, 17, 0) 99.99%), url(${aboutBg});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  background-position: center top;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6rem;
  position: relative;
  z-index: 0;
  @media only screen and (max-width: 452px) {
    padding: 6rem 0;
    gap: 4rem;
  }
`;

export default About;
