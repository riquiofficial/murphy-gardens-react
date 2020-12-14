import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import strimmer from "../images/strimmer.jpg";

const Features = () => {
  return (
    <StyledFeatures id="section-features">
      <Link className="contact-anchor" to="/contact">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon im im-leaf"></i>

              <h3 className="heading-tertiary u-margin-bottom-small">
                Final Clearances/Cutbacks
              </h3>
              <p className="feature-box__text">
                Removal of overgrown vegetation
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon im im-diamond-o"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Pressure Washing
              </h3>
              <p className="feature-box__text">
                All of your pathways, driveways, decking and garden slabs,
                gleaming
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon im im-drop"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Snow/Ice Removal
              </h3>
              <p className="feature-box__text">
                No more hazardous ice to block you so you can go about your day
                worry free
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon im im-shield"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Gutter Clearing
              </h3>
              <p className="feature-box__text">
                Clearing gutters regularly is essential to prevent dampness and
                damage
              </p>
            </div>
          </div>
        </div>
      </Link>
      <p>
        <a href="#header" className="btn-text-top">
          Back to top &#8593;
        </a>
      </p>
    </StyledFeatures>
  );
};

const StyledFeatures = styled.div`
  margin-top: 25rem;
  padding: 20rem 0;
  background-image: linear-gradient(
      to right bottom,
      rgba(32, 158, 46, 0.8),
      rgba(23, 110, 32, 0.8)
    ),
    url(${strimmer});
  background-size: cover;
  background-position: center center;
`;

export default Features;
