'use client';
import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md'; // Import the icons

const Units = ({ coreUnits, electiveUnits }) => {
    const [isCoreUnitsOpen, setCoreUnitsOpen] = useState(false);
    const [isElectiveUnitsOpen, setElectiveUnitsOpen] = useState(false);

    return (
        <div >
            <div className="mb-4">
                <h2
                    className="sm:text-xl text-base font-semibold cursor-pointer mb-2 flex items-center justify-between transition-colors duration-300 text-gray-800 hover:text-copy"
                    onClick={() => setCoreUnitsOpen(!isCoreUnitsOpen)}
                >
                    <span className="flex items-center">
                        <span className={`mr-2 transition-transform duration-300 ${isCoreUnitsOpen ? 'rotate-180' : 'rotate-0'}`}>
                            <MdExpandMore size={24} />
                        </span>
                        Core Units
                    </span>
                </h2>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isCoreUnitsOpen ? '' : 'max-h-0'
                        }`}
                >
                    <div className='text-sm text-gray-600 py-2' dangerouslySetInnerHTML={{ __html: coreUnits }} />
                </div>
            </div>

            {/* Elective Units Section */}
            <div>
                <h2
                    className="sm:text-xl text-base font-semibold cursor-pointer mb-2 flex items-center justify-between transition-colors duration-300 text-gray-800 hover:text-copy"
                    onClick={() => setElectiveUnitsOpen(!isElectiveUnitsOpen)}
                >
                    <span className="flex items-center">
                        <span className={`mr-2 transition-transform duration-300 ${isElectiveUnitsOpen ? 'rotate-180' : 'rotate-0'}`}>
                            <MdExpandMore size={24} />
                        </span>
                        Elective Units
                    </span>
                </h2>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isElectiveUnitsOpen ? 'h-auto' : 'h-0'
                        }`}
                >
                    <div className='text-sm h-full text-gray-600 py-2' dangerouslySetInnerHTML={{ __html: electiveUnits }} />
                </div>
            </div>
        </div>
    );
};

export default Units;
