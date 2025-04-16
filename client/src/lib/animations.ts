import { Variants } from "framer-motion";

// Basic fade-in animation
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

// Fade in with y-axis movement
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

// Fade in with x-axis movement from left
export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: 30, transition: { duration: 0.4 } }
};

// Fade in with x-axis movement from right
export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.4 } }
};

// Scale animation
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 1.1, transition: { duration: 0.3 } }
};

// Staggered children animation container
export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  },
  exit: { opacity: 0 }
};

// Child item for staggered animations
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
};

// Path drawing animation for SVG elements
export const drawPath: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { duration: 1, ease: "easeInOut" },
      opacity: { duration: 0.3 }
    }
  },
  exit: { pathLength: 0, opacity: 0 }
};

// Continuous floating animation
export const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

// Bounce animation
export const bounce: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 0.8, 
      ease: "easeOut", 
      repeat: Infinity
    }
  }
};

// Rotate animation
export const rotate: Variants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: 360,
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: "linear" 
    }
  }
};

// Pulse animation
export const pulse: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1],
    transition: { 
      duration: 1.5, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

// Animation for highlighting elements
export const highlight: Variants = {
  initial: { backgroundColor: "rgba(255, 255, 255, 0)" },
  animate: { 
    backgroundColor: ["rgba(255, 255, 255, 0)", "rgba(75, 86, 210, 0.2)", "rgba(255, 255, 255, 0)"],
    transition: { 
      duration: 1.5, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

// Card or element hover effect
export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  whileTap: { scale: 0.98 }
};

// Arrow movement animation for directed edges or flows
export const arrowFlow: Variants = {
  initial: { x: 0 },
  animate: { 
    x: [0, 10, 0],
    transition: { 
      duration: 1.5, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

// Element appear sequence for lists or steps
export const listItemAppear = (index: number): Variants => ({
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.4, 
      delay: 0.1 * index 
    }
  },
  exit: { opacity: 0, x: 20 }
});

// Typewriter effect for text
export const typewriter = (text: string) => {
  const characters = Array.from(text);
  return {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
};

// Character animation for typewriter effect
export const typewriterCharacter: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};
