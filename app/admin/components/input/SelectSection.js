'use client';

const SelectSection = ({ availableCourses, selectedSection, setSelectedSection }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSection(selectedValue);
  };

  return (availableCourses &&
    <div className="w-full">
      <select
        id="service"
        name="service"
        value={selectedSection}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Choose a service</option>
        {availableCourses.map((section) => (
          <option key={section._id} value={section._id}>
            {section.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSection;
