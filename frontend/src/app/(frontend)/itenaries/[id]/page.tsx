"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import mockPlaces from "../data/mockPlaces";

interface Place {
  id: number;
  name: string;
  description: string;
  budget: string;
  guide_name: string;
  people_liking_this_place: string[];
  image_of_the_place: string;
  tag: string[];
}

const PlaceDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [place, setPlace] = useState<Place | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const placeDetails = mockPlaces.find(
        (place) => place.id === parseInt(id as string)
      );
      setPlace(placeDetails);
    }
  }, [id]);

  if (!place) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
      <img
        src={place.image_of_the_place}
        alt={place.name}
        className="w-full h-auto mb-4"
      />
      <p>{place.description}</p>
      <p>
        <strong>Budget:</strong> {place.budget}
      </p>
      <p>
        <strong>Guide Name:</strong> {place.guide_name}
      </p>
      <p>
        <strong>Tags:</strong> {place.tag.join(", ")}
      </p>
      <p>
        <strong>People liking this place:</strong>{" "}
        {place.people_liking_this_place.join(", ")}
      </p>
    </div>
  );
};

export default PlaceDetails;
