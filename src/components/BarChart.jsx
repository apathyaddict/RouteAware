import React from "react";
import { Box } from "@chakra-ui/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const barLabels = [
    "Hollywood",
    "Venice Beach",
    "Beverly Hills",
    "Santa Monica",
    "Downtown LA",
  ];

  const barData = {
    labels: barLabels,
    datasets: [
      {
        label: "Daytime reports",
        // data: [125, 200, 80, 100, 150], // enter data manually
        data: barLabels.map(() => Math.floor(Math.random() * 200) + 50), // create random data array
        backgroundColor: ["rgb(233, 233, 93)"],
      },
      {
        label: "Nightime reports",
        // data: [125, 200, 80, 100, 150], // enter data manually
        data: barLabels.map(() => Math.floor(Math.random() * 300) + 100), // create random data array
        backgroundColor: ["rgba(53, 162, 235, 0.5)"],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Crime Reports",
      },
    },
  };

  return (
    <Box className="Box" h="300px" align="center">
      <Bar data={barData} options={barOptions} />
    </Box>
  );
};

export default BarChart;
