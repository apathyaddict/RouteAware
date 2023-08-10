import React, { useState, useEffect } from "react";
import { GoogleMap, DirectionsRenderer, Marker } from "@react-google-maps/api";
import blueDotIcon from "./reddot.png";
import { useToast } from "@chakra-ui/react";

const Map = ({ startLocation, destination, directions, locations }) => {
  const [markerData, setMarkerData] = useState([]);
  const toast = useToast();

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
    position: "relative", // Add this line
    zIndex: "1", // Add this line
  };

  const center = { lat: 34.1015, lng: -118.3257 };

  useEffect(() => {
    setMarkerData(locations);
  }, [locations]);

  useEffect(() => {
    if (directions && markerData) {
      const intersectsBlueDotMarker = markerData.some((marker) => {
        if (
          marker.icon === blueDotIcon &&
          directions &&
          directions.routes[0].overview_path.some((point) => {
            return (
              point.lat() === marker.position.lat &&
              point.lng() === marker.position.lng
            );
          })
        ) {
          return true;
        }
        return false;
      });

      if (intersectsBlueDotMarker) {
        toast({
          title: "Route Intersects Blue Dot Marker",
          description: "Your route intersects with a blue dot marker.",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  }, [directions, markerData, toast]);

  return (
    <div className="map-container" style={{ zIndex: "0" }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options={{
          disableDefaultUI: true,
        }}
      >
        {directions && <DirectionsRenderer directions={directions} />}

        {markerData?.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.Latitude, lng: location.Longitude }}
            label={location.Label}
            icon={{
              url: blueDotIcon,
              scaledSize: new window.google.maps.Size(10, 10),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
