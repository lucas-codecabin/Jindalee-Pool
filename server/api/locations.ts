import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const locationId = "3c7312c4-4bf6-4365-b3ba-0581228e9fdd";
  try {
    const locationDetails = await prisma.locations.findUnique({
      where: {
        id: locationId,
      },
    });

    return locationDetails;
  } catch (error) {
    console.error("Error fetching location", error);
  }
});
