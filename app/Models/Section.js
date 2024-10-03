import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
    link: {
        type: String,
        unique: true,
    },
    imageSquareLink: {
        type: String,
        required: true,
    },
    imageSquarePublicId: {
        type: String,
        required: true,
    },
    imageCoverLink: {
        type: String,
        required: true,
    },
    imageCoverPublicId: {
        type: String,
        required: true,
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
}, { timestamps: true });

sectionSchema.pre('save', function (next) {
    if (this.isModified('title')) {
        this.link = this.title
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    }
    next();
});

export default sectionSchema;
