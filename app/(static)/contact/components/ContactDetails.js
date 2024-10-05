
const ContactDetails = () => {
    return (
        <div>
            <section className="mb-12 bg-gray-100 sm:px-6 px-3 py-6 rounded-lg shadow-md">
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
                            href="mailto:rplfasttrack@gmail.com"
                            className="text-blue-500 hover:underline hover:text-blue-600 transition duration-200"
                        >
                            rplfasttrack@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <span className="font-semibold text-gray-600">Phone:</span>
                        <a
                            href="tel:+61483921139"
                            className="text-blue-500 hover:underline hover:text-blue-600 transition duration-200"
                        >
                            +61483921139
                        </a>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <span className="font-semibold text-gray-600">Address:</span>
                        <span className="text-gray-700">
                            26 Clement Way, Melton South, Victoria 3338
                        </span>
                    </div>
                </div>

                <div className="mt-8 flex justify-center space-x-4">
                    <a
                        href="mailto:rplfasttrack@gmail.com"
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                    >
                        Send Us an Email
                    </a>
                    <a
                        href="tel:+61483921139"
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