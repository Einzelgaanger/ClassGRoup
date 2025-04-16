import { ReactNode, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useSlidesContext } from "@/hooks/use-slides";

interface SlideProps {
  id: string;
  children: ReactNode;
}

export function Slide({ id, children }: SlideProps) {
  const { currentSlide, slideIds } = useSlidesContext();
  const slideIndex = slideIds.indexOf(id);
  const isActive = currentSlide === slideIndex;
  const slideRef = useRef<HTMLDivElement>(null);

  // Scroll to top when slide becomes active
  useEffect(() => {
    if (isActive && slideRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isActive]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.3 } 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.1 } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 } 
    }
  };

  return (
    <motion.section
      ref={slideRef}
      id={id}
      className={`slide min-h-screen flex flex-col justify-start pt-12 pb-24 px-4 md:px-8 ${
        isActive ? "active-slide" : "hidden-slide"
      }`}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      exit="exit"
      variants={variants}
      style={{ 
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "auto" : "none",
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0
      }}
    >
      <div className="container mx-auto overflow-x-auto">
        {children}
      </div>
    </motion.section>
  );
}
