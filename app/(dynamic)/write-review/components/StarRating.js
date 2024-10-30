// StarRating.js
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; // Import star icons

const StarRating = ({ error, rating, setRating }) => {

    const handleClick = (index) => {
        const newRating = index + 1;
        setRating(newRating);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-cyan-500 to-blue-600  rounded-lg shadow-lg">
            <label className="block font-medium text-lg text-white mb-4">Rate the Course</label>
            <div className="flex space-x-2 mb-2">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className="cursor-pointer transition-transform hover:scale-110"
                    >
                        {rating > index ? (
                            <AiFillStar size={36} className="text-yellow-300" />
                        ) : (
                            <AiOutlineStar size={36} className="text-gray-300" />
                        )}
                    </div>
                ))}
            </div>
            <p className="text-white text-sm text-center">
                {rating ? `You rated this course ${rating} out of 5` : 'Please rate this course'}
            </p>
            {/* Conditionally render error message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
    );
};

export default StarRating;
