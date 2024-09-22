import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import apiClient from "../../services/apiClient";
// import { setToken } from "../../services/token";
import React from "react";

// interface fro tha response from the login
interface LoginResponse {
  token: { refresh: string; access: string };
  info: { id: number; username: string };
}

/**
 * @function LoginForm
 * @description Form component for user login. It includes fields for username, password, and a remember me option.
 * @returns {TSX.Element} - The form component for user login.
 */

const LoginForm = () => {
  // State hooks to store form input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState("");

  // Hook for navigating programmatically
  const navigate = useNavigate();

  // Function to handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(username, password);

    // API call to perform login
    // apiClient
    //   .post<LoginResponse>("/auth/login/", {
    //     username: username,
    //     password: password,
    //   })
    //   .then(({ data }) => {
    //     setToken(data.token.access);
    //     navigate("/dashboard");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     navigate("/login");
    //   })
    //   .finally(() => {
    //     setUsername("");
    //     setPassword("");
    //     setRememberme("");
    //   });
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white w-[40rem] border-4 rounded-xl shadow-2xl p-8">
        <form className="mx-auto space-y-6" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label className="block text-2xl font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-3 p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 text-xl"
              placeholder="Enter your username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-2xl font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-3 p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 text-xl"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              id="remember"
              type="checkbox"
              className="w-5 h-5 border border-gray-300 rounded bg-gray-100 focus:ring-2 focus:ring-blue-300"
              onChange={(e) => {
                setRememberme(e.target.value);
              }}
            />
            <label
              htmlFor="remember"
              className="ml-2 text-lg font-medium text-gray-600"
            >
              Remember me
            </label>
          </div>
          <div></div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-2xl font-medium rounded-md py-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
