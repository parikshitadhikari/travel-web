"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import mockPlaces from "../data/mockPlaces";
import { BackgroundBeams } from "@/components/ui/background-beams";
import NavBar from "@/app/components/NavBar";
import { Divider } from "@mantine/core";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { IconTag, IconUser, IconAt } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

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
  const [opened, { open, close }] = useDisclosure(false);

  const { id } = useParams();
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
  const surnames = ["Jha", "Acharya", "Subedi", "Adhikari"];

  const getRandomSurname = () => {
    return surnames[Math.floor(Math.random() * surnames.length)];
  };

  return (
    <MantineProvider>
      <Modal opened={opened} onClose={close} size="lg">
        <p className="font-bold">
          People interested in travelling to {place.name}
        </p>
        <div className="flex flex-col gap-y-2 mt-4">
          {place.people_liking_this_place.slice(0).map((person, index) => (
            <div
              key={index}
              className="border py-2 px-4 rounded font-bold flex items-center gap-x-4"
            >
              <div className="flex gap-x-2 items-center w-2/5">
                <IconUser size={20} />
                {person} {getRandomSurname()}
              </div>
              <div className="flex gap-x-2 items-center w-3/5">
                <IconAt size={20} />
                {person.toLocaleLowerCase()}@gmail.com
              </div>
            </div>
          ))}
        </div>
      </Modal>
      <div className="relative min-h-screen bg-white">
        <div className="absolute inset-0 z-0">
          <BackgroundBeams />
        </div>

        <NavBar />
        <div className="p-20 z-10 relative">
          <div className="flex gap-x-20 items-center">
            <div className="w-[55%]">
              <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
              <p className="mt-10">{place.description}</p>
              <p className="mt-10 border w-fit py-2 px-4 rounded bg-pink-600 text-white">
                <strong>Budget:</strong> {place.budget}
              </p>
            </div>
            <img
              src={place.image_of_the_place}
              alt={place.name}
              className="w-2/5 h-auto mb-4"
            />
          </div>
          <Divider my="md" />
          <p className="flex justify-around gap-x-10">
            {place.tag.slice(0, 7).map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500 py-2 px-4 rounded text-white font-bold flex gap-x-2 items-center"
              >
                <IconTag size={20} />
                {tag}
              </span>
            ))}
          </p>
          <Divider my="md" />
          <div className="flex items-center gap-x-10 w-fit">
            <p className="mt-5 bg-gray-200 w-fit p-2 rounded">
              <strong>Guide Name:</strong> {place.guide_name}
            </p>
            <button
              onClick={open}
              className="border p-2 mt-5 rounded border-blue-500 hover:bg-blue-500 font-bold hover:text-white"
            >
              People Interested ({place.people_liking_this_place.length})
            </button>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default PlaceDetails;
