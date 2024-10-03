
const ContactDetails = () => {
    return (
        <div>
            <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
                    Get In Touch With Us
                </h2>
                <p className="mb-6 text-lg text-center text-gray-700">
                    You can also reach us through the following methods:
                </p>
                <div className="space-y-4 text-center">
                    <div className="flex items-center justify-center space-x-3">
                        <span className="font-semibold text-gray-600">Email:</span>
                        <a
                            href="mailto:yourcompany@gmail.com?subject=Inquiry&body=Hello,"
                            className="text-blue-500 hover:underline hover:text-blue-600 transition duration-200"
                        >
                            yourcompany@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <span className="font-semibold text-gray-600">Phone:</span>
                        <a
                            href="tel:+1234567890"
                            className="text-blue-500 hover:underline hover:text-blue-600 transition duration-200"
                        >
                            +123 456 7890
                        </a>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <span className="font-semibold text-gray-600">Address:</span>
                        <span className="text-gray-700">
                            123 Main Street, City, Country, 12345
                        </span>
                    </div>
                </div>

                <div className="mt-8 flex justify-center space-x-4">
                    <a
                        href="mailto:yourcompany@gmail.com?subject=Inquiry&body=Hello,"
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                    >
                        Send Us an Email
                    </a>
                    <a
                        href="tel:+1234567890"
                        className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
                    >
                        Call Us Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ContactDetails;