import { FaAward, FaChartLine, FaClock, FaDollarSign, FaGraduationCap } from 'react-icons/fa';

const RPLInfoSection = () => {
    const benefits = [
        { icon: <FaAward className="w-12 h-12 mb-4 text-yellow-300" />, title: 'Skills Recognition', description: 'Formal acknowledgment of your existing skills and knowledge.' },
        { icon: <FaClock className="w-12 h-12 mb-4 text-yellow-300" />, title: 'Time Efficiency', description: 'Significantly reduce the time required to achieve qualifications.' },
        { icon: <FaGraduationCap className="w-12 h-12 mb-4 text-yellow-300" />, title: 'Nationally Recognized', description: 'Qualifications recognized across Australia under the AQF.' },
        { icon: <FaChartLine className="w-12 h-12 mb-4 text-yellow-300" />, title: 'Career Advancement', description: 'Unlock new job opportunities and career progression.' },
        { icon: <FaDollarSign className="w-12 h-12 mb-4 text-yellow-300" />, title: 'Higher Earning Potential', description: 'Become eligible for higher-paying roles in your field.' },
        // New benefit added here
        { icon: <FaChartLine className="w-12 h-12 mb-4 text-yellow-300" />, title: 'Personal Growth', description: 'Gain confidence and self-esteem through recognition of your capabilities.' }
    ];

    return (
        <section className="bg-gradient-to-r from-cyan-500 to-blue-600 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                        Why Choose Recognition of Prior Learning (RPL)?
                    </h2>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                        Unlock your potential and fast-track your career with RPL
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white/10 border border-transparent text-white rounded-lg shadow-lg p-6">
                            {benefit.icon}
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-100">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RPLInfoSection;
