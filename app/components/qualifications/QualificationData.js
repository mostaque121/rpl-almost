import { FaBriefcase, FaScroll } from 'react-icons/fa';

const sampleData = {
    description: "The BSB50120 Diploma of Business is a nationally recognized qualification designed to provide individuals with the skills and knowledge required to succeed in various business environments. This comprehensive program covers key areas such as managing business resources, developing critical thinking in others, managing business operational plans, and leading communication in the workplace.",
    jobOpportunity: "Graduates of the BSB50120 Diploma of Business are well-positioned for a variety of exciting career opportunities across different sectors. Some potential job roles include: Business Manager, Executive Officer, Program Coordinator, Office Manager, Business Development Manager, Project Consultant.",
    packagingRule: "To achieve the BSB50120 Diploma of Business, a total of 12 units must be completed, consisting of 5 core units and 7 elective units."
};

const QualificationData = () => {
    const sections = [
        { id: "description", title: "Qualification Description", icon: FaScroll, content: sampleData.description },
        { id: "jobOpportunity", title: "Job Opportunities", icon: FaBriefcase, content: sampleData.jobOpportunity },
        { id: "packagingRule", title: "Packaging Rules", icon: FaScroll, content: sampleData.packagingRule },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">BSB50120 Diploma of Business</h1>
            {sections.map((section) => (
                <div key={section.id} className="border rounded-lg p-4 shadow-md">
                    <div className="flex items-center mb-2">
                        {/* Render the icon as a component */}
                        <section.icon className="w-6 h-6 mr-2 text-blue-600" />
                        <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                    </div>
                    <div className="text-gray-600 leading-relaxed space-y-4">
                        {section.content.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QualificationData;
