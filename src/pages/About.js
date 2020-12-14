import aboutBg from "../images/about.jpg";
import userLogo from "../images/iconmonstr-user-5-240.png";
import styled from "styled-components";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="main">
      <div class="container">
        <AboutBg>
          <h1 class="main__services-heading-about">About Murphy Gardens</h1>
          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src={userLogo} alt="user logo" class="story__img" />
                <figcaption class="story__caption">Clare Mansewood</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small text-green">
                  "The garden looks great all year round"
                </h3>
                <p>
                  "Iain has been doing my garden for a number of years now and
                  what a difference it has made. The garden looks great all year
                  round. Iain offers a very professional and efficient service.
                  I highly recommend Murphy gardens for your garden maintenance"
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src={userLogo} alt="user logo" class="story__img" />
                <figcaption class="story__caption">
                  Gillian, Barrhead
                </figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small text-green">
                  "I highly recommend Murphy Gardens"
                </h3>
                <p>
                  "They have been keeping my garden immaculate with weekly
                  maintenance for over 2 years and always show up on time. They
                  have also completed some bigger jobs when asked. If you're
                  looking for a gardener then Murphy Gardens are fab!"
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src={userLogo} alt="user logo" class="story__img" />
                <figcaption class="story__caption">Francine, Mearns</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small text-green">
                  "Turn up every 2 weeks hail, rain or shine"
                </h3>
                <p>
                  "Iain (Murphy Gardens) has been taking great care of my garden
                  since he started his business. He is super dependable, turns
                  up every 2 weeks hail, rain or shine. He has also carried out
                  other jobs for me, gutter cleaning, power washing and have
                  been delighted with his work. Highly recommended!!!"
                </p>
              </div>
            </div>
          </div>
        </AboutBg>
      </div>

      <div class="row">
        <div class="main__services">
          <div class="main__services-text">
            <h2 class="main__services-text--second-heading">About us</h2>
            <p class="main__services-paragraph">
              Murphy Gardens are a fully licensed and insured garden maintenance
              company based in Glasgow, Scotland. We have a wealth of experience
              from regular tidy-ups to large scale clearances. We also work with
              both commercial and domestic customers.
            </p>
            <p class="main__services-paragraph">
              We are currently running our winter services which can be found{" "}
              <Link to="/#section-features" class="btn-text">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutBg = styled.div`
  width: 100%;
  height: 140rem;
  background-image: linear-gradient(
      179.99deg,
      rgba(0, 0, 0, 0.75) 99.97%,
      rgba(12, 155, 12, 0.15) 99.98%,
      rgba(17, 87, 17, 0) 99.99%
    ),
    url(${aboutBg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center top;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width: 452px) {
    .about__bg {
      height: 160rem;
    }
  }
`;

export default About;
