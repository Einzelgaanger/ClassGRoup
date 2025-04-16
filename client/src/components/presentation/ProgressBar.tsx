import { useSlidesContext } from "@/hooks/use-slides";
import { motion } from "framer-motion";

export function ProgressBar() {
  const { currentSlide, totalSlides } = useSlidesContext();
  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="w-full h-1 bg-gray-100">
      <motion.div
        className="h-full bg-accent"
        initial={{ width: 0 }}
        animate={{ width: `${progressPercentage}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
