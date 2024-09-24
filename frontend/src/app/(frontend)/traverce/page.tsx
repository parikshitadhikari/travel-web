"use client";
import React, { useEffect, useState } from "react";
import SidebarDemo from "@/app/components/Sidebar";
import axios from "axios";

interface Destination {
  id: number;
  name: string;
  description: string;
}

interface Item {
  id: number;
  name: string;
  quantity: string; // Assuming each item has a quantity attribute
}

const Traverce: React.FC = () => {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const userData = localStorage.getItem("userInfo");
  const username = userData ? JSON.parse(userData).username : "";
  console.log(userData, username);
  

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get<Destination>(
          `http://127.0.0.1:8000/auth/travellers/${username}`
        );
        console.log(response.data); // Log the response to the console
        setDestination(response.data); // Assuming the response is a single destination object

        // Fetch items related to the destination
        const itemsResponse = await axios.post<Item[]>(
          "http://127.0.0.1:8000/auth/traverse/",
          { id: response.data.id } // Send the destination ID
        );
        setItems(itemsResponse.data); // Set the fetched items
      } catch (error) {
        console.error("Error fetching destination or items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [username]);

  return (
    <>
      <SidebarDemo />
      <div className="bg-gradient-to-br from-blue-500 to-blue-200 min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Checklist for {destination?.name}
        </h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : destination ? (
          <>
            <div className="destination-card bg-white rounded-lg shadow-lg p-6 m-4 max-w-md mx-auto">
              <h2 className="text-xl font-semibold">{destination.name}</h2>
              <p className="mt-2">{destination.description}</p>
            </div>
            <h2 className="text-2xl font-semibold text-center text-white mt-4">
              Required Items
            </h2>
            <ul className="mt-4 bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
              {items.length > 0 ? (
                items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between py-2 border-b border-gray-200"
                  >
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                  </li>
                ))  
              ) : (
                <p className="text-center">No items found.</p>
              )}
            </ul>
          </>
        ) : (
          <p className="text-center">No destination found.</p>
        )}
      </div>
    </>
  );
};

export default Traverce;
