"use client";
import NavBar from "@/app/components/NavBar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Auth = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
      <div>
        <NavBar />
      </div>
      <Login />
      <SignUp />
    </div>
  );
};

export default Auth;
