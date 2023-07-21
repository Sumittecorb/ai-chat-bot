"use client";
import React, { FC } from "react";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";
const Animation: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      {" "}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animation;
