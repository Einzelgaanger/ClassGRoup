import { Introduction } from "./slides/Introduction";
import { Arrays } from "./slides/Arrays";
import { LinkedLists } from "./slides/LinkedLists";
import { StacksQueues } from "./slides/StacksQueues";
import { Trees } from "./slides/Trees";
import { HashTables } from "./slides/HashTables";
import { Graphs } from "./slides/Graphs";
import { Summary } from "./slides/Summary";
import { useSlidesContext } from "@/hooks/use-slides";

export function SlidesContainer() {
  const { currentSlide, totalSlides, goToSlide } = useSlidesContext();
  
  // Icons for the background pattern - data structure related symbols
  const backgroundIcons = Array(20).fill(null).map((_, i) => {
    const icons = ["⚙️", "🔄", "📊", "🔍", "🔗", "📚", "🌲", "📋", "🔢", "📈"];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const randomTop = Math.floor(Math.random() * 100);
    const randomLeft = Math.floor(Math.random() * 100);
    const randomSize = Math.floor(Math.random() * 16) + 10; // 10px to 26px
    const randomOpacity = (Math.random() * 0.08) + 0.02; // 0.02 to 0.1
    
    return (
      <div 
        key={i}
        className="absolute select-none pointer-events-none z-0 text-[#0047AB]"
        style={{
          top: `${randomTop}%`,
          left: `${randomLeft}%`,
          fontSize: `${randomSize}px`,
          opacity: randomOpacity,
          transform: `rotate(${Math.random() * 360}deg)`
        }}
      >
        {randomIcon}
      </div>
    );
  });
  
  return (
    <div className="slides-container relative">
      {/* Background pattern with data structure icons */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {backgroundIcons}
      </div>
      
      {/* Date display */}
      <div className="fixed top-2 left-4 text-sm font-bold text-[#0047AB] bg-white bg-opacity-80 px-2 py-1 rounded-md z-50">
        April 16, 2025
      </div>
      
      {/* Presenter names */}
      <div className="fixed top-2 right-4 text-sm font-bold text-[#0047AB] bg-white bg-opacity-80 px-2 py-1 rounded-md z-50">
        Janice • Zamzam • Mukisa • Alfred
      </div>
      
      {/* Navigation buttons */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center gap-4 z-50">
        <button
          id="prev-btn"
          onClick={() => goToSlide("prev")}
          className={`flex items-center px-4 py-2 rounded-full bg-black text-white ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-80"
          }`}
          disabled={currentSlide === 0}
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
