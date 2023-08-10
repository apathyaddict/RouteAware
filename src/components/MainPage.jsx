import React, { useState, useEffect } from "react";
import { VStack, Flex, useToast } from "@chakra-ui/react";
import Input from "./Input";
import Map from "./Map";
import { geocode } from "../geocode";
import Navbar from "./Navbar";
import { DirectionsService } from "@react-google-maps/api";
import BarChart from "./BarChart";
import CrimeTable from "./CrimeTable";
import locationsData from "./locations.json";
import locationsData2 from "./locations2.json";
import LineChart from "./LineChart";
import Share from "./Share";

const MainPage = ({ isMobile }) => {
  const [startLocation, setStartLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [locations, setLocations] = useState([]);
  const [nextMode, setNextMode] = useState("Pro");
  const toast = useToast();

  const handleSearch = async (currentLocation, customLocation) => {
    try {
      const startCoordinates = await geocode(currentLocation);
      const destCoordinates = await geocode(customLocation);

      setStartLocation(startCoordinates);
      setDestination(destCoordinates);

      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: startCoordinates,
          destination: destCoordinates,
          travelMode: window.google.maps.TravelMode.WALKING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            console.log("status", status);
            setDirections(result);

            const routePath = result.routes[0].overview_path;
            const intersectsRedPoints = routePath.some((point) =>
              locations.some(
                (location) =>
                  location.Color === "red" &&
                  point.lat() === location.Latitude &&
                  point.lng() === location.Longitude
              )
            );

            if (intersectsRedPoints) {
              toast({
                title: "Unsafe Route",
                description: "Your route intersects with unsafe areas.",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
          } else {
            console.error("Directions request failed. Status:", status);
          }
        }
      );
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  const getCurrentCrimePoints = (dataArray) => {
    const currentHour = new Date().getHours();
    const currentTimeBin = Math.floor(currentHour / 2);
    // console.log('currentTimeBin', currentTimeBin);
    const preliminaryCrimePoints = dataArray.filter(
      (point) => point.lables !== -1
    );
    const currentCrimePoints = preliminaryCrimePoints.filter(
      (point) => point.Time_Bins === currentTimeBin
    );
    // console.log('currentCrimepoints', currentCrimePoints);
    return currentCrimePoints;
  };

  useEffect(() => {
    const currentCrimePoints = getCurrentCrimePoints(locationsData2);
    const initializeLocations = async () => {
      setLocations(
        currentCrimePoints.map((location) => ({
          Latitude: location.LAT,
          Longitude: location.LON,
          Label: location.lables,
          Time_Bin: location.Time_Bins,
          Color: "blue",
        }))
      );
    };

    initializeLocations();
  }, []);

  return (
    <>
      <Flex direction="column" minH="100vh">
        <Navbar {...{ nextMode, setNextMode, isMobile }} />

        <Flex direction={!isMobile ? "row" : "column"} flex="1" p={5}>
          <Flex direction="column" flex="1" p={5}>
            <Input onSearch={handleSearch} />
            <Map
              startLocation={startLocation}
              destination={destination}
              directions={directions}
              locations={locations}
              isMobile={isMobile}
            />
            <Share />
          </Flex>
          {nextMode !== "Pro" ? (
            <Flex direction="column" flex="1" p={5}>
              <BarChart />
              <LineChart />
              <CrimeTable />
            </Flex>
          ) : null}
        </Flex>
      </Flex>
    </>
  );
};

export default MainPage;
