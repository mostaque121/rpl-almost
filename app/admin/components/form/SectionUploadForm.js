'use client';
import DeleteButton from '@/app/components/Button/DeleteButton';
import { revalidateAfterUploadSection } from '@/app/lib/action';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import DropzoneUploader from '../ImageUploader/DropzoneUploader';
import SelectIndexEditSection from '../input/SelectIndexEditSection';
import SelectIndexUploadSection from '../input/SelectIndexUploadSection';


const SectionUploadForm = ({ mode, initialData, availableItems }) => {
    const router = useRouter();
    const [title, setTitle] = useState(mode === 'edit' ? initialData.title || '' : '');
    const [fileUrlSquare, setFileUrlSquare] = useState(mode === 'edit' ? initialData.imageSquareLink || '' : '');
    const [publicIdSquare, setPublicIdSquare] = useState(mode === 'edit' ? initialData.imageSquarePublicId || '' : '');
    const [fileUrlCover, setFileUrlCover] = useState(mode === 'edit' ? initialData.imageCoverLink || '' : '');
    const [publicIdCover, setPublicIdCover] = useState(mode === 'edit' ? initialData.imageCoverPublicId || '' : '');
    const [selectedIndex, setSelectedIndex] = useState(mode === 'edit' ? initialData.index || 0 : 0);
    const [loading, setLoading] = useState(false);
    const [deleting, setDeleting] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const payload = {
            title,
            imageSquareLink: fileUrlSquare ? fileUrlSquare : null,
            imageSquarePublicId: publicIdSquare ? publicIdSquare : null,
            imageCoverLink: fileUrlCover ? fileUrlCover : null,
            imageCoverPublicId: publicIdCover ? publicIdCover : null,
            index: selectedIndex,
        };

        // Include id in the payload if in edit mode
        if (mode === 'edit' && initialData._id) {
            payload.id = initialData._id;
        }

        try {
            const res = await fetch(`/api/admin/sections`, {
                method: mode === 'edit' ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            toast.success(`${mode === 'edit' ? 'Edit' : 'Submission'} successful!`, {
                duration: 3000,
                position: 'top-right',
            });

        } catch (error) {
            console.error('Error posting data:', error);
            toast.error(`${mode === 'edit' ? 'Edit' : 'Submission'} failed. Please try again.`, {
                duration: 3000,
                position: 'top-right',
            });
        } finally {
            if (mode === 'upload') {
                setTitle('');
                setFileUrlCover('');
                setFileUrlSquare('');
                setPublicIdCover('');
                setPublicIdSquare('');
            }
            await revalidateAfterUploadSection();
            router.push('/admin/courses');
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        setDeleting(true);
        const idForDelete = initialData._id;

        try {
            const res = await fetch(`/api/admin/sections`, {
                method: 'DELETE', // Method should be uppercase (though lowercase works)
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

            await revalidateAfterUploadSection();
            // Navigate only on success
            router.push('/admin/courses');

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
        <div className='max-w-3xl mx-auto bg-dark-background rounded-lg shadow-lg p-8'>
            <h1 className='text-3xl text-dark-text font-semibold text-gray-800 mb-6 text-center'>
                {mode === 'edit' ? 'Edit Section' : 'Section Uploader'}
            </h1>

            <div className='mb-6'>
                <h2 className='text-lg font-medium text-dark-muted mb-2'>Upload Square Image :</h2>
                <DropzoneUploader
                    fileUrl={fileUrlSquare}
                    setFileUrl={setFileUrlSquare}
                    preset={"service-square"}
                    setPublicId={setPublicIdSquare}
                />
            </div>

            <div className='mb-6'>
                <h2 className='text-lg font-medium text-dark-muted mb-2'>Upload Cover Image:</h2>
                <DropzoneUploader
                    fileUrl={fileUrlCover}
                    setFileUrl={setFileUrlCover}
                    preset={"service-cover"}
                    setPublicId={setPublicIdCover}
                />
            </div>

            <div className='mb-6'>
                <h2 className='text-lg font-medium text-dark-muted mb-2'>Section Title:</h2>
                <input
                    className='border bg-dark-text border-gray-300 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    type='text'
                    value={title}
                    placeholder="Enter the service title"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            {mode === 'upload' ? (
                <div className='mb-6'>
                    <h2 className='text-lg font-medium text-dark-muted mb-2'>Section Index:</h2>
                    <SelectIndexUploadSection
                        setSelectedIndex={setSelectedIndex}
                        selectedIndex={selectedIndex}
                        availableItems={availableItems}
                    />
                </div>
            ) : (
                <div className='mb-6'>
                    <h2 className='text-lg font-medium text-dark-muted mb-2'>Service Index:</h2>
                    <SelectIndexEditSection
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        availableItems={availableItems}
                    />
                </div>
            )}



            <button
                onClick={handleSubmit}
                className={`w-full px-6 py-2 rounded-md transition duration-300 ease-in-out
                ${title && fileUrlSquare && fileUrlCover && selectedIndex && !loading ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-300 text-gray-500 cursor-not-allowed'}`}
                disabled={!title || !fileUrlSquare || !selectedIndex || !fileUrlCover || loading}
            >
                {loading ? <ClipLoader color="#fff" size={20} /> : mode === 'edit' ? 'Save Changes' : 'Submit'}
            </button>

            {mode === 'edit' &&

                <div className='mt-5'>
                    <DeleteButton defaultText='Delete Section' loading={deleting} whenDisable={initialData.courses.length !== 0} handleClick={handleDelete} />
                </div>

            }
        </div>
    );
};

export default SectionUploadForm;
