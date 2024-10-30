import { useState } from 'react';

const SelectCourse = ({ suggestions, setSelectedCourse, error, userInput, setUserInput }) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Handle input change and filter suggestions
    const handleChange = (e) => {
        const input = e.currentTarget.value;
        const filtered = suggestions.filter((suggestion) =>
            suggestion.title.toLowerCase().includes(input.toLowerCase())
        );

        setUserInput(input);
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
    };

    // Show suggestions on input focus
    const handleFocus = () => {
        if (suggestions.length) {
            setFilteredSuggestions(suggestions);
            setShowSuggestions(true);
        }
    };

    // Hide suggestions on blur unless there's a userInput value
    const handleBlur = (e) => {
        // Check if blur event is related to the suggestion click
        if (!e.relatedTarget || !e.relatedTarget.classList.contains('suggestion-item')) {
            setShowSuggestions(false);
        }
    };

    // Handle suggestion click
    const handleClick = (suggestion) => {
        setFilteredSuggestions([]);
        setUserInput(suggestion.title);
        setShowSuggestions(false);

        // Pass the selected option's ID back to the parent
        if (setSelectedCourse) {
            setSelectedCourse(suggestion._id);
        }
    };

    // Render the suggestions list
    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <div className="absolute w-full border border-gray-300 rounded-lg shadow-lg mt-1 max-h-48 overflow-auto bg-white z-50">
                {filteredSuggestions.map((suggestion) => (
                    <h1
                        key={suggestion._id}
                        className="suggestion-item p-2 cursor-pointer text-sm md:text-base text-ellipsis overflow-hidden text-nowrap hover:bg-blue-300 transition-colors duration-200"
                        onMouseDown={(e) => e.preventDefault()} // Prevent blur on suggestion click
                        onClick={() => handleClick(suggestion)}
                    >
                        {suggestion.title}
                    </h1>
                ))}
            </div>
        ) : (
            <div className="absolute w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-lg bg-white z-50">
                <em>No suggestions available</em>
            </div>
        );
    };

    return (
        <div className="relative w-full mx-auto">
            <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={userInput}
                placeholder="Please Select a course"
            />
            {showSuggestions && <SuggestionsListComponent />}
            {error && (
                <div className="mt-2 text-red-600">
                    {error} {/* Display error message */}
                </div>
            )}
        </div>
    );
};

export default SelectCourse;
