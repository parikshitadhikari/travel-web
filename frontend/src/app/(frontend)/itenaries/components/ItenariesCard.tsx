"use client";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import "@mantine/core/styles.css";

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
        <Image src={place.image_of_the_place} height={160} alt={place.name} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{place.name}</Text>
        <Badge color="pink">{place.budget}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {place.description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        View Details
      </Button>
    </Card>
  );
}

export default ItenariesCard;
