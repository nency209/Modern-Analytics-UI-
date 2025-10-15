import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircleChart2 = () => {
    const data = {
        datasets: [{
            data: [70, 110],
            backgroundColor: ['black', '#05CD99'],
            borderWidth: 0,
            borderRadius: 4,
            cutout: '90%',
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    };

    return (
        <div className="relative w-[160px] h-[160px] rotate-0 lg:mx-0">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-sm text-center">
                <p>Safety</p>
                <p className="font-bold text-xl">9.3</p>
                <p>Total Score</p>
            </div>
        </div>
    );
};

export default CircleChart2;