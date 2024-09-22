import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="m-4 mx-80 flex justify-between items-center">
      {/* Text section with headings and description */}
      <div className="m-10 space-y-10 flex flex-col justify-evenly w-3/5">
        {/* Heading */}
        <div>
          <h1 className="my-4 text-5xl font-extrabold text-black">
            TravelWeb: Here to <span className="text-green-400">Transform</span>
          </h1>
          <h1 className="my-4 text-5xl font-extrabold text-black">
            The Way We Travel.
          </h1>
        </div>

        {/* Description */}
        <div className="text-gray-400 text-md">
          Set out on a path of discovery, TravelWeb emerges as a gateway to
          adventure. In the ever-expanding world of travel, it paves the way for
          new experiences, equipping explorers with eco-friendly options and
          unlocking unforgettable journeys, while promoting a deeper connection
          with the world.
        </div>

        {/* Call to action and additional link */}
        <div className="flex space-x-5 items-center mt-10">
          <button className="w-40 bg-green-600 text-white hover:bg-green-700 rounded-lg text-lg px-2 py-2 text-center">
            Join Free
          </button>
          {/* <span className="text-xl">Watch Video</span> */}
        </div>
      </div>

      {/* Image section */}
      <div>
        <img className="object-cover h-96" alt="image description" />
      </div>
    </div>
  );
};

export default Hero;
