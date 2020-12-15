export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: -500,
    transition: {
      duration: 0.5,
    },
  },
};
