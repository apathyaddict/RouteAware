import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const CrimeTable = () => {
  const mockCrimeData = [
    {
      type: "Robbery",
      date: "2021-01-01",
      time: "12:00",
      place: "Hollywood",
      parties_involved: "2 adults",
    },
    {
      type: "Shooting",
      date: "2021-01-01",
      time: "12:00",
      place: "Bevery Hills",
      parties_involved: "2 adults",
    },
    {
      type: "Assault",
      date: "2021-01-01",
      time: "12:00",
      place: "Venice Beach",
      parties_involved: "2 adults",
    },
    {
      type: "Robbery",
      date: "2021-01-01",
      time: "12:00",
      place: "Santa Monica",
      parties_involved: "2 adults",
    },
    {
      type: "Shooting",
      date: "2021-01-01",
      time: "12:00",
      place: "Downtown LA",
      parties_involved: "2 adults",
    },
  ];

  return (
    <Box className="Box" h="300px" mt={6}>
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Crime</Th>
              <Th>Date</Th>
              <Th isNumeric>Time</Th>
              <Th>Location</Th>
              <Th>Parties Involved</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mockCrimeData.map((crime) => (
              <Tr>
                <Td>{crime.type}</Td>
                <Td>{crime.date}</Td>
                <Td isNumeric>{crime.time}</Td>
                <Td>{crime.place}</Td>
                <Td>{crime.parties_involved}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CrimeTable;
