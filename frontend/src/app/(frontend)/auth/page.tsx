"use client";
import NavBar from "@/app/components/NavBar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Auth = () => {
  const [formType, setFormType] = useState("login");

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      <div>
        <NavBar />
      </div>

      <div className="flex justify-center mt-10 space-x-4 z-10 relative">
        <button
          onClick={() => setFormType("login")}
          className={`px-6 py-3 font-medium text-lg ${
            formType === "login" ? "bg-blue-600 text-white" : "bg-gray-200"
          } hover:bg-blue-700 rounded-md`}
        >
          Login
        </button>
        <button
          onClick={() => setFormType("signup")}
          className={`px-6 py-3 font-medium text-lg ${
            formType === "signup" ? "bg-blue-600 text-white" : "bg-gray-200"
          } hover:bg-blue-700 rounded-md`}
        >
          Sign Up
        </button>
      </div>

      {/* Conditionally render the form based on state */}
      <div className="flex justify-center items-center mt-10 z-10 relative">
        {formType === "login" ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Auth;
