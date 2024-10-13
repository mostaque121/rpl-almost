
const PageViewTable = ({ data, totalPageViews }) => {
    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '8px', textAlign: 'left', border: '1px solid black' }}>Page</th>
                        <th style={{ padding: '8px', textAlign: 'center', border: '1px solid black' }}>Total Views</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((path) => (
                        <tr key={path}>
                            <td style={{ padding: '8px', border: '1px solid black' }}>{path}</td>
                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>{data[path]}</td>
                        </tr>
                    ))}
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold', border: '1px solid black' }}>Total</td>
                        <td style={{ padding: '8px', fontWeight: 'bold', border: '1px solid black', textAlign: 'center' }}>{totalPageViews}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PageViewTable;