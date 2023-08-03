import { motion, Variants } from "framer-motion";
import React from "react";

const introPictureVariants: Variants = {
  hide: {
    opacity: 0,
    x: 200,
    
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};
const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
  // visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  // hidden: { opacity: 0, scale: 0 }
};
export const LeftToRightAnimate = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial="hide"
      whileInView="show"
      exit="hide"
      animate={{ scale: 1 }}
      viewport={{ once: true }}
      variants={introHeaderVariants}
    >
      {children}
    </motion.div>
  );
};

export const RightToLeftAnimate = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <motion.div
      className={className}
      initial="hide"
      whileInView="show"
      exit="hide"
      viewport={{ once: true }}
      variants={introPictureVariants}
    >
      {children}
    </motion.div>
  );
};
