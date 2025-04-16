import { useSlidesContext } from "@/hooks/use-slides";
import { ProgressBar } from "./ProgressBar";

export function NavigationBar() {
  const { currentSlide, totalSlides, goToSlide } = useSlidesContext();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h2 className="font-bold text-primary text-xl md:text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Algorithms & Data Structures
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => goToSlide("prev")}
            className={`px-3 py-1 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors ${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentSlide === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          <span className="text-gray-800">
            {currentSlide + 1}/{totalSlides}
          </span>
          <button
            onClick={() => goToSlide("next")}
            className={`px-3 py-1 rounded-md bg-primary text-white hover:bg-opacity-90 transition-colors ${
              currentSlide === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentSlide === totalSlides - 1}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
}
