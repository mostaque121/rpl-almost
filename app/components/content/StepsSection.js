'use client'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const RPLTimeline = () => {

    return (
        <div className="rpl-section sm:pt-16 bg-white pt-10 ">
            <h2 className="sm:text-center ml-6 text-[#3A94D0] sm:ml-0 text-3xl font-bold">RPL Process</h2>

            <VerticalTimeline
                lineColor="transparent"
            >
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        backgroundImage: 'linear-gradient(180deg, #3A94D0 0%, #4AC4D0 100%)', border: '3px solid #3A94D0',
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                    className="vertical-timeline-element--work custom-line"
                    date="Step 1"
                    iconStyle={{ background: '#3A94D0', color: '#fff', boxShadow: 'none', }}
                    icon={<IoIosCheckmarkCircle />}
                    contentArrowStyle={{ borderRight: '15px solid #3A94D0' }}
                >
                    <h3 className="sm:text-lg text-gray-100  font-semibold">Free Skills Assesment</h3>
                    <p>
                        Connect with RPL Fast Track to discuss your career goals, and let us assist you in identifying the qualifications that will enable you to achieve them.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        backgroundImage: 'linear-gradient(180deg, #3A94D0 0%, #4AC4D0 100%)', border: '3px solid #3A94D0',
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                    className="vertical-timeline-element--work  custom-line"
                    date="Step 2"
                    iconStyle={{ background: '#3A94D0', color: '#fff', boxShadow: 'none', }}
                    icon={<IoIosCheckmarkCircle />}
                    contentArrowStyle={{ borderRight: '15px solid #3A94D0' }}
                >
                    <h3 className="sm:text-lg text-gray-100 font-semibold">Portfolio of Experience</h3>
                    <p>
                        Your assigned consultant will assist you in assembling a comprehensive portfolio of evidence, which may include previous qualifications, transcripts, certificates, photos, videos, work samples, reference letters, and your latest resume.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        backgroundImage: 'linear-gradient(180deg, #3A94D0 0%, #4AC4D0 100%)', border: '3px solid #3A94D0',
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                    className="vertical-timeline-element--work  custom-line"
                    date="Step 3"
                    iconStyle={{ background: '#3A94D0', color: '#fff', boxShadow: 'none', }}
                    icon={<IoIosCheckmarkCircle />}
                    contentArrowStyle={{ borderRight: '15px solid #3A94D0' }}
                >
                    <h3 className="sm:text-lg text-gray-100 font-semibold">Review of Evidence</h3>
                    <p>
                        After you submit your portfolio, one of our affiliated registered training organizations (RTOs) will evaluate it. If the assigned assessor requires more information, they will contact you. If any skill gaps are identified, the RTO may provide a trainer to help you enhance your skills at no cost.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        backgroundImage: 'linear-gradient(180deg, #3A94D0 0%, #4AC4D0 100%)', border: '3px solid #3A94D0',
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                    className="vertical-timeline-element--work "
                    date="Step 4"
                    iconStyle={{ background: '#3A94D0', color: '#fff', boxShadow: 'none', }}
                    icon={<IoIosCheckmarkCircle />}
                    contentArrowStyle={{
                        borderRight: '15px solid #3A94D0',
                    }}
                >
                    <h3 className="sm:text-lg text-gray-100 font-semibold">Congratulations, You’re Now Qualified!</h3>
                    <p>
                        Skills Certified works with Registered Training Organizations to provide nationally recognized qualifications in Australia. These qualifications are equivalent to those obtained through full-time studies and can also be used for licensing applications.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default RPLTimeline;
