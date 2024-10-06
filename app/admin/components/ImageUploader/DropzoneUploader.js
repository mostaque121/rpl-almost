import axios from 'axios';
import 'cropperjs/dist/cropper.css'; // Import Cropper CSS
import { useCallback, useRef, useState } from 'react';
import Cropper from 'react-cropper';
import { useDropzone } from 'react-dropzone';
import { AiOutlineClose, AiOutlineCloudUpload } from 'react-icons/ai';

const DropzoneUploader = ({ fileUrl, setFileUrl, setPublicId, preset, aspectRatio }) => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [image, setImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cropperRef = useRef(null); // Create a ref for the Cropper

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setModalIsOpen(true); // Open modal after selecting an image
    };
    reader.readAsDataURL(file);
  }, []);

  const handleUpload = async () => {
    setModalIsOpen(false);
    if (!cropperRef.current) {
      console.error('Cropper is not initialized.');
      return;
    }

    const canvas = cropperRef.current.cropper.getCroppedCanvas();
    if (!canvas) {
      console.error('Canvas is not defined.');
      return;
    }

    setIsUploading(true);
    setErrorMessage('');

    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append('file', blob);
      formData.append('upload_preset', preset);

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dbneycd8g/image/upload',
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setProgress(percentCompleted);
            },
          }
        );

        setFileUrl(response.data.secure_url);
        setPublicId(response.data.public_id);
        setProgress(100); // Indicate that the upload is complete
      } catch (error) {
        console.error('Error uploading file:', error);
        setErrorMessage('File upload failed. Please try again.');
      } finally {
        setIsUploading(false);
        setImage(null); // Reset the image after upload
      }
    }, 'image/jpeg');
  };

  const handleDelete = () => {
    setFileUrl(null);
    setPublicId(null);
    setImage(null);
    setProgress(0); // Reset progress
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col w-full items-center py-4">
      {fileUrl ? (
        <div className="relative w-full max-w-xs mt-4">
          <img
            src={fileUrl}
            alt="Uploaded file"
            className="w-full rounded-lg shadow-lg"
          />
          <button
            onClick={handleDelete}
            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75"
            aria-label="Remove uploaded image"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      ) : (
        <div
          {...getRootProps({
            className: `bg-dark-muted cursor-pointer border-2 p-6 w-full max-w-md text-center transition-all duration-300 ease-in-out 
                        ${isDragActive ? 'border-green-500 bg-green-50' : 'border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50'}`,
          })}
        >
          <input {...getInputProps()} aria-label="Upload file" />
          <AiOutlineCloudUpload className="mx-auto text-gray-400" size={40} />
          <p className="text-gray-600 mt-2">
            {isDragActive ? 'Drop the files here...' : 'Drag & drop some files here'}
          </p>
          <button
            type="button"
            className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Click to select files
          </button>
        </div>
      )}

      {errorMessage && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}

      {isUploading && progress > 0 && (
        <div className="relative mt-4 w-full max-w-md h-4 bg-gray-200 rounded overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
          <p className="absolute inset-0 flex items-center justify-center text-charcoal text-sm">{progress}%</p>
        </div>
      )}

      {/* Self-Implemented Modal for Cropping Image */}
      {modalIsOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-80"
        >
          <div
            className="relative w-11/12  max-w-lg p-6 bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-semibold text-center">Crop Image</h2>
            <div className="relative  w-full">
              <Cropper
                src={image}
                style={{ height: 300, width: '100%' }}
                aspectRatio={aspectRatio}
                guides={false}
                ref={cropperRef}
                viewMode={1}
                zoomable={true}
                scalable={true}
                movable={true}
                dragMode="move"
              />
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={handleUpload}
                className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Upload
              </button>
              <button
                onClick={() => setModalIsOpen(false)}
                className="py-2 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropzoneUploader;
