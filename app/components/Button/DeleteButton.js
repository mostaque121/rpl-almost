'use client';
import { useState } from 'react';

// Modal Component
const Modal = ({ isOpen, onClose, onConfirm, loading, loadingText }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg mb-4">Are you sure?</h2>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        disabled={loading}
                    >
                        {loading ? loadingText : 'Confirm'}
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

// DeleteButton Component
const DeleteButton = ({ handleClick, whenDisable = false, loading, loadingText = 'Deleting...', defaultText = 'Delete' }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true); // Show the modal when the delete button is clicked
    };

    const handleConfirmDelete = () => {
        handleClick(); // Call the parent function to delete
        setShowModal(false); // Close the modal after action
    };

    return (
        <div className="relative block">
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirmDelete}
                loading={loading}
                loadingText={loadingText}
            />
            <button
                type="button"
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
