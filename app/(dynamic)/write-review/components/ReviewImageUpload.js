import axios from 'axios';
import { useState } from 'react';
import { FaTimes, FaUpload } from 'react-icons/fa';

const ReviewImageUpload = ({ reviewImageUrl, setReviewImageUrl }) => {
    const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
    const [uploading, setUploading] = useState(false); // Track upload status

    const handleReviewImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            await uploadImage(file); // Call the upload function
        }
    };

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'review-image'); // Replace with your Cloudinary upload preset

        try {
            setUploading(true); // Set uploading to true while uploading
            const response = await axios.post('https://api.cloudinary.com/v1_1/dbneycd8g/image/upload', formData, {
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    setUploadProgress((loaded / total) * 100); // Update upload progress
                },
            });

            const imageUrl = response.data.secure_url; // Get the uploaded image URL
            setReviewImageUrl(imageUrl); // Set the uploaded image URL to state
            setUploadProgress(0); // Reset upload progress
        } catch (error) {
            console.error('Error uploading the image:', error);
            setUploadProgress(0); // Reset upload progress on error
        } finally {
            setUploading(false); // Set uploading to false after upload completes
        }
    };

    const handleImageRemove = () => {
        setReviewImageUrl(''); // Reset the image URL
        setUploadProgress(0); // Reset upload progress
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg">

            {!reviewImageUrl ? (
                <>
                    {/* Hidden input */}
                    <input
                        type="file"
                        id="reviewImage"
                        accept="image/*"
                        onChange={handleReviewImageChange}
                        className="hidden"
                    />

                    {/* Custom button with an icon */}
                    <label
                        htmlFor="reviewImage"
                        className="flex items-center justify-center cursor-pointer px-8 py-4 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                    >
                        <FaUpload className="mr-2 text-purple-600" />
                        <span className="font-semibold">Add an image to review</span>
                    </label>

                    {/* Optional instruction text */}
                    <p className="mt-2 text-white text-sm">
                        Click above to upload an image (JPG, PNG, GIF)
                    </p>
                </>
            ) : (
                <div className="relative">
                    <img
                        src={reviewImageUrl} // Use the Cloudinary URL for preview
                        alt=" Preview"
                        className="mt-4  w-auto h-32 object-contain border-4 border-purple-500 shadow-lg"
                    />
                    <button
                        onClick={handleImageRemove}
                        className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition duration-300"
                        title="Remove Image"
                    >
                        <FaTimes />
                    </button>
                </div>
            )}
            {/* Show upload progress bar */}
            {uploadProgress > 0 && (
                <div className="mt-2 w-full bg-gray-200 rounded-full">
                    <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                    />
                </div>
            )}
            {/* Show uploading status */}
            {uploading && <p className="text-white mt-2">Uploading...</p>}
        </div>
    );
};

export default ReviewImageUpload;
