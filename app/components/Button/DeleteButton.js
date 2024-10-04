'use client'
import { useState } from 'react';

const DeleteButton = ({ handleClick, whenDisable = false, loading, loadingText = 'Deleting...', defaultText = 'Delete' }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeleteClick = () => {
        if (showConfirm) {
            handleClick(); // Call the parent function to delete
            setShowConfirm(false); // Reset confirmation state after action
        } else {
            setShowConfirm(true); // Show confirmation message
        }
    };

    const handleCancel = () => {
        setShowConfirm(false); // Reset to initial state
    };

    return (
        <div className="relative block">
            {showConfirm && (
                <div className="absolute bottom-10 mb-2 z-10 right-0 bg-white p-3 shadow-sm border rounded-md ">
                    <span className="block mb-2 text-sm">Are you sure?</span>
                    <div className="flex justify-center space-x-2">
                        <button
                            onClick={handleDeleteClick}
                            className="bg-red-500 text-sm text-white px-3 py-1 rounded hover:bg-red-600"
                            disabled={loading}
                        >
                            {loading ? loadingText : 'Confirm'}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-light-gray-hover text-sm text-black px-3 py-1 rounded hover:bg-light-gray-active"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            <button
                type="submit"
                className={`w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ${loading || whenDisable ? 'cursor-not-allowed' : ''}`}
                disabled={loading || whenDisable}
                onClick={handleDeleteClick}
            >
                {loading ? (
                    <div className="flex items-center justify-center">
                        <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z"
                            ></path>
                        </svg>
                        {loadingText}
                    </div>
                ) : (
                    defaultText
                )}
            </button>
        </div>
    );
};

export default DeleteButton;
