import { Introduction } from "./slides/Introduction";
import { Arrays } from "./slides/Arrays";
import { LinkedLists } from "./slides/LinkedLists";
import { StacksQueues } from "./slides/StacksQueues";
import { Trees } from "./slides/Trees";
import { HashTables } from "./slides/HashTables";
import { Graphs } from "./slides/Graphs";
import { Summary } from "./slides/Summary";
import { useSlidesContext } from "@/hooks/use-slides";
import { motion } from "framer-motion";

export function SlidesContainer() {
  const { currentSlide, totalSlides, goToSlide } = useSlidesContext();
  
  // Generate more icons for a richer animated background
  const backgroundIcons = Array(30).fill(null).map((_, i) => {
    const icons = ["⚙️", "🔄", "📊", "🔍", "🔗", "📚", "🌲", "📋", "🔢", "📈", "🧩", "💾", "🔌", "💻", "🖥️", "⚡"];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const randomTop = Math.floor(Math.random() * 80) + 10; // Keep icons away from top and bottom
    const randomLeft = Math.floor(Math.random() * 80) + 10; // Keep icons away from edges
    const randomSize = Math.floor(Math.random() * 12) + 8; // 8px to 20px
    const randomOpacity = (Math.random() * 0.08) + 0.02; // 0.02 to 0.10
    const randomDuration = 5 + Math.random() * 20; // 5-25 seconds
    const randomDelay = Math.random() * 5;
    
    return (
      <motion.div 
        key={i}
        className="absolute select-none pointer-events-none z-0"
        style={{
          top: `${randomTop}%`,
          left: `${randomLeft}%`,
          fontSize: `${randomSize}px`,
          opacity: randomOpacity,
          color: ["#0047AB", "#FFD700", "#00A86B"][Math.floor(Math.random() * 3)]
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, Math.random() > 0.5 ? 10 : -10, 0],
          scale: [1, Math.random() * 0.3 + 0.7, 1]
        }}
        transition={{
          duration: randomDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: randomDelay
        }}
      >
        {randomIcon}
      </motion.div>
    );
  });
  
  return (
    <div className="slides-container relative min-h-screen bg-white">
      {/* Animated background with data structure icons */}
      <div className="fixed inset-0 overflow-hidden z-0 bg-white">
        {backgroundIcons}
      </div>
      
      {/* Date display - only on first slide */}
      {currentSlide === 0 && (
        <div className="fixed top-2 left-4 text-sm font-bold text-[#0047AB] bg-white bg-opacity-80 px-2 py-1 rounded-md z-50">
          April 16, 2025
        </div>
      )}
      
      {/* Presenter names - made larger and more prominent */}
      <div className="fixed top-2 right-4 text-sm md:text-md font-bold text-black px-2 py-1 rounded-md z-50 bg-white bg-opacity-90">
        Janice • Zamzam • Mukisa • Alfred
      </div>
      
      {/* Navigation buttons - only on slides after the first one */}
      {currentSlide > 0 && (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center gap-2 md:gap-4 z-50 px-4">
          <button
            id="prev-btn"
            onClick={() => goToSlide("prev")}
            className="flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black text-white hover:bg-opacity-80 text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <div className="bg-white text-black font-bold px-2 py-1 md:px-3 md:py-1 rounded-full shadow text-sm md:text-base">
            {currentSlide + 1} / {totalSlides}
          </div>
          
          <button
            id="next-btn"
            onClick={() => goToSlide("next")}
            className={`flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#0047AB] text-white text-sm md:text-base ${
              currentSlide === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-80"
            }`}
            disabled={currentSlide === totalSlides - 1}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      
      <div className="relative z-10 pb-20">
        <Introduction />
        <Arrays />
        <LinkedLists />
        <StacksQueues />
        <Trees />
        <HashTables />
        <Graphs />
        <Summary />
      </div>
    </div>
  );
}
