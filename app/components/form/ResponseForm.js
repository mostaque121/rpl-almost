'use client';

import { useState } from 'react';

const ResponseForm = ({ title = 'RPL' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: title ? title : ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const res = await fetch('/api/response', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                // Set form data, including interest
                setFormData({ name: '', email: '', phone: '', message: '', interest: title ? title : '' });
                setSuccess(true);
            } else {
                const { message } = await res.json();
                setError(message || 'Something went wrong');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="bg-custom-gradient py-10  rounded-lg px-8 w-full md:w-96 shadow-md">
                {title && (
                    <h1 className="text-lg font-bold text-yellow-200 text-center mb-3 leading-tight">
                        Interested in {title}?
                    </h1>
                )}
                <h1 className="text-center text-2xl font-semibold text-white mb-10">
                    Get your free consultants!
                </h1>

                {!success ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            className="w-full p-2 border border-gray-300 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                        <input
                            className="w-full p-2 border border-gray-300 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                        <input
                            className="w-full p-2 border border-gray-300 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            required
                        />
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                        ></textarea>
                        <button
                            className="block w-full mx-auto bg-gray-900 text-gray-100 mt-6 text-lg px-5 py-1  rounded-md hover:scale-95 active:scale-90 duration-200 transition-all ease-in-out"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                ) : (
                    <div className="text-center mt-5">
                        <div className="animate-bounce mb-2">
                            <svg
                                className="w-12 h-12 text-green-600 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4"
                                />
                            </svg>
                        </div>
                        <p className="text-green-600 text-xl">Thanks for your response!</p>
                        <p className="text-gray-800 text-lg">We will communicate with you soon.</p>
                    </div>
                )}

                {error && (
                    <p className="text-red-500 text-center mt-3">{error}</p>
                )}
            </div>
        </div>
    );
};

export default ResponseForm;
