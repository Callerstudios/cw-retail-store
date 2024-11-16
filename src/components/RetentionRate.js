import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function RetentionRate() {
  const data = {
    // labels: ["New Customer", "Returning Customer"],
    labels: ["New Customer", "Returning Customer"],
    datasets: [
      {
        label: "Sales Distribution",
        data: [60, 40],
        backgroundColor: ["#38B638", "#7154CE"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            return `${value}%`;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default RetentionRate;
