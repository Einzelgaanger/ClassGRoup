import { useEffect } from "react";
import { SlidesContainer } from "@/components/presentation/SlidesContainer";
import { useSlidesContext, SlidesProvider } from "@/hooks/use-slides";

function HomeContent() {
  const { goToSlide } = useSlidesContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToSlide("next");
      } else if (e.key === "ArrowLeft") {
        goToSlide("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToSlide]);

  return (
    <div className="font-inter min-h-screen bg-[#f9f9f9] relative">
      <SlidesContainer />
    </div>
  );
}

export default function Home() {
  return (
    <SlidesProvider>
      <HomeContent />
    </SlidesProvider>
  );
}
