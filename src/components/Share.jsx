import React from "react";
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
} from "@chakra-ui/react";
import { IoWarning } from "react-icons/io5";

const Share = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction="column" minH="fit-content">
      <Flex
        mt={5}
        border="2px solid gray"
        borderRadius="md"
        direction="row"
        flex="1"
        p={5}
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <IoWarning size={40} />
        <Text fontSize="lg" pl={3} pt={1} pr={3}>
          Report any area where you felt unsafe and help create a safer
          community.
        </Text>
        <Button colorScheme="red" onClick={onOpen}>
          Report
        </Button>
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Report an Unsafe Experience</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex
                direction="row"
                flex="1"
                p={5}
                justifyContent="center"
                alignContent="center"
              >
                <Flex direction="column" flex="1" p={2}>
                  <Text fontSize="md" pt={1} pr={3}>
                    We value your safety.
                  </Text>
                  <Text fontSize="md" pt={1} pr={3}>
                    {" "}
                    Your feedback contributes to building a safer environment
                    for all.
                  </Text>
                </Flex>

                <Image
                  borderRadius="25%"
                  boxSize="150px"
                  objectFit="cover"
                  src="https://media.istockphoto.com/id/1243501289/photo/close-up-of-hands-using-mobile-smart-phones-people-detail-sharing-photos-on-social-media.jpg?s=612x612&w=0&k=20&c=vCUcY_BlM6D7muT5Al2YsMtmsNN9HGmd6HIJdSpi2Do="
                  alt="Route Aware Logo"
                />
              </Flex>

              <FormControl mt={4}>
                <FormLabel>Specify location</FormLabel>
                <Input placeholder="Where did you feel unsafe?" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder="Please report and describe any area where you felt unsafe, even if no incident occurred." />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
};

export default Share;
