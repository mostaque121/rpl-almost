// src/components/UserMetricsChart.jsx
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Helper function to get BST Date
const getBSTDate = (date) => {
    const utcDate = new Date(date);
    const bstOffset = 6 * 60; // BST is UTC+6
    return new Date(utcDate.getTime() + bstOffset * 60 * 1000);
};

const UserMetricsChart = ({ metricsData, dateType }) => {
    const [labels, setLabels] = useState([]);
    const [totalUsers, setTotalUsers] = useState([]);
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const generateLabelsAndData = () => {
            const today = getBSTDate(new Date()); // Get current date in BST
            let labelList = [];
            let totalUsersData = [];
            let newUsersData = [];

            // Generate labels and data based on dateType
            if (dateType === 'thisWeek') {
                for (let i = 0; i < 7; i++) {
                    const date = new Date(today);
                    date.setDate(today.getDate() - i);
                    const dayName = date.toLocaleString('en-US', { weekday: 'short' }); // Get day name (e.g., 'Mon', 'Tue')
                    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, ''); // Format date to 'YYYYMMDD'
                    labelList.unshift(dayName); // Add to beginning of the array

                    // Match data with metricsData
                    const metric = metricsData.find(m => m.date === formattedDate);
                    totalUsersData.unshift(metric ? metric.totalUsers : 0);
                    newUsersData.unshift(metric ? metric.newUsers : 0);
                }
            } else if (dateType === 'thisMonth') {
                const monthDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); // Get number of days in the month
                for (let i = 1; i <= monthDays; i++) {
                    const formattedDate = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(i).padStart(2, '0')}`;
                    labelList.push(i.toString()); // Days of the month (1 to 31)

                    // Match data with metricsData
                    const metric = metricsData.find(m => m.date === formattedDate);
                    totalUsersData.push(metric ? metric.totalUsers : 0);
                    newUsersData.push(metric ? metric.newUsers : 0);
                }
            } else if (dateType === 'thisYear') {
                for (let i = 1; i <= 12; i++) {
                    const monthName = new Date(0, i - 1).toLocaleString('en-US', { month: 'long' }); // Get month name (e.g., 'January')
                    labelList.push(monthName);

                    // Match data with metricsData
                    const formattedDate = `${String(i).padStart(2, '0')}`; // Using month number as the date
                    const metric = metricsData.find(m => m.date === formattedDate); // Monthly data
                    totalUsersData.push(metric ? metric.totalUsers : 0);
                    newUsersData.push(metric ? metric.newUsers : 0);
                }
            }

            // Update state
            setLabels(labelList);
            setTotalUsers(totalUsersData);
            setNewUsers(newUsersData);
        };

        generateLabelsAndData();
    }, [metricsData]);

    const data = {
        labels,
        datasets: [
            {
                label: 'Total Users',
                data: totalUsers,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'New Users',
                data: newUsers,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Metrics Overview',
            },
        },
        scales: {
            y: {
                ticks: {
                    beginAtZero: true, // Ensures Y-axis starts at 0
                    callback: function (value) {
                        if (Number.isInteger(value)) {
                            return value; // Show only integer values
                        }
                        return null; // Don't display non-integer values
                    },
                },
            },
        },
    };

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default UserMetricsChart;
