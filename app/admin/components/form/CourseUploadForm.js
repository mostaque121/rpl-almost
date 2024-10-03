'use client';
import { revalidateAfterDeleteCourse, revalidateAfterEditCourse, revalidateAfterUploadCourse } from '@/app/lib/action';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';
import DropzoneUploader from '../ImageUploader/DropzoneUploader';
import SelectIndexForCourse from '../input/SelectIndexForCourse';
import SelectSection from '../input/SelectSection';

const CKEditorComponent = dynamic(() => import('@/app/admin/components/input/CKEditorComponent'), {
  ssr: false
});

const CourseUploadForm = ({ availableCourses, mode, initialData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [section, setSection] = useState(mode === 'edit' ? initialData.section._id || '' : '');
  const [title, setTitle] = useState(mode === 'edit' ? initialData.title || '' : '');
  const [fileUrlSquare, setFileUrlSquare] = useState(mode === 'edit' ? initialData.imageSquareLink || '' : '');
  const [publicIdSquare, setPublicIdSquare] = useState(mode === 'edit' ? initialData.imageSquarePublicId || '' : '');
  const [fileUrlCover, setFileUrlCover] = useState(mode === 'edit' ? initialData.imageCoverLink || '' : '');
  const [publicIdCover, setPublicIdCover] = useState(mode === 'edit' ? initialData.imageCoverPublicId || '' : '');
  const [description, setDescription] = useState(mode === 'edit' ? initialData.description || '' : '');
  const [jobOpportunity, setJobOpportunity] = useState(mode === 'edit' ? initialData.jobOpportunity || '' : '');
  const [entryRequirement, setEntryRequirement] = useState(mode === 'edit' ? initialData.entryRequirement || '' : '');
  const [packagingRule, setPackagingRule] = useState(mode === 'edit' ? initialData.packagingRule || '' : '');
  const [coreUnits, setCoreUnits] = useState(mode === 'edit' ? initialData.coreUnits || '' : '');
  const [electiveUnits, setElectiveUnits] = useState(mode === 'edit' ? initialData.electiveUnits || '' : '');
  const [selectedIndex, setSelectedIndex] = useState(mode === 'edit' ? initialData.index || '' : '');

  const selectedObject = availableCourses.find((obj) => obj._id === section);

  const isFormValid = () => {
    return section && title && fileUrlSquare && fileUrlCover && publicIdCover && publicIdSquare && description && jobOpportunity && entryRequirement && packagingRule && coreUnits && electiveUnits && selectedIndex;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const payload = {
      section,
      title,
      imageSquareLink: fileUrlSquare || null,
      imageSquarePublicId: publicIdSquare || null,
      imageCoverLink: fileUrlCover || null,
      imageCoverPublicId: publicIdCover || null,
      description,
      jobOpportunity,
      entryRequirement,
      packagingRule,
      coreUnits,
      electiveUnits,
      index: selectedIndex
    };

    // Include id in the payload if in edit mode
    if (mode === 'edit' && initialData._id) {
      payload.id = initialData._id;
    }

    try {
      const res = await fetch('/api/admin/courses', {
        method: mode === 'edit' ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      toast.success(`${mode === 'edit' ? 'Edit' : 'Submission'} successful!`);
      if (mode === 'upload') {
        const data = await res.json();
        const sectionLink = data.sectionLink
        await revalidateAfterUploadCourse(sectionLink);
        router.push(`/admin/${sectionLink}`);
      } else {
        const data = await res.json();
        const prevCourseLink = data.prevCourseLink;
        const prevSectionLink = data.prevSectionLink;
        const newSectionLink = data.newSectionLink;


        await revalidateAfterEditCourse(prevCourseLink, prevSectionLink, newSectionLink);
        router.push(`/admin/${newSectionLink}`);

      }



    } catch (error) {
      console.error('Error posting data:', error);
      toast.error(`${mode === 'edit' ? 'Edit' : 'Submission'} failed. Please try again.`);
    } finally {
      if (mode === 'upload') {
        setSection('');
        setTitle('');
        setFileUrlSquare('');
        setPublicIdSquare('');
        setFileUrlCover('');
        setPublicIdCover('');
        setDescription('');
        setJobOpportunity('');
        setEntryRequirement('');
        setPackagingRule('');
        setCoreUnits('');
        setElectiveUnits('');
        setSelectedIndex('');
      }
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    const idForDelete = initialData._id;

    try {
      const res = await fetch(`/api/admin/courses`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: idForDelete }), // Send as object
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      toast.success('Deleted successfully!', {
        duration: 3000,
        position: 'top-right',
      });

      const data = await res.json();
      const courseLink = data.courseLink;
      const sectionLink = data.sectionLink;
      await revalidateAfterDeleteCourse(courseLink, sectionLink);
      router.push(`/admin/${sectionLink}`);

    } catch (error) {
      console.error('Error deleting data:', error);
      toast.error('Delete failed. Please try again.', {
        duration: 3000,
        position: 'top-right',
      });
    } finally {
      setDeleting(false);
    }
  };


  return (
    <div className="qualification container mx-auto mb-5 p-6 bg-dark-background shadow-lg rounded-md max-w-3xl">
      <h1 className='text-3xl font-semibold text-dark-text mb-6 text-center'>
        {mode === 'edit' ? 'Edit Course' : 'Course Uploader'}
      </h1>

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Course Title:</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter certificate title"
        />
      </div>

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Section:</label>
        <SelectSection
          availableCourses={availableCourses}
          selectedSection={section}
          setSelectedSection={setSection}
        />
      </div>

      {selectedObject && (
        <div className='mb-6'>
          <h2 className='text-lg font-medium text-dark-muted mb-2'>Service Index:</h2>
          <SelectIndexForCourse
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            section={selectedObject}
            prevSection={mode === "edit" && initialData.section._id}
            initialIndex={mode === 'edit' && initialData.index}
            mode={mode}
          />
        </div>
      )}

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Square Image:</label>
        <DropzoneUploader
          fileUrl={fileUrlSquare}
          setFileUrl={setFileUrlSquare}
          preset={"certificate-square"}
          setPublicId={setPublicIdSquare}
        />
      </div>

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Cover Image:</label>
        <DropzoneUploader
          fileUrl={fileUrlCover}
          setFileUrl={setFileUrlCover}
          preset={"certificate-cover"}
          setPublicId={setPublicIdCover}
        />
      </div>

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Description:</label>
        <CKEditorComponent
          value={description}
          onChange={(data) => setDescription(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Job Opportunities:</label>
        <CKEditorComponent
          value={jobOpportunity}
          onChange={(data) => setJobOpportunity(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Entry Requirements:</label>
        <CKEditorComponent
          value={entryRequirement}
          onChange={(data) => setEntryRequirement(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Packaging Rule:</label>
        <CKEditorComponent
          value={packagingRule}
          onChange={(data) => setPackagingRule(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Core Units:</label>
        <CKEditorComponent
          value={coreUnits}
          onChange={(data) => setCoreUnits(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-lg font-medium text-dark-muted mb-2">Elective Units:</label>
        <CKEditorComponent
          value={electiveUnits}
          onChange={(data) => setElectiveUnits(data)}
        />
      </div>


      <button
        onClick={handleSubmit}
        className={`w-full px-6 py-2 rounded-md transition duration-300 ease-in-out
          ${isFormValid() && !loading ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-300 text-gray-500 cursor-not-allowed'}`}
        disabled={!isFormValid() || loading}
      >
        {loading ? <div className='flex items-center justify-center gap-3'><ClipLoader color="#fff" size={20} /> <p>Uploading...</p></div> : 'Submit'}
      </button>

      {mode === 'edit' &&
        <button
          onClick={handleDelete}
          className="w-full text-center mt-5 py-2 rounded-md text-dark-text bg-red-500 hover:bg-red-600 active:bg-red-700 duration-200 ease-in-out transition-all"
        >
          {deleting ? <ClipLoader color="#fff" size={20} /> : 'Delete section'}
        </button>
      }
    </div>
  );
};

export default CourseUploadForm;
