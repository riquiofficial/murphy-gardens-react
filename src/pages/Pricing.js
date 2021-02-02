import hedge from "../images/hedge.webp";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Pricing = () => {
  return (
    <motion.main
      className="main"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <PricingBg>
        <h1 className="main__services-heading-2">Pricing</h1>
      </PricingBg>
      <div className="main__services">
        <div className="main__services-text">
          <div className="row">
            <h2 className="main__services-text--second-heading">
              Our price varies from job to job
            </h2>
            <p className="main__services-paragraph">
              We charge at a very reasonable rate and always deliver any
              services to the highest standard. Please get in contact with us to{" "}
              <Link to="/contact" className="btn-text">
                learn more!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ScrollTop />
    </motion.main>
  );
};

const PricingBg = styled(motion.div)`
  width: 100%;
  height: 450px;
  background-image: linear-gradient(
      179.99deg,
      rgba(0, 0, 0, 0.75) 99.97%,
      rgba(12, 155, 12, 0.15) 99.98%,
      rgba(17, 87, 17, 0) 99.99%
    ),
    url(${hedge});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
`;

export default Pricing;
