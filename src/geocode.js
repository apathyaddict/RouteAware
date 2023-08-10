export const geocode = async (location) => {
  try {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        location
      )}&key=${apiKey}`
    );
    const data = await response.json();

    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      console.log("Coordinates:", lat, lng); // Log the coordinates
      return { lat, lng };
    } else {
      throw new Error("No results found for the provided location.");
    }
  } catch (error) {
    throw new Error("Geocoding error: " + error.message);
  }
};
