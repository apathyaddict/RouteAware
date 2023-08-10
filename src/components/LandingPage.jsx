import React from "react";
import {
  Box,
  Circle,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  useColorMode,
  Input,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Icon,
  VStack,
} from "@chakra-ui/react";

import { MdLocationOn, MdDirectionsRun, MdShield } from "react-icons/md";
import { FaUser, FaPowerOff, FaSun, FaMoon } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({ isMobile }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <VStack height="80%">
        <Flex
          flexDirection="row"
          p={4}
          justifyContent="space-between"
          align="center"
        >
          <Flex align="center">
            {/* User Functionality */}
            <Menu>
              <MenuButton as={IconButton} icon={<FaUser />} isRound />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Box></Box>
          <Flex alignItems="center">
            <Spacer />

            <IconButton ml={8} icon={<FiGlobe />} isRound />
            <IconButton
              ml={8}
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>

        <Stack spacing={1}>
          <Flex direction="column" alignItems="center" textAlign="center" p={3}>
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              bgGradient="linear(to-r, red.500, yellow.500)"
              bgClip="text"
            >
              A Smart City is a Safe City
            </Text>
            <Image
              src={
                !isDark
                  ? "https://res.cloudinary.com/dc2qd4mzh/image/upload/v1685538729/routeawarelight_jqtznz.png"
                  : "https://res.cloudinary.com/dc2qd4mzh/image/upload/v1685538729/routeawaredark_uztsjg.png"
              }
              style={
                !isMobile
                  ? { height: "130px", width: "auto" }
                  : { height: "70px", width: "auto" }
              }
            />
            <Text color={isDark ? "gray.200" : "gray.500"} maxW="500px" mt={4}>
              Providing you with safer solutions to get around and get home.
              Choose your location, and we'll tell you what's around.
            </Text>

            <Box mt={4} width="100%" height="300px" overflow="hidden">
              <Image
                width="100%"
                height={isMobile ? "calc(100% + 20px)" : "calc(100% + 200px)"} // Adjust the height to include the cropped area
                objectFit="cover"
                src="https://static.independent.co.uk/2022/01/10/15/newFile-4.jpg"
                alt="RouteAware App"
                objectPosition="center bottom" // Move the image position to the bottom
                style={{ marginBottom: "-100px" }} // Use negative margin to crop the bottom 100px and add border radius
              />
            </Box>

            <Link to="/home">
              <Button colorScheme="red" mt={4}>
                Enter
              </Button>
            </Link>
            <Text color="gray.500" mt={3} fontSize="sm" fontWeight="semibold">
              *Stand mode is free, and Pro mode unlocks additional features.
            </Text>
            <Flex mt={4} color={isDark ? "gray.200" : "gray.500"}>
              <Box flex={1} textAlign="center">
                <MdLocationOn size={24} />
              </Box>
              <Box flex={1} textAlign="center">
                <MdDirectionsRun size={24} />
              </Box>
              <Box flex={1} textAlign="center">
                <MdShield size={24} />
              </Box>
            </Flex>
          </Flex>
        </Stack>
      </VStack>
    </>
  );
};

export default Header;
