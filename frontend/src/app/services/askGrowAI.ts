export const askGrowAI = async (userMessage: string) => {
  const response = await fetch("/api/askTravelAI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userMessage }),
  });

  if (!response.ok) {
    throw new Error("Failed to communicate with TravelAI");
  }

  const data = await response.json();
  return data.message;
};
