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
  const backgroundIcons = Array(60).fill(null).map((_, i) => {
    const icons = ["⚙️", "🔄", "📊", "🔍", "🔗", "📚", "🌲", "📋", "🔢", "📈", "🧩", "💾", "🔌", "💻", "🖥️", "⚡"];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const randomTop = Math.floor(Math.random() * 100);
    const randomLeft = Math.floor(Math.random() * 100);
    const randomSize = Math.floor(Math.random() * 16) + 10; // 10px to 26px
    const randomOpacity = (Math.random() * 0.12) + 0.04; // 0.04 to 0.16
    const randomDuration = 5 + Math.random() * 20; // 5-25 seconds
    const randomDelay = Math.random() * 5; // 0-5 seconds delay
    
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
          y: [0, -30, 0],
          rotate: [0, Math.random() > 0.5 ? 15 : -15, 0],
          scale: [1, Math.random() * 0.4 + 0.8, 1]
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
    <div className="slides-container relative">
      {/* Animated background with data structure icons */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {backgroundIcons}
      </div>
      
      {/* Date display */}
      <div className="fixed top-2 left-4 text-sm font-bold text-[#0047AB] bg-white bg-opacity-80 px-2 py-1 rounded-md z-50">
        April 16, 2025
      </div>
      
      {/* Presenter names - made larger and more prominent */}
      <div className="fixed top-2 right-4 text-md md:text-lg font-bold bg-gradient-to-r from-[#0047AB] via-[#FFD700] to-[#00A86B] text-transparent bg-clip-text px-3 py-2 rounded-md z-50 bg-white bg-opacity-90">
        Janice • Zamzam • Mukisa • Alfred
      </div>
      
      {/* Get Started button - only on first slide */}
      {currentSlide === 0 && (
        <div className="fixed bottom-10 left-0 right-0 flex justify-center items-center z-50">
          <motion.button
            onClick={() => goToSlide("next")}
            className="flex items-center justify-center px-8 py-4 rounded-full bg-[#0047AB] text-white text-xl font-bold shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 71, 171, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10,
              delay: 0.5 
            }}
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      )}
      
      {/* Navigation buttons - only on slides after the first one */}
      {currentSlide > 0 && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center gap-4 z-50">
          <button
            id="prev-btn"
            onClick={() => goToSlide("prev")}
            className="flex items-center px-4 py-2 rounded-full bg-black text-white hover:bg-opacity-80"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <div className="bg-white text-black font-bold px-3 py-1 rounded-full shadow">
            {currentSlide + 1} / {totalSlides}
          </div>
          
          <button
            id="next-btn"
            onClick={() => goToSlide("next")}
            className={`flex items-center px-4 py-2 rounded-full bg-[#0047AB] text-white ${
              currentSlide === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-80"
            }`}
            disabled={currentSlide === totalSlides - 1}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      
      <div className="pb-20">
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
