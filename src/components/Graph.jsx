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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({ data }) => {
    const chartData = {
        labels: data.map((item) => item.topic || 'Unknown'), 
        datasets: [
            {
                label: 'Intensity',
                data: data.map((item) => item.intensity),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Insights by Topic',
            },
        },
    };

    return (
        <div className="graph">
            <h3>Insights Graph</h3>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Graph;

