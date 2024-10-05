'use client'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const RPLTimeline = () => {

    return (
        <div className="rpl-section pt-6 bg-white">
            <h2 className="sm:text-center ml-6 sm:ml-0 text-3xl font-bold">RPL Process</h2>

            <VerticalTimeline
                lineColor="#B2EBF2"
            >
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        background: '#E0F7FA', border: '4px solid #B2EBF2',
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                    className="vertical-timeline-element--work"
                    date="Step 1"
                    iconStyle={{ background: '#B2EBF2', color: '#000', boxShadow: 'none', }}
                    icon={<IoIosCheckmarkCircle />}
                    contentArrowStyle={{ borderRight: '15px solid #B2EBF2' }}
                >
                    <h3 className="sm:text-lg  font-semibold">Complimentary Skills Evaluation</h3>
                    <p>
                        Connect with Skills Certified to discuss your career goals, and let us assist you in identifying the qualifications that will enable you to achieve them.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        background: '#E0F7FA', border: '4px solid #B2EBF2',
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                    className="vertical-timeline-element--work"
                    date="Step 2"
                    iconStyle={{ background: '#B2EBF2', color: '#000', boxShadow: 'none', }}
                    icon={<IoIosCheckmarkCircle />}
                    contentArrowStyle={{ borderRight: '15px solid #B2EBF2' }}
                >
                    <h3 className="sm:text-lg font-semibold">Creation of an Experience Portfolio</h3>
                    <p>
                        Your assigned consultant will assist you in assembling a comprehensive portfolio of evidence, which may include previous qualifications, transcripts, certificates, photos, videos, work samples, reference letters, and your latest resume.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        background: '#E0F7FA', border: '4px solid #B2EBF2',
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                    className="vertical-timeline-element--work"
                    date="Step 3"
                    iconStyle={{ background: '#B2EBF2', color: '#000', boxShadow: 'none', }}
                    icon={<IoIosCheckmarkCircle />}
                    contentArrowStyle={{ borderRight: '15px solid #B2EBF2' }}
                >
                    <h3 className="sm:text-lg font-semibold">Review of Evidence</h3>
                    <p>
                        After you submit your portfolio, one of our affiliated registered training organizations (RTOs) will evaluate it. If the assigned assessor requires more information, they will contact you. If any skill gaps are identified, the RTO may provide a trainer to help you enhance your skills at no cost.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{
                        background: '#E0F7FA', border: '4px solid #B2EBF2',
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                    className="vertical-timeline-element--work"
                    date="Step 4"
                    iconStyle={{ background: '#B2EBF2', color: '#000', boxShadow: 'none', }}
                    icon={<IoIosCheckmarkCircle />}
                    contentArrowStyle={{
                        borderRight: '15px solid #B2EBF2',
                    }}
                >
                    <h3 className="sm:text-lg font-semibold">Congratulations, You’re Now Qualified!</h3>
                    <p>
                        Skills Certified works with Registered Training Organizations to provide nationally recognized qualifications in Australia. These qualifications are equivalent to those obtained through full-time studies and can also be used for licensing applications.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default RPLTimeline;
