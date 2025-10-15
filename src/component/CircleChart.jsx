import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircleChart = () => {
    const data = {
        datasets: [{
            data: [45, 115, 90],
            backgroundColor: ['blue', 'black', '#0075FF'],
            borderWidth: 0,
            borderRadius: 4,
            cutout: '90%',
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true, // Keep it true to maintain the circle shape within its container
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    };

    const progress = 90;

    return (
        <div className="relative w-full max-w-[250px] mx-auto flex flex-col items-center justify-center">
            {/* Chart Container */}
            <div className="relative w-full" style={{ transform: 'rotate(75deg)' }}>
                <Doughnut data={data} options={options} />
                {/* Centered Icon - rotated back to normal */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotate(-75deg)' }}>
                    <i className="fa-regular fa-face-smile p-3 rounded-full bg-[#0075FF] text-2xl text-white"></i>
                </div>
            </div>
            
            {/* Overlay Text Box */}
            <div className="absolute bottom-[-10px] sm:bottom-0 flex justify-between items-center w-full max-w-[260px] h-20 p-2 rounded-3xl bg-black bg-opacity-75">
                <p className="text-[#A0AEC0] text-sm">0%</p>
                <div className="flex flex-col text-center">
                    <p className="font-bold text-3xl font-['Plus_Jakarta_Display']">{progress}%</p>
                    <p className="text-[#A0AEC0] text-xs">Based on likes</p>
                </div>
                <p className="text-[#A0AEC0] text-sm">100%</p>
            </div>
        </div>
    );
};

export default CircleChart;