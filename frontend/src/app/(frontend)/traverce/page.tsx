"use client";
import React, { useEffect, useState } from "react";
import SidebarDemo from "@/app/components/Sidebar";
import axios from "axios";

interface Destination {
  id: number;
  name: string;
  description: string;
}

const Traverce: React.FC = () => {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>({
    username: "",
    email: "",
    password: "",
    interests: [],
    mood: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userInfo");
    console.log(storedData);
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const username = userData?.username;

  useEffect(() => {
    const fetchDestination = async () => {
      if (!username) {
        console.error("Username not found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/auth/travellers/${username}/`
        );
        // console.log(response.data);
        setDestination(response.data.selected_destinations[0]);
        // Selected_destinations is an array
        console.log(response.data.selected_destinations);
      } catch (error) {
        console.error("Error fetching destination:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [username]); // Add username to the dependency array

  const handleExplore = async (destinationId: number) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/traverse/", {
        id: destinationId,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching trip details:", error);
    }
  };

  return (
    <>
      <SidebarDemo />
      <div className="bg-blue-200 min-h-screen p-8">
        <h1 className="text-center text-3xl font-bold text-blue-600">
          Explore Your Destination
        </h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : destination ? (
          <div className="destination-card bg-white rounded-lg shadow-lg p-6 m-4 max-w-md mx-auto">
            <h2 className="text-xl font-semibold">{destination.name}</h2>
            <p className="mt-2">{destination.description}</p>
            <button
              onClick={() => handleExplore(destination.id)}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
            >
              Explore
            </button>
          </div>
        ) : (
          <p className="text-center">No destination found.</p>
        )}
      </div>
    </>
  );
};

export default Traverce;
