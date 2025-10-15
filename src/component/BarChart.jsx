import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
    const data = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            data: [100, 200, 150, 400, 300, 500, 250],
            backgroundColor: '#ffffff',
            borderRadius: 10,
            barThickness: 10
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { ticks: { color: 'white' }, grid: { display: false } },
            y: { ticks: { color: 'white' }, grid: { display: false } }
        }
    };

    return <Bar data={data} options={options} width="160" height="60" />;
};

export default BarChart;