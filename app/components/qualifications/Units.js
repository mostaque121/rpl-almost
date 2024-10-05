'use client';
import { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md'; // Import the icons

const Units = ({ coreUnits, electiveUnits }) => {
    const [isCoreUnitsOpen, setCoreUnitsOpen] = useState(false);
    const [isElectiveUnitsOpen, setElectiveUnitsOpen] = useState(false);

    return (
        <div className='sm:px-6 px-3 py-6 rounded-md bg-light-blue'>
            <div className="mb-4">
                <h2
                    className="sm:text-xl text-base font-semibold cursor-pointer mb-2 flex items-center"
                    onClick={() => setCoreUnitsOpen(!isCoreUnitsOpen)}
                >
                    Core Units
                    {isCoreUnitsOpen ? (
                        <MdExpandLess className="ml-2" />
                    ) : (
                        <MdExpandMore className="ml-2" />
                    )}
                </h2>
                {isCoreUnitsOpen && (
                    <div>
                        <div className='text-sm' dangerouslySetInnerHTML={{ __html: coreUnits }} />
                    </div>
                )}
            </div>

            <div>
                <h2
                    className="sm:text-xl text-base font-semibold cursor-pointer mb-2 flex items-center"
                    onClick={() => setElectiveUnitsOpen(!isElectiveUnitsOpen)}
                >
                    Elective Units
                    {isElectiveUnitsOpen ? (
                        <MdExpandLess className="ml-2" />
                    ) : (
                        <MdExpandMore className="ml-2" />
                    )}
                </h2>
                {isElectiveUnitsOpen && (
                    <div>
                        <div className='text-sm' dangerouslySetInnerHTML={{ __html: electiveUnits }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Units;
