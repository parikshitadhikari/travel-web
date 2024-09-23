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

// get the top 3 places based on likes
const getTopPlaces = (places: Place[]) => {
  const placesWithLikes = places.map((place) => ({
    ...place,
    likeCount: place.people_liking_this_place.length,
  }));

  const sortedPlaces = placesWithLikes.sort(
    (a, b) => b.likeCount - a.likeCount
  );

  return sortedPlaces.slice(0, 3);
};

const Trending = () => {
  const [trendingPlaces, setTrendingPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const topPlaces = getTopPlaces(mockPlaces);
    setTrendingPlaces(topPlaces);
  }, []);

  return (
    <div className="px-20">
      <h1 className="font-bold text-xl mb-3 mt-10">TOP 3 TRENDING PLACES</h1>
      <Carousel
        withIndicators
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={3}
        style={{ width: "100%" }}
      >
        {trendingPlaces.length > 0 ? (
          trendingPlaces.map((place) => (
            <Carousel.Slide key={place.name}>
              <ItenariesCard place={place} />
            </Carousel.Slide>
          ))
        ) : (
          <p>No trending places available.</p>
        )}
      </Carousel>
    </div>
  );
};

export default Trending;
