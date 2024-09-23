"use client";
import React, { useState, useEffect } from "react";
import ItenariesCard from "./ItenariesCard";
import "@mantine/core/styles.css";
import { Carousel } from "@mantine/carousel";

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
      <Carousel
        withIndicators
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={3}
        style={{ width: "100%" }}
      >
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <Carousel.Slide>
              <ItenariesCard key={place.name} place={place} />
            </Carousel.Slide>
          ))
        ) : (
          <p>No places match your interests.</p>
        )}
      </Carousel>
    </div>
  );
};

export default Recommended;
