export const hamburgerAnimation = {
  exitAnimation: { rotate: 0, y: 0 },
  transition: { duration: 0.3 },
  createMiddleLineAnimation: (isOpen) => isOpen ? { opacity: 0 } : { opacity: 1 },
  createEntryAnimation: (isFirstLine) =>
    isFirstLine ? { rotate: 45, y: 18 } : { rotate: -45, y: -18 },
};
