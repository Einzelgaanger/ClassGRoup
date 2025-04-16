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
    <div className="font-inter min-h-screen bg-[#f8f9fa] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h4v4H0V0zm8%200h4v4H8V0zm8%200h4v4h-4V0zM0%208h4v4H0V8zm8%200h4v4H8V8zm8%200h4v4h-4V8zM0%2016h4v4H0v-4zm8%200h4v4H8v-4zm8%200h4v4h-4v-4z%22%20fill%3D%22%230047AB%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-50 pointer-events-none z-0"></div>
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
