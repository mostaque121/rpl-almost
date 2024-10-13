'use client'

import { getAnalyticsData } from '@/app/lib/gAnalytics';
import { useEffect, useState } from 'react';
import PageViewTable from './PageViewTable';
import UserMetricsChart from './UserMetricsChart';
import UserVisitTable from './UserVisitTable';

export default function AnalyticsDashboard() {
    const [filter, setFilter] = useState('thisWeek');
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    // Fetch data when component mounts or when dateFilter or userType changes
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const fetchedData = await getAnalyticsData(filter);
            setData(fetchedData);
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleFetchData = async () => {
        setLoading(true)
        const fetchedData = await getAnalyticsData(filter);
        setData(fetchedData);
        setLoading(false)
    }

    return (
        <div className="sm:px-6 px-3 py-16 max-w-4xl mx-auto bg-white ">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Analytics Dashboard</h1>

            <div className="flex items-center justify-center mb-6 space-x-4">
                <select
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="thisWeek">This Week</option>
                    <option value="thisMonth">This Month</option>
                    <option value="thisYear">This Year</option>
                </select>
                <button
                    onClick={handleFetchData}
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Load Analytics Data
                </button>
            </div>

            <div>
                {loading ? (
                    <div className="flex justify-center bg-black bg-opacity-50 z-[1000] fixed inset-0 h-screen w-full items-center">
                        <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                        </svg>
                    </div>
                ) : data ? (
                    <>
                        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">User Metrics</h2>
                        <UserVisitTable data={data.userData} />
                        <div className='h-7'></div>
                        <UserMetricsChart metricsData={data.userData.dailyData} dateType={filter} />

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Page Views</h2>
                        <PageViewTable totalPageViews={data.totalPageViews} pageViews={data.pageViews} totalEngagementTime={data.totalEngagementTime} engagementTimes={data.engagementTimes} />
                    </>
                ) : (
                    <p className="text-gray-500">No data available. Please apply filters and click "Load Analytics Data."</p>
                )}
            </div>
        </div>
    )
}
