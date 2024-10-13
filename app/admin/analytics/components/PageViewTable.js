const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
};

const PageViewTable = ({ pageViews, totalPageViews, totalEngagementTime, engagementTimes }) => {
    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '8px', textAlign: 'left', border: '1px solid black' }}>Page</th>
                        <th style={{ padding: '8px', textAlign: 'center', border: '1px solid black' }}>Total Views</th>
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
                        </tr>
                    ))}
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold', border: '1px solid black' }}>Total</td>
                        <td style={{ padding: '8px', fontWeight: 'bold', border: '1px solid black', textAlign: 'center' }}>{totalPageViews}</td>
                        <td style={{ padding: '8px', fontWeight: 'bold', border: '1px solid black', textAlign: 'center' }}>{formatTime(totalEngagementTime)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PageViewTable;
