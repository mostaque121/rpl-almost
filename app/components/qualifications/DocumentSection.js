import { FaBriefcase, FaFileAlt, FaGraduationCap, FaIdCard } from 'react-icons/fa';

const documents = [
    {
        id: "id",
        title: "Government ID",
        icon: <FaIdCard className="w-6 h-6 text-blue-600" />,
        description: "Includes your PASSPORT, Visa (if not Residents in Australia) , Photo ID, Driving licence , Medicare."
    },
    {
        id: "education",
        title: "Education Certificates",
        icon: <FaGraduationCap className="w-6 h-6 text-green-600" />,
        description: "Certified copies of your previous education, such as diplomas, transcripts, or certificates."
    },
    {
        id: "experience",
        title: "Work Experience",
        icon: <FaBriefcase className="w-6 h-6 text-purple-600" />,
        description: "A record of your relevant work experience, including job titles, responsibilities, and accomplishments."
    },
    {
        id: "otherDocs",
        title: "Supporting Documents",
        icon: <FaFileAlt className="w-6 h-6 text-orange-600" />,
        description: "Any additional documents that support your RPL application, such as letters of recommendation or portfolios."
    }
];

const DocumentSection = () => {
    return (
        <section className=" bg-gray-100 px-3 py-8 sm:px-8 space-y-8">
            <div className='max-w-4xl mx-auto'>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Documents Needed for RPL</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {documents.map((doc) => (
                        <div key={doc.id} className="flex items-start bg-white rounded-lg shadow-lg p-5 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                            <div className="flex-shrink-0">
                                {doc.icon}
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
                                <p className="text-gray-600 mt-1">{doc.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DocumentSection;
