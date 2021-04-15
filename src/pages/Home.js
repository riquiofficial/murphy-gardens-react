//packages
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import Features from "../components/Features";
import ScrollTop from "../components/ScrollTop";
import { pageAnimation } from "../animations";
//images
import garden1 from "../images/garden-1.webp";
import garden2 from "../images/garden-2.webp";
import garden3 from "../images/garden-3.webp";
import background from "../images/image2.webp";

const Home = () => {
  return (
    <motion.div
      className="main"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <section className="main">
        <MainBg />
        <div className="section-about">
          <h1 className="main__services-heading">Welcome to Murphy Gardens</h1>
          <div className="row">
            <div className="col-1-of-2">
              <h2 className="main__services-text--second-heading">
                Professional gardeners
              </h2>
              <p className="main__services-paragraph">
                Murphy Gardens provide a range of gardening services from
                regular commercial maintenance visits to small landscaping jobs.
                Every job is performed to the highest quality and very
                reasonably priced. We work tirelessly throughout the year. See
                our current services{" "}
                <a href="#section-features" className="btn-text">
                  below &#8595;
                </a>
              </p>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={garden1}
                  alt="garden 1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={garden2}
                  alt="garden 2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={garden3}
                  alt="garden 3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <ScrollTop />
    </motion.div>
  );
};

const MainBg = styled(motion.div)`
  width: 100%;
  height: 70vh;
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
