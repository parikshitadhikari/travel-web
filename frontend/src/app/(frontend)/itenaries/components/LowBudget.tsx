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

const parseMinBudget = (budget: string) => {
  const budgetRange = budget.split("-")[0].replace(/\D/g, "");
  return parseInt(budgetRange, 10);
};

const sortPlacesByBudget = (places: Place[]) => {
  return places.sort(
    (a, b) => parseMinBudget(a.budget) - parseMinBudget(b.budget)
  );
};

const LowBudget = () => {
  const [lowBudgetPlaces, setLowBudgetPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const sortedPlaces = sortPlacesByBudget(mockPlaces);
    const top10LowBudgetPlaces = sortedPlaces.slice(0, 5);
    setLowBudgetPlaces(top10LowBudgetPlaces);
  }, []);

  return (
    <div className="px-20">
      <h1 className="font-bold text-xl mb-3 mt-20">TOP 5 LOW BUDGET PLACES</h1>
      <Carousel
        // withIndicators
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={3}
        style={{ width: "100%" }}
      >
        {lowBudgetPlaces.length > 0 ? (
          lowBudgetPlaces.map((place) => (
            <Carousel.Slide key={place.name}>
              <ItenariesCard place={place} />
            </Carousel.Slide>
          ))
        ) : (
          <p>No low-budget places available.</p>
        )}
      </Carousel>
    </div>
  );
};

export default LowBudget;
