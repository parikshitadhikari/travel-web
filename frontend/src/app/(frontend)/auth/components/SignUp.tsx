"use client"
import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const handleFormSubmit = () => {
    console.log("hi");
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white  w-[40rem] border-4 rounded-xl shadow-2xl p-8">
        <form className=" mx-auto space-y-6" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-2xl font-medium text-gray-600 mb-3"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 text-lg p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-2xl font-medium text-gray-600 mb-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 text-lg p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="email@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-2xl font-medium text-gray-600 mb-3"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 text-lg p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-2xl font-medium text-gray-600 mb-3"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-3 w-full text-lg border rounded-md focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
              required
            />
          </div>

          <div className=""></div>
          <button
            type="submit"
            className="w-full text-2xl bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md py-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
