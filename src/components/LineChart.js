import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart(props) {
  const { chartData, chartLabels } = props;
  const chartOptions = {
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
        display: false,
        text: "title",
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
          minRotation: 30,
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
  };
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Difficulty",
        data: chartData.map((item) => item.difficulty),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Fun",
        data: chartData.map((item) => item.fun),
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  return (
    <div className="App">
      <Line data={data} options={chartOptions} />
    </div>
  );
}
export default LineChart;
