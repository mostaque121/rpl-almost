import Image from 'next/image';
import Link from 'next/link';
import { MdStar } from "react-icons/md";

// Helper function to format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const ReviewCard = ({ review }) => {
    const { userImage, userName, reviewText, reviewImage, givenStar, purchasedCourse, createdAt } = review;

    return (
        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
            {/* User Info */}
            <div className="flex  items-center mb-6">
                <div className="relative shrink-0 w-14 h-14 mr-4">
                    {userImage ? (
                        <Image
                            src={userImage}
                            alt={`${userName}'s profile`}
                            fill
                            className="rounded-full object-cover"
                        />
                    ) : (
                        <div className="bg-gray-300 rounded-full w-full h-full flex items-center justify-center">
                            <span className="text-xl font-bold text-indigo-500">{userName.charAt(0)}</span>
                        </div>
                    )}
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between w-full'>
                        <h3 className="text-lg font-semibold">{userName}</h3>
                        <p className="text-sm text-gray-500">{formatDate(createdAt)}</p>
                    </div>

                    {/* Stars */}
                    <div className="flex mb-1">
                        {[...Array(5)].map((_, index) => (
                            <MdStar
                                key={index}
                                className={`h-5 w-5 ${index < givenStar ? 'text-yellow-500' : 'text-gray-300'}`}
                                style={{ marginRight: '2px' }}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* Course Link */}
            <Link href={`/courses/${purchasedCourse.link}`}>
                <p className="text-charcoal font-semibold text-sm bg-light-gray hover:bg-light-gray-hover px-2 py-1 rounded-md transition-all mb-4">{purchasedCourse.title}</p>
            </Link>

            {/* Review Text */}
            <p className="text-dark-gray mb-4">"{reviewText}"</p>

            {/* Review Image */}
            {reviewImage && (
                <div className="mt-4">
                    <Image
                        src={reviewImage}
                        alt="Review image"
                        width={500}
                        height={500}
                        className="rounded-lg h-40 w-auto mx-auto object-contain"
                    />
                </div>
            )}
        </div>
    );
};

export default ReviewCard;
