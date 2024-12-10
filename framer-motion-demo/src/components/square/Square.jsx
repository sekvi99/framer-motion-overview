import React from "react";
import { motion } from "framer-motion";
import { squareAnimation } from "../../motions/square.motion";
import "./Square.css";

const Square = () => {
  return (
    <motion.div
      className="square"
      animate={squareAnimation.animate}
      transition={squareAnimation.transition}
    ></motion.div>
  );
};

export default Square;
