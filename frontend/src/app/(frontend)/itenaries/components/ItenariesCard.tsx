"use client";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import "@mantine/core/styles.css";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import "@mantine/carousel/styles.css";
interface Place {
  name: string;
  description: string;
  budget: string;
  guide_name: string;
  people_liking_this_place: string[];
  image_of_the_place: string;
  tag: string[];
}

interface ItenariesCardProps {
  place: Place;
}

function ItenariesCard({ place }: ItenariesCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <img src={place.image_of_the_place} className="h-64 w-full" alt={place.name} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text
          fw={500}
          style={{
            maxWidth: "60%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {place.name}
        </Text>
        <div className="max-w-[40%] flex justify-center items-center gap-x-4">
          <IconHeart
            className="max-w-[50%] border-2 p-0.5 rounded-full"
            size={30}
          />
          <Badge color="pink" className="max-w-[50%]">
            {place.budget}
          </Badge>
        </div>
      </Group>

      <Text
        size="sm"
        c="dimmed"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {place.description}
      </Text>

      <button className="bg-green-600 hover:bg-green-700 rounded-sm w-full text-center mt-6 py-1 font-bold text-white">
        View Details
      </button>
    </Card>
  );
}

export default ItenariesCard;
