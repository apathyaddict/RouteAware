import {
  Box,
  Flex,
  IconButton,
  Button,
  Image,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FaUser, FaPowerOff, FaSun, FaMoon } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const NavBar = ({ nextMode, setNextMode, isMobile }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
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
          <MenuList zIndex={2}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem
              onClick={() =>
                setNextMode((prev) =>
                  prev === "Standard" ? "Pro" : "Standard"
                )
              }
            >
              {`Switch to ${nextMode} mode`}
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
        {!isMobile && (
          <Text pl={4} fontWeight={"semibold"}>
            {nextMode === "Standard" ? "Pro Account" : "Standard Account"}
          </Text>
        )}
      </Flex>
      <Box>
        <Image
          src={
            !isDark
              ? "https://res.cloudinary.com/dc2qd4mzh/image/upload/v1685538729/routeawarelight_jqtznz.png"
              : "https://res.cloudinary.com/dc2qd4mzh/image/upload/v1685538729/routeawaredark_uztsjg.png"
          }
          style={
            !isMobile
              ? { height: "70px", width: "auto" }
              : { height: "30px", width: "auto" }
          }
        />
      </Box>
      <Flex alignItems="center">
        {/* Action Button */}
        {/* <Button variant="outline" mr={4}>
          Log Out
        </Button> */}
        <Spacer />
        {/* Color Changing Mode */}
        <Tooltip hasArrow label="Change language" placement="bottom">
          <IconButton ml={8} icon={<FiGlobe />} isRound />
        </Tooltip>
        <Tooltip hasArrow label="Toggle Light/Dark Mode" placement="bottom">
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound
            onClick={toggleColorMode}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default NavBar;
