import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SalesChart = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Sales',
        data: [450, 200, 300, 250, 350, 500, 400, 300, 200, 100, 450, 500],
        borderColor: '#4fc3f7',
        backgroundColor: 'rgba(79,195,247,0.2)',
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { ticks: { color: 'white' }, grid: { display: false } },
      y: { ticks: { color: 'white' }, grid: { color: '#1e3a8a' } },
    },
  };

  return <Line data={data} options={options} height="120px" />;
};

export default SalesChart;