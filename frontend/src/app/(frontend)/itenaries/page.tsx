import NavBar from "@/app/components/NavBar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

const Itenaries = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      <NavBar />

      <div className="flex justify-center mt-10 space-x-4 z-10 relative">
        Itenaries
      </div>
    </div>
  );
};

export default Itenaries;
