'use client'
import DeleteButton from '@/app/components/Button/DeleteButton';
import { revalidateAfterUploadHappyClient } from '@/app/lib/action';
import Image from 'next/image'; // Import Image from next/image
import { useState } from 'react';
import toast from 'react-hot-toast';

const HappyClientCard = ({ happyClient }) => {
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async (id) => {
        setDeleting(true);
        try {
            const res = await fetch(`/api/admin/happyclient`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }


            await revalidateAfterUploadHappyClient();

            toast.success('Deleted successfully!', {
                duration: 3000,
                position: 'top-right',
            });
        } catch (error) {
            toast.error('Delete failed. Please try again.', {
                duration: 3000,
                position: 'top-right',
            });
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="bg-white w-60 float-left ml-5 shadow-md rounded-lg p-4  mb-4">
            <div className='relative'>
                <Image
                    src={happyClient.image}
                    alt="Review"
                    width={900}
                    height={1200}
                    className="mt-2 rounded-md w-60 h-auto"
                />
            </div>
            <div className="mt-4 max-w-60 space-x-2 w-full">
                <DeleteButton loading={deleting} handleClick={() => handleDelete(happyClient._id)} />
            </div>
        </div>
    );
};

export default HappyClientCard;
