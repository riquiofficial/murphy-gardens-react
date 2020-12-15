import { Link } from "react-router-dom";
import { pageAnimation } from "../animations";
import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <motion.div
      className="main"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="row">
        <div className="main__services">
          <div className="main__services-text">
            <h2 className="main__services-text--second-heading">Thank You!</h2>
            <p className="main__services-paragraph">
              Your form has been submitted.
            </p>
            <p className="main__services-paragraph">
              Back{" "}
              <Link to="/" className="btn-text">
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Thanks;
