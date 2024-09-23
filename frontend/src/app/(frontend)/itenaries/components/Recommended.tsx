"use client";
import React, { useState, useEffect } from "react";
import ItenariesCard from "./ItenariesCard";
import "@mantine/core/styles.css";

import mockPlaces from "../data/mockPlaces";
interface Place {
  name: string;
  description: string;
  budget: string;
  guide_name: string;
  people_liking_this_place: string[];
  image_of_the_place: string;
  tag: string[];
}

interface UserInfo {
  username: string;
  email: string;
  password: string;
  interests: string[];
}

const Recommended = () => {
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");

    if (storedUserInfo) {
      const userInfo: UserInfo = JSON.parse(storedUserInfo);

      if (userInfo.interests) {
        const userInterests = userInfo.interests;

        const recommendedPlaces = mockPlaces.filter((place) =>
          place.tag.some((tag) => userInterests.includes(tag))
        );

        setFilteredPlaces(recommendedPlaces);
      }
    }
  }, []);

  return (
    <div className="px-20">
      <h1 className="font-bold text-xl mb-3">RECOMMENDED FOR YOU</h1>
      <div className="grid grid-cols-3 gap-x-16">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <ItenariesCard key={place.name} place={place} />
          ))
        ) : (
          <p>No places match your interests.</p>
        )}
      </div>
    </div>
  );
};

export default Recommended;
