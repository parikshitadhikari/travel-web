/**
 * @file AuthPage.tsx
 * @description Component for handling user authentication. Displays login and signup forms based on user selection.
 *
 * @module AuthPage
 */

import { useState } from "react";
import LoginForm from "../../components/AuthPage/LoginForm";
import SignUpForm from "../../components/AuthPage/SignUpForm";
// import login_background from '../../images/login-background.jpeg'
import NavBar from "../../components/NavBar";
import React from "react";

/**
 * @function AuthPage
 * @description Component for handling user authentication.
 *
 * @returns {JSX.Element} - The authentication page component.
 */
const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <NavBar />
      <div className="login-container w-full h-full flex flex-row">
        <div className="login w-full px-10 bg-[#fafafa] h-screen">
          <div className=" flex flex-row gap-20 p-10 justify-center">
            <div
              className={`Login text-4xl font-bold hover:cursor-pointer ${
                !showLogin ? "underline-offset-2 underline" : ""
              }`}
              onClick={() => {
                setShowLogin(false);
              }}
            >
              Sign up
            </div>
            <div
              className={`Login text-4xl font-bold hover:cursor-pointer ${
                showLogin ? "underline-offset-2 underline" : ""
              }`}
              onClick={() => {
                setShowLogin(true);
              }}
            >
              Log in
            </div>
          </div>
          {showLogin ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
