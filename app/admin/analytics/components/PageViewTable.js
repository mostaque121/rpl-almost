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
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '8px', textAlign: 'left', border: '1px solid black' }}>Page</th>
                        <th style={{ padding: '8px', textAlign: 'center', border: '1px solid black' }}>Total Views</th>
                        <th style={{ padding: '8px', textAlign: 'center', border: '1px solid black' }}>Total Engage Time</th>
                        <th style={{ padding: '8px', textAlign: 'center', border: '1px solid black' }}>Avg Engage Time</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(pageViews).map((path) => (
                        <tr key={path}>
                            <td style={{ padding: '8px', border: '1px solid black' }}>{path}</td>
                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>{pageViews[path]}</td>
                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>
                                {engagementTimes[path] !== undefined ? formatTime(engagementTimes[path]) : 'N/A'}
                            </td>
                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>
                                {engagementTimes[path] !== undefined ? getAvgEngageTime(engagementTimes[path], pageViews[path]) : 'N/A'}
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold', border: '1px solid black' }}>Total</td>
                        <td style={{ padding: '8px', fontWeight: 'bold', border: '1px solid black', textAlign: 'center' }}>{totalPageViews}</td>
                        <td style={{ padding: '8px', fontWeight: 'bold', border: '1px solid black', textAlign: 'center' }}>{formatTime(totalEngagementTime)}</td>
                        <td style={{ padding: '8px', fontWeight: 'bold', border: '1px solid black', textAlign: 'center' }}>{getAvgEngageTime(totalEngagementTime, totalPageViews)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PageViewTable;
