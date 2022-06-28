import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  const { labels, data, chartTitleText } = props;
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Difficulty",
          data: data.map((item) => item.difficulty),
          backgroundColor: "#E3170A",
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
        },
        {
          label: "Fun",
          data: data.map((item) => item.fun),
          backgroundColor: "#A9E5BB",
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
        },
      ],
    });

    setChartOptions({
      responsive: true,
      maintainAspectRatio: true,
      maxBarThickness: 20,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "white",
            font: {
              size: 10,
            },
          },
        },
        title: {
          display: true,
          text: chartTitleText,
          color: "white",
          font: {
            size: 24,
          },
        },
      },

      scales: {
        x: {
          ticks: {
            maxRotation: 0,
            // minRotation: 30,
            color: "white",
          },
        },
        y: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            color: "white",
          },
        },
      },
    });
  }, []);

  return <Bar options={chartOptions} data={chartData} />;
};

export default BarChart;
