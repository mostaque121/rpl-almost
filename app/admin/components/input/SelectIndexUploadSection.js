'use client';

import { useEffect } from 'react';

const SelectIndexUploadSection = ({ availableItems, selectedIndex, setSelectedIndex }) => {
    // Calculate the maximum index from available items or default to 0
    const maxIndex = availableItems.length > 0
        ? Math.max(...availableItems.map((item) => item.index))
        : 0;

    // Determine the next index
    const nextIndex = maxIndex + 1;

    // Set the selected index to nextIndex only when the component mounts
    useEffect(() => {
        setSelectedIndex(nextIndex);
    }, [nextIndex]); // Dependency array includes nextIndex

    // Handle change event for the select input
    const handleChange = (e) => {
        const selectedValue = e.target.value;
        // Ensure the selected value is a number before setting it
        setSelectedIndex(selectedValue ? Number(selectedValue) : nextIndex);
    };

    return (
        <div className="w-full">
            <select
                id="index-select"
                name="index"
                onChange={handleChange}
                value={selectedIndex}
                className="w-full px-4 h-10 py-2 border border-gray-300 bg-dark-text rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {availableItems.length === 0 ? (
                    <option value={nextIndex} className="bg-blue-100 font-bold">
                        {nextIndex} (New Index)
                    </option>
                ) : (
                    <>
                        <option value="" disabled>
                            Choose an index
                        </option>
                        {availableItems.map((item) => (
                            <option key={item._id} value={item.index}>
                                {item.index}. {item.title}
                            </option>
                        ))}
                        <option value={nextIndex} className="bg-blue-100 font-bold">
                            {nextIndex} (New Index)
                        </option>
                    </>
                )}
            </select>
        </div>
    );
};

export default SelectIndexUploadSection;
