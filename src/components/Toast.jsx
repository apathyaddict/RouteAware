import { Box, Button, Flex, Icon, Text, useToast } from "@chakra-ui/react";
import { FiShare2, FiPhone } from "react-icons/fi";

const Toast = () => {
  const toast = useToast();

  const handleShareRoute = () => {
    // Handle sharing the route with a friend
  };

  const handleCallUber = () => {
    // Handle calling an Uber
  };

  const showToast = () => {
    toast({
      position: "bottom-right",
      render: () => (
        <Box
          p={4}
          bg="gray.800"
          color="white"
          borderRadius="md"
          boxShadow="md"
        >
          <Flex justify="space-between" align="center">
            <Text fontSize="lg" fontWeight="bold">
              Here's your . Be safe!
            </Text>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toast.closeAll()}
            >
              Close
            </Button>
          </Flex>
          <Flex mt={2} justify="flex-end">
            <Button
              leftIcon={<Icon as={FiShare2} />}
              colorScheme="teal"
              mr={2}
              onClick={() => handleShareRoute()}
            >
              Share your route 
            </Button>
            <Button
              leftIcon={<Icon as={FiPhone} />}
              colorScheme="blue"
              onClick={() => handleCallUber()}
            >
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
    <></>
    // <Button colorScheme="green" onClick={() => showToast()}>
    //   Show Toast
    // </Button>
  );
};

export default Toast;
