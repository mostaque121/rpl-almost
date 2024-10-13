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


const PageViewTable = ({ pageViews, totalPageViews, totalEngagementTime, engagementTimes }) => {

    return (
        <div>
            <table className="border-collapse w-full">
                <thead>
                    <tr className="border border-black">
                        <th className="py-2 px-3 text-left">Page</th>
                        <th className="py-2 px-3 text-right">Total Views</th>
                        <th className="py-2 px-3 text-right">Total Engage Time</th>
                        <th className="py-2 px-3 text-right">Avg Engage Time</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(pageViews).map((path, index) => (
                        <tr key={path} className={`border ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                            <td className="py-2 px-3 ">{path}</td>
                            <td className="py-2 px-3 text-right">{pageViews[path]}</td>
                            <td className="py-2 px-3 text-right">
                                {engagementTimes[path] !== undefined ? formatTime(engagementTimes[path]) : 'N/A'}
                            </td>
                            <td className="py-2 px-3 text-right">
                                {engagementTimes[path] !== undefined ? getAvgEngageTime(engagementTimes[path], pageViews[path]) : 'N/A'}
                            </td>
                        </tr>
                    ))}
                    <tr className="border border-black">
                        <td className="py-2 px-3 font-bold">Total</td>
                        <td className="py-2 px-3 font-bold text-right">{totalPageViews}</td>
                        <td className="py-2 px-3 font-bold text-right">{formatTime(totalEngagementTime)}</td>
                        <td className="py-2 px-3 font-bold text-right">{getAvgEngageTime(totalEngagementTime, totalPageViews)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PageViewTable;
