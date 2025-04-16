import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface SlidesContextType {
  currentSlide: number;
  totalSlides: number;
  slideIds: string[];
  goToSlide: (direction: number | "next" | "prev") => void;
}

const SlidesContext = createContext<SlidesContextType | undefined>(undefined);

// Slide IDs in order of presentation
const slideIds = [
  "introduction",
  "arrays",
  "linked-lists",
  "stacks-queues",
  "trees",
  "hash-tables",
  "graphs",
  "summary",
];

interface SlidesProviderProps {
  children: ReactNode;
}

export function SlidesProvider({ children }: SlidesProviderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slideIds.length;

  const goToSlide = useCallback((direction: number | "next" | "prev") => {
    if (typeof direction === "number") {
      if (direction >= 0 && direction < totalSlides) {
        setCurrentSlide(direction);
      }
    } else if (direction === "next" && currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (direction === "prev" && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide, totalSlides]);

  return (
    <SlidesContext.Provider
      value={{
        currentSlide,
        totalSlides,
        slideIds,
        goToSlide,
      }}
    >
      {children}
    </SlidesContext.Provider>
  );
}

export function useSlidesContext() {
  const context = useContext(SlidesContext);
  if (context === undefined) {
    throw new Error("useSlidesContext must be used within a SlidesProvider");
  }
  return context;
}
