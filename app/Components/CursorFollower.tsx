"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  FollowerComponent: React.ReactNode;
}

const CursorFollower = ({ children, FollowerComponent }: Props) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {children}
      <AnimatePresence>
        {isHovering && FollowerComponent && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut" }}
            style={{
              position: "fixed",
              left: cursorPosition.x,
              top: cursorPosition.y,
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
            }}
          >
            {FollowerComponent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CursorFollower;
