
const ReviewTextarea = ({ reviewText, setReviewText, error }) => {
    const maxCharacters = 250;

    // Get the current character count
    const charactersCount = reviewText.length;

    const handleTextChange = (e) => {
        const input = e.target.value;

        // Only update if the number of characters is less than or equal to maxCharacters
        if (input.length <= maxCharacters) {
            setReviewText(input);
        }
    };

    return (
        <div className="relative">
            <label className="block font-medium">Your Review</label>
            <textarea
                name="review"
                value={reviewText}
                onChange={handleTextChange}
                className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your review here..."
            ></textarea>
            <div className="absolute -top-2 right-2 mt-2 text-sm text-gray-500">
                {charactersCount}/{maxCharacters} characters
            </div>
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
};

export default ReviewTextarea;
