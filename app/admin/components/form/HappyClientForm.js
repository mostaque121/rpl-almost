'use client'
import Button from '@/app/components/Button/Button';
import { revalidateAfterUploadHappyClient } from '@/app/lib/action';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import DropzoneUploader from '../ImageUploader/DropzoneUploader';

const HappyClientForm = () => {
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState('');
    const [imagePublicId, setImagePublicId] = useState('');
    const [uploading, setUploading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!imageUrl || !imagePublicId) {
            toast.error('Please Upload Image First');
            return;
        }

        setUploading(true);

        const payload = {
            image: imageUrl,
            imagePublicId
        };

        try {
            const res = await fetch('/api/admin/happyclient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            await revalidateAfterUploadHappyClient();

            toast.success('Upload successful!');
            router.push(`/admin/happyclient`);

        } catch (error) {
            console.error('Error posting data:', error);
            toast.error('Upload failed. Please try again.');
        } finally {
            setUploading(false);
            setImageUrl('');
            setImagePublicId('');
        }
    };

    return (
        <div>
            <div className="mb-6">
                <label className="text-lg font-medium text-black mb-2">Client Image</label>
                <DropzoneUploader
                    fileUrl={imageUrl}
                    setFileUrl={setImageUrl}
                    preset={"happy-client"}
                    setPublicId={setImagePublicId}
                />
            </div>
            <Button isLoading={uploading} defaultText={'Upload'} loadingText={'Uploading...'} handleClick={handleSubmit} />
        </div>
    );
};

export default HappyClientForm;