import mongoose from 'mongoose';
const responseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    interest: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const UserResponse = mongoose.models.UserResponse || mongoose.model('UserResponse', responseSchema);

export default UserResponse;
