//packages
import styled from "styled-components";
//components
import Features from "../components/Features";
//images
import garden1 from "../images/garden-1.webp";
import garden2 from "../images/garden-2.webp";
import garden3 from "../images/garden-3.webp";
import background from "../images/image2.webp";

const Home = () => {
  return (
    <>
      <section class="main">
        <MainBg />
        <div class="section-about">
          <h1 class="main__services-heading">Welcome to Murphy Gardens</h1>
          <div class="row">
            <div class="col-1-of-2">
              <h2 class="main__services-text--second-heading">
                Professional gardeners
              </h2>
              <p class="main__services-paragraph">
                Murphy Gardens provide a range of gardening services from
                regular commercial maintenance visits to small landscaping jobs.
                Every job is performed to the highest quality and very
                reasonably priced. We work tirelessly throughout the winter. See
                our current winter services{" "}
                <a href="#section-features" class="btn-text">
                  below &#8595;
                </a>
              </p>
            </div>
            <div class="col-1-of-2">
              <div class="composition">
                <img
                  src={garden1}
                  alt="garden 1"
                  class="composition__photo composition__photo--p1"
                />
                <img
                  src={garden2}
                  alt="garden 2"
                  class="composition__photo composition__photo--p2"
                />
                <img
                  src={garden3}
                  alt="garden 3"
                  class="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
    </>
  );
};

const MainBg = styled.div`
  width: 100%;
  height: 450px;
  background-image: linear-gradient(
      180deg,
      rgba(2, 90, 0, 0.175) 78.65%,
      rgba(0, 0, 0, 0.665) 99.99%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
`;

export default Home;
