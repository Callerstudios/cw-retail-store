import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { callback } from "chart.js/helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SalesChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales Chart",
        data: [
          "100000",
          "200000",
          "700000",
          "300000",
          "1100000",
          "500000",
          "600000",
          "400000",
          "1200000",
          "800000",
          "900000",
          "1000000",
        ],
        backgroundColor: "#4a90e2",
        borderColor: "transparent",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
    //   x: {
    //     title: {
    //       display: true,
    //       text: "Sales Range",
    //     },
    //   },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            if (value >= 1000000) return `${value / 1000000}m`;
            if (value >= 1000) return `${value / 1000}k`;
            return value;
          },
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
}

export default SalesChart;
