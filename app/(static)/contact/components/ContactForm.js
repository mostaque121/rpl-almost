'use client';
import { revalidateAfterResponse } from '@/app/lib/action';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: '',
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
                // Reset form data and handle success
                setFormData({ name: '', email: '', phone: '', message: '', interest: '' });
                setSuccess(true);
                toast.success('Message sent successfully!')
                revalidateAfterResponse(); // Revalidate data if necessary
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

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="mb-2 font-semibold">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="mb-2 font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="phone" className="mb-2 font-semibold">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="message" className="mb-2 font-semibold">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 rounded resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className={`bg-blue-500 block mx-auto text-white py-2 px-4 rounded font-semibold transition-all duration-200 ease-in-out ${loading ? 'cursor-not-allowed opacity-50' : 'hover:scale-95 hover:bg-blue-600'
                        }`}
                    disabled={loading} // Disable the button while loading
                >
                    {loading ? (
                        <span className="flex items-center justify-center space-x-2">
                            <svg
                                className="animate-spin h-5 w-5 text-white"
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
                                    d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                ></path>
                            </svg>
                            <span>Sending...</span>
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
            {success && <p className="text-green-500 text-center mb-4">Message sent successfully!</p>}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        </div>
    );
};

export default ContactForm;
