import NavBar from "@/app/components/NavBar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import ItenariesCard from "./components/ItenariesCard";
import Recommended from "./components/Recommended";
import Trending from "./components/Trending";
import LowBudget from "./components/LowBudget";

const Itenaries = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      <NavBar />

      <div className="flex flex-col items-center justify-center mt-10 space-y-4 z-10 relative">
        <Recommended />
        <Trending />
        <LowBudget />
      </div>
    </div>
  );
};

export default Itenaries;
