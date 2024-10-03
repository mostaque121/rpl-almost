import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    purchasedCourse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userImage: {
        type: String,
    },
    reviewImage: {
        type: String,
    },
    reviewText: {
        type: String,
        required: true,
    },
    givenStar: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    approved: {
        type: Boolean,
        required: true,
        default: false
    }

}, { timestamps: true });



export default reviewSchema;
