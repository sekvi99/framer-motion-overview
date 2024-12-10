import React, { useState } from "react";
import { motion } from "framer-motion";
import { hamburgerAnimation } from "../../motions/hamburger.motion";
import "./Hamburger.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="hamburger-container" onClick={toggleMenu}>
      <motion.div
        className="line"
        animate={
          isOpen
            ? hamburgerAnimation.createEntryAnimation(true)
            : hamburgerAnimation.exitAnimation
        }
        transition={hamburgerAnimation.transition}
      />
      <motion.div
        className="line"
        animate={hamburgerAnimation.createMiddleLineAnimation(isOpen)}
        transition={hamburgerAnimation.transition}
      />
      <motion.div
        className="line"
        animate={
          isOpen
            ? hamburgerAnimation.createEntryAnimation(false)
            : hamburgerAnimation.exitAnimation
        }
        transition={hamburgerAnimation.transition}
      />
    </div>
  );
};

export default Hamburger;
