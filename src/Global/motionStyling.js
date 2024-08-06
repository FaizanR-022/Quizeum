const motionSlide = {
  initial: { opacity: 0, x: +200 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4 },
  exit: { opacity: 0 },
};

const motionFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
  exit: { opacity: 0 },
};

export { motionSlide, motionFade };
