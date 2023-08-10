import React, { useState } from "react";
import {
  Input,
  Button,
  HStack,
  Stack,
  VStack,
  InputGroup,
  InputLeftElement,
  Flex,
  Box,
  Text,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { FiShare2, FiPhone } from "react-icons/fi";

const InputForm = ({ onSearch, isMobile }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [customLocation, setCustomLocation] = useState("");
  const toast = useToast();

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleAutocompleteSelect = async (address, setInput) => {
    setInput(address);
    try {
      const results = await geocodeByAddress(address);
      const { lat, lng } = await getLatLng(results[0]);
      console.log("Coordinates:", lat, lng);
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  const handleSubmit = () => {
    onSearch(currentLocation, customLocation);
    showToast();
  };

  const showToast = async () => {
    toast({
      position: "bottom-right",
      render: () => (
        <Box p={4} bg="gray.800" color="white" borderRadius="md" boxShadow="md">
          <Flex justify="space-between" align="center">
            <Text fontSize="lg" fontWeight="bold">
              Here's your Route. Be safe!
            </Text>
            <Button variant="ghost" size="sm" onClick={() => toast.closeAll()}>
              Close
            </Button>
          </Flex>
          <Flex mt={2} justify="flex-end">
            <Button leftIcon={<Icon as={FiShare2} />} colorScheme="teal" mr={2}>
              Share your route
            </Button>
            <Button leftIcon={<Icon as={FiPhone} />} colorScheme="blue">
              Call an Uber
            </Button>
          </Flex>
        </Box>
      ),
      duration: null,
      isClosable: true,
    });
  };

  return (
    <>
      <Stack
        direction={isMobile ? "row" : "column"}
        zIndex={1}
        p={3}
        align="center"
      >
        <Flex align="center">
          <InputGroup>
            <Flex align="center" mr={2}>
              <InputLeftElement pointerEvents="none">
                <MdLocationOn />
              </InputLeftElement>
            </Flex>
            <PlacesAutocomplete
              value={currentLocation}
              onChange={(value) => setCurrentLocation(value)}
              onSelect={(value) =>
                handleAutocompleteSelect(value, setCurrentLocation)
              }
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <Box position="relative" width="100%">
                  <Input
                    {...getInputProps({
                      placeholder: "Start Location",
                      width: "100%",
                    })}
                    pl={6}
                    mb={2}
                  />
                  {suggestions.length > 0 && (
                    <Box
                      position="absolute"
                      width="100%"
                      zIndex="9999"
                      bg="#fff"
                      boxShadow="md"
                    >
                      {loading ? (
                        <div>Loading...</div>
                      ) : (
                        suggestions.map((suggestion) => {
                          const style = {
                            margin: "0.5rem",
                            backgroundColor: suggestion.active
                              ? "#e6e6e6"
                              : "#fff",
                          };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                style,
                              })}
                            >
                              {suggestion.description}
                            </div>
                          );
                        })
                      )}
                    </Box>
                  )}
                </Box>
              )}
            </PlacesAutocomplete>
          </InputGroup>

          <InputGroup>
            <Flex align="center" mr={2}>
              <InputLeftElement pointerEvents="none">
                <MdLocationOn />
              </InputLeftElement>
            </Flex>
            <PlacesAutocomplete
              value={customLocation}
              onChange={(value) => setCustomLocation(value)}
              onSelect={(value) =>
                handleAutocompleteSelect(value, setCustomLocation)
              }
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <Box position="relative" width="100%">
                  <Input
                    {...getInputProps({
                      placeholder: "Destination",
                      width: "100%",
                    })}
                    pl={6}
                    mb={2}
                  />
                  {suggestions.length > 0 && (
                    <Box
                      position="absolute"
                      width="100%"
                      zIndex="9999"
                      bg="#fff"
                      boxShadow="md"
                    >
                      {loading ? (
                        <div>Loading...</div>
                      ) : (
                        suggestions.map((suggestion) => {
                          const style = {
                            margin: "0.5rem",
                            backgroundColor: suggestion.active
                              ? "#e6e6e6"
                              : "#fff",
                          };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                style,
                              })}
                            >
                              {suggestion.description}
                            </div>
                          );
                        })
                      )}
                    </Box>
                  )}
                </Box>
              )}
            </PlacesAutocomplete>
          </InputGroup>

          <Button
            colorScheme="red"
            onClick={handleSubmit}
            ml={2}
            mb={2}
            w={isMobile ? "100%" : "120px"}
          >
            Search
          </Button>
        </Flex>
      </Stack>
    </>
  );
};

export default InputForm;
