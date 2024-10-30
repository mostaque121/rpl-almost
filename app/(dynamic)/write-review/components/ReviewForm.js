'use client';
import { useState } from "react";
import { toast } from 'react-hot-toast';
import InputField from './InputField';
import ProfileImageUpload from './ProfileImageUpload';
import ReviewImageUpload from './ReviewImageUpload';
import ReviewTextarea from './ReviewTextarea';
import SelectCourse from './SelectCourse';
import StarRating from './StarRating';
import SubmitButton from "./SubmitButton";

const ReviewForm = ({ availableCourses }) => {
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [reviewImageUrl, setReviewImageUrl] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState({});
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Submitting state
    const [userInput, setUserInput] = useState('');

    const resetForm = () => {
        setName('');
        setProfileImageUrl('');
        setSelectedCourseId(null);
        setReviewText('');
        setReviewImageUrl('');
        setRating(0);
        setErrors({});
        setUserInput('')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        // Validate required fields
        const newErrors = {};
        if (!name) newErrors.name = "Name is required.";
        if (!profileImageUrl) newErrors.userImage = "Profile image is required.";
        if (!selectedCourseId) newErrors.course = "Please select a course.";
        if (!reviewText) newErrors.review = "Review text is required.";
        if (rating === 0) newErrors.rating = "Rating is required.";

        // If there are errors, set them and stop the submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true); // Start submitting

        // Prepare the data for submission
        const reviewData = {
            userName: name,
            userImage: profileImageUrl,
            purchasedCourse: selectedCourseId,
            reviewText,
            reviewImage: reviewImageUrl,
            givenStar: rating,
        };

        try {
            const response = await fetch('/api/review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reviewData),
            });

            const data = await response.json();

            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast.success("Review posted! It will be visible after approval.");
            resetForm();
        } catch (error) {
            console.error("Error submitting review:", error);
            setErrors(error);
            toast.error("Error posting review. Please try again.");
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    };

    // Determine if the button should be disabled
    const isButtonDisabled = !name || !profileImageUrl || !selectedCourseId || !reviewText || !reviewImageUrl || rating === 0 || isSubmitting;

    return (
        <div className="max-w-3xl mx-auto bg-white pb-10 py-8 sm:px-8 px-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Post a Review</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <InputField
                        type={"text"}
                        label="Name"
                        value={name}
                        setValue={setName}
                        placeholder="Your Name"
                        error={errors.name} // Pass the specific error for the name field
                    />
                </div>


                {/* Upload Profile Image */}
                <div>
                    <h1>User Profile</h1>
                    <ProfileImageUpload profileImageUrl={profileImageUrl} setProfileImageUrl={setProfileImageUrl} />
                    {errors.userImage && <span className="text-red-500">{errors.userImage}</span>}
                </div>

                {/* Course with Searchable Select */}
                <div>
                    <label className="block font-medium">Course Purchased</label>
                    <SelectCourse
                        suggestions={availableCourses}
                        setSelectedCourse={setSelectedCourseId}
                        error={errors.course}
                        userInput={userInput}
                        setUserInput={setUserInput}
                    />
                </div>

                {/* Review Text */}
                <ReviewTextarea
                    reviewText={reviewText}
                    setReviewText={setReviewText}
                    error={errors.review}
                />

                {/* Upload Course Image */}
                <div>
                    <h1>Add Image (optional)</h1>
                    <ReviewImageUpload reviewImageUrl={reviewImageUrl} setReviewImageUrl={setReviewImageUrl} />
                </div>

                {/* Star Rating */}
                <StarRating rating={rating} setRating={setRating} error={errors.rating} />

                {/* Submit Button */}
                <SubmitButton
                    isSubmitting={isSubmitting}
                />
            </form>
        </div>
    );
};

export default ReviewForm;
