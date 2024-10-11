'use client'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is Recognition of Prior Learning (RPL)?',
            answer: 'RPL is a process that allows individuals to receive certification for their existing skills and knowledge without needing to complete formal training.'
        },
        {
            question: 'Who is eligible for RPL?',
            answer: 'Anyone with significant work experience, relevant skills, and knowledge in a particular industry or occupation is eligible for RPL.'
        },
        {
            question: 'How long does the RPL process take?',
            answer: 'The RPL process can take a few weeks, depending on how quickly you submit your evidence and how fast the assessors can evaluate it.'
        },
        {
            question: 'What kind of documents do I need to provide?',
            answer: 'Documents such as resumes, work samples, qualifications, references, and certificates that showcase your skills and experience are required.'
        }
    ];

    return (
        <section className="sm:py-16 py-10 px-3 sm:px-6 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                                <h3 className="text-lg font-semibold">{faq.question}</h3>
                                <span>
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            {activeIndex === index && <p className="mt-4 text-gray-600">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
