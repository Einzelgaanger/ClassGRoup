import { useEffect } from "react";
import { SlidesContainer } from "@/components/presentation/SlidesContainer";
import { NavigationBar } from "@/components/presentation/NavigationBar";
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
    <div className="font-inter bg-white min-h-screen">
      <NavigationBar />
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
