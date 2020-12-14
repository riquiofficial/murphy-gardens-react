import styled from "styled-components";
//images
import bench from "../images/bench.jpg";
//components
import Card from "../components/Card";
import ScrollTop from "../components/ScrollTop";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const elements = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const Gallery = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <GalleryBG>
        <h1 className="main__services-heading-2">Gallery</h1>
      </GalleryBG>

      <div className="main__services-text--second-heading margin-bottom-small margin-left-small">
        Flip the cards to see the 'after' transformation photos!
      </div>

      <div className="row">
        {elements[0].map((value) => {
          return (
            <div className="col-1-of-3" key={value}>
              <Card id={value} />
            </div>
          );
        })}
      </div>
      <div className="row">
        {elements[1].map((value) => {
          return (
            <div className="col-1-of-3" key={value}>
              <Card id={value} />
            </div>
          );
        })}
      </div>
      <div className="row">
        {elements[2].map((value) => {
          return (
            <div className="col-1-of-3" key={value}>
              <Card id={value} />
            </div>
          );
        })}
      </div>
      <ScrollTop />
    </motion.div>
  );
};

const GalleryBG = styled.div`
  width: 100%;
  height: 450px;
  background-image: linear-gradient(
      180deg,
      rgba(2, 90, 0, 0.175) 78.65%,
      rgba(0, 0, 0, 0.665) 99.99%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${bench});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center top;
`;

export default Gallery;
