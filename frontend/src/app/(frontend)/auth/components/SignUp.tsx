"use client";
import React, { useState } from "react";
import "@mantine/core/styles.css";
import { Modal, MantineProvider, Checkbox } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import mockUsers from "../data/mockUsers";
import { toast } from "react-toastify";

const interests = [
  "Adventure Seeker",
  "Cultural Enthusiast",
  "Food Explorer",
  "Nature Lover",
  "Relaxation and Wellness",
  "History Buffs",
  "Thrill Seeker",
];

const SignUp: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingUser = mockUsers.find((user) => user.email === email);
    if (existingUser) {
      toast.error("User already exists");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords donot match");
      return;
    }
    const newUser = {
      username,
      email,
      password,
      interests: selectedInterests,
    };

    mockUsers.push(newUser);

    localStorage.setItem("userInfo", JSON.stringify(newUser));
    console.log(mockUsers);
    toast.success("User successfully signed up.");
  };

  const handleInterestChange = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <MantineProvider>
      <Modal
        opened={opened}
        onClose={close}
        title="Select Your Interests"
        centered
      >
        <div className="space-y-2">
          {interests.map((interest) => (
            <Checkbox
              key={interest}
              label={interest}
              checked={selectedInterests.includes(interest)}
              onChange={() => handleInterestChange(interest)}
            />
          ))}
        </div>
        <button
          className="p-2 font-bold bg-green-600 text-xs mt-4 text-white text-center w-full rounded-sm"
          onClick={handleFormSubmit}
        >
          Complete SignUp
        </button>
      </Modal>
      <div className="flex justify-center items-center ">
        <div className="bg-white  w-[30rem] border-4 rounded-xl shadow-2xl p-8">
          <div className=" mx-auto space-y-6">
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-2xl font-medium text-gray-600 mb-3"
              >
                Username
              </label>
              <input
                placeholder="Enter your username"
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
                placeholder="Enter your password"
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
                placeholder="Confirm Password"
                className="mt-1 p-3 w-full text-lg border rounded-md focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
                required
              />
            </div>

            <button
              className="w-full text-2xl bg-green-600 hover:bg-green-700 text-white font-medium rounded-md py-3"
              onClick={open}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default SignUp;
