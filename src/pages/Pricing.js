import hedge from "../images/hedge.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <main>
      <PricingBg>
        <h1 class="main__services-heading-2">Pricing</h1>
      </PricingBg>
      <div class="main__services">
        <div class="main__services-text">
          <div class="row">
            <h2 class="main__services-text--second-heading">
              Our price varies from job to job
            </h2>
            <p class="main__services-paragraph">
              We charge at a very reasonable rate and always deliver any
              services to the highest standard. Please get in contact with us to{" "}
              <Link to="/contact" class="btn-text">
                learn more!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

const PricingBg = styled.div`
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
