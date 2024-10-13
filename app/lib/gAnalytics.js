'use server';

import { BetaAnalyticsDataClient } from '@google-analytics/data';
const { JWT } = require('google-auth-library');

// Initialize the Analytics Data API client
const analyticsDataClient = new BetaAnalyticsDataClient({
    authClient: new JWT({
        email: process.env.GOOGLE_CLIENT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/analytics.readonly']
    }),
});

// Function to fetch analytics data based on user selection
export async function getAnalyticsData(filter) {
    const propertyId = process.env.GA_PROPERTY_ID;
    const today = new Date();

    let startDate, endDate, dimensions;

    // Determine startDate, endDate, and dimensions based on the filter selection
    switch (filter) {
        case 'thisWeek':
            startDate = new Date(today);
            startDate.setDate(today.getDate() - 7);
            endDate = today;
            dimensions = [{ name: 'date' }];
            break;
        case 'thisMonth':
            startDate = new Date(today.getFullYear(), today.getMonth(), 1); // Start of the month
            endDate = today; // Today
            dimensions = [{ name: 'date' }]; // Group by date
            break;
        case 'thisYear':
            startDate = new Date(today.getFullYear(), 0, 1); // Start of the year
            endDate = today; // Today
            dimensions = [{ name: 'month' }]; // Group by month
            break;
        default:
            throw new Error('Invalid date filter');
    }

    // Format dates as YYYY-MM-DD
    const formatDate = (date) => date.toISOString().split('T')[0];

    try {
        // Fetch user metrics
        const [userResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [{ startDate: formatDate(startDate), endDate: formatDate(endDate) }],
            dimensions: dimensions, // Use the selected dimensions
            metrics: [
                { name: 'totalUsers' },
                { name: 'newUsers' },
            ],
            keepEmptyRows: true,
        });

        // Process user data
        const userData = {
            totalUsers: 0,
            newUsers: 0,
            dailyData: [] // For storing data grouped by date or month
        };

        userResponse.rows.forEach((row) => {
            const dimensionValue = row.dimensionValues[0].value;
            const metrics = row.metricValues.map(m => parseInt(m.value) || 0); // Extract metrics
            userData.totalUsers += metrics[0];
            userData.newUsers += metrics[1];

            // Push the grouped data based on the selected dimension
            userData.dailyData.push({ date: dimensionValue, totalUsers: metrics[0], newUsers: metrics[1] });
        });

        const [pageViewResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [{ startDate: formatDate(startDate), endDate: formatDate(endDate) }],
            dimensions: [{ name: 'pagePath' }],
            metrics: [
                { name: 'screenPageViews' },
                { name: 'userEngagementDuration' } // Add the average engagement time metric
            ],
        });

        let totalPageViews = 0;
        let totalEngagementTime = 0;
        const pageViews = {};
        const engagementTimes = {};

        pageViewResponse.rows.forEach((row) => {
            const pagePath = row.dimensionValues[0].value; // Extract the page path
            const pageViewCount = parseInt(row.metricValues[0].value); // screenPageViews
            const avgEngagementTime = parseFloat(row.metricValues[1].value); // averageEngagementTime

            totalPageViews += pageViewCount;
            totalEngagementTime += avgEngagementTime;

            pageViews[pagePath] = pageViewCount; // Store page views per page path
            engagementTimes[pagePath] = avgEngagementTime; // Store average engagement time per page path
        });


        // Return combined data
        return {
            userData,
            totalPageViews,
            totalEngagementTime,
            engagementTimes,
            pageViews,
        };
    } catch (error) {
        console.error('Error fetching Google Analytics data:', error);
        return null;
    }
}
