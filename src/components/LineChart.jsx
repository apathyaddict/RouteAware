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
import { Line } from "react-chartjs-2";

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

const LineChart = () => {
  const lineLabels = ["January", "February", "March", "April", "May"];

  const lineData = {
    labels: lineLabels,
    datasets: [
      {
        label: "Robbery",
        // data: [125, 200, 80, 100, 150], // enter data manually
        data: lineLabels.map(() => Math.floor(Math.random() * 200) + 50), // create random data array,
        borderColor: ["rgb(197, 126, 197)"],
        backgroundColor: ["rgb(197, 126, 197)"],
      },
      {
        label: "Shooting",
        // data: [125, 200, 80, 100, 150], // enter data manually
        data: lineLabels.map(() => Math.floor(Math.random() * 300) + 100), // create random data array,
        borderColor: ["gold"],
        backgroundColor: ["gold"],
      },
      {
        label: "Assault",
        // data: [125, 200, 80, 100, 150], // enter data manually
        data: lineLabels.map(() => Math.floor(Math.random() * 300) + 100), // create random data array,
        borderColor: ["rgba(53, 162, 235, 0.5)"],
        backgroundColor: ["rgba(53, 162, 235, 0.5)"],
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Crime Trends",
      },
    },
  };

  return (
    <Box className="Box" w="100%" h="300px" align="center" pb={2}>
      <Line data={lineData} options={lineOptions} />
    </Box>
  );
};

export default LineChart;
