'use client'
import DeleteButton from '@/app/components/Button/DeleteButton';
import { revalidateAfterEditReview } from '@/app/lib/action';
import Image from 'next/image'; // Import Image from next/image
import { useState } from 'react';
import toast from 'react-hot-toast';

const ReviewCard = ({ review }) => {
    const [deleting, setDeleting] = useState(false);
    const [approving, setApproving] = useState(false);
    const [reviews, setReviews] = useState(review);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleApprove = async (id) => {
        setApproving(true);
        try {
            const res = await fetch(`/api/admin/reviews/all`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            await revalidateAfterEditReview();
            toast.success('Approved successfully!', {
                duration: 3000,
                position: 'top-right',
            });
        } catch (error) {
            toast.error('Approval failed. Please try again.', {
                duration: 3000,
                position: 'top-right',
            });
        } finally {
            setApproving(false);
        }
    };

    const handleDelete = async (id) => {
        setDeleting(true);
        try {
            const res = await fetch(`/api/admin/reviews/all`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            await revalidateAfterEditReview();
            toast.success('Deleted successfully!', {
                duration: 3000,
                position: 'top-right',
            });
        } catch (error) {
            toast.error('Delete failed. Please try again.', {
                duration: 3000,
                position: 'top-right',
            });
        } finally {
            setDeleting(false);
        }
    };

    const { userName, userImage, userEmail, reviewImage, purchasedCourse, reviewText, givenStar, createdAt, approved } = reviews;

    return (
        <div className="white sm:w-72 float-left sm:ml-5 bg-white w-full shadow-md rounded-lg px-4 pb-4  mb-4">
            <p className="text-dark-gray block text-right py-4 text-xs">{formatDate(createdAt)}</p>
            <div className='flex items-start flex-wrap gap-2 w-full'>
                <Image
                    src={userImage}
                    alt={userName}
                    width={64} // Set width for Image
                    height={64} // Set height for Image
                    className="rounded-full mr-4"
                />
                <div>
                    <h3 className=" text-dark-gray font-semibold">{userName}</h3>
                    <p className="text-dark-gray text-xs">{userEmail}</p>
                </div>
            </div>


            <div className="mt-2">
                {Array.from({ length: givenStar }).map((_, index) => (
                    <span key={index} className="text-yellow-400 text-2xl">★</span>
                ))}
                {Array.from({ length: 5 - givenStar }).map((_, index) => (
                    <span key={index} className="text-gray-300">★</span>
                ))}
            </div>
            {purchasedCourse && <p className="text-gray-400 text-dark-accent text-sm">{purchasedCourse.title}</p>}

            <p className="mt-2 text-charcoal">{reviewText}</p>
            {reviewImage && (
                <Image
                    src={reviewImage}
                    alt="Review"
                    width={300} // Set width for review image
                    height={200} // Set height for review image
                    className="mt-2 rounded-md w-60 h-auto"
                />
            )}
            <div className="mt-4 flex space-x-2">
                {!approved && (
                    <button
                        onClick={() => handleApprove(review._id)}
                        className={`bg-blue-500 text-white px-3 py-1 w-full rounded-md hover:bg-blue-600 flex items-center justify-center ${approving ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={approving}
                    >
                        {approving ? (
                            <span className="loader-btn"></span>
                        ) : (
                            'Approve'
                        )}
                    </button>
                )}

                <div className='block w-full'>
                    <DeleteButton loading={deleting} handleClick={() => handleDelete(review._id)} />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
