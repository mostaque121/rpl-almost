const formatTime = (seconds) => {
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    // Display format based on the amount of time
    if (days > 0) {
        return `${days}d ${hours}h`; // If more than 1 day, show days and hours only
    } else if (hours > 0) {
        return `${hours}h ${minutes}m`; // If more than 1 hour, show hours and minutes only
    } else if (minutes > 0) {
        return `${minutes}m ${remainingSeconds}s`; // If more than 1 minute, show minutes and seconds
    } else {
        return `${remainingSeconds}s`; // Show seconds only if less than 1 minute
    }
};
const getAvgEngageTime = (engagementTimes, pageViews) => {
    const avgEngagementTime = engagementTimes / pageViews;
    const formateAvgEngagementTime = formatTime(avgEngagementTime);
    return formateAvgEngagementTime;
}
const UserVisitTable = ({ data, totalEngagementTime }) => {

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">User Visit Statistics</h1>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 text-left p-4">Metric</th>
                        <th className="border border-gray-300 text-left p-4">Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-4">Total User Visit</td>
                        <td className="border border-gray-300 p-4">{data.totalUsers}</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4">Total New User Visit</td>
                        <td className="border border-gray-300 p-4">{data.newUsers}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-4">Avg Engagement of User</td>
                        <td className="border border-gray-300 p-4">{getAvgEngageTime(totalEngagementTime, data.totalUsers)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserVisitTable;
