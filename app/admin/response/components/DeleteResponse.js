'use client'
import DeleteButton from '@/app/components/Button/DeleteButton';
import { useState } from 'react';
import toast from 'react-hot-toast';

const DeleteResponse = ({ id, setResponses }) => {
    const [deleting, setDeleting] = useState(false)
    const handleDelete = async () => {
        setDeleting(true);

        try {
            const res = await fetch(`/api/admin/response`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            toast.success('Deleted successfully!', {
                duration: 3000,
                position: 'top-right',
            });
            setResponses(prevResponses => prevResponses.filter(response => response._id !== id));

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
        <div>
            <DeleteButton handleClick={handleDelete} loading={deleting} defaultText='delete' />
        </div>
    );
};

export default DeleteResponse;