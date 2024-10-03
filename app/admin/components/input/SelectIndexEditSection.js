'use client';

const SelectIndexEditSection = ({ availableItems, selectedIndex, setSelectedIndex }) => {
    const handleChange = (e) => {
        setSelectedIndex(e.target.value);
    };

    return (
        <div className="w-full">
            <select
                id="service"
                name="service"
                value={selectedIndex}
                onChange={handleChange}
                className="w-full px-4 h-10 py-2 border border-gray-300 bg-dark-text rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <>
                    <option value="">Choose an index</option>
                    {availableItems.map((item) => (
                        <option key={item._id} value={item.index}>
                            {item.index}. {item.title}
                        </option>
                    ))}

                </>
            </select>
        </div>
    );
};

export default SelectIndexEditSection;

