import mongoose from 'mongoose';
import courseSchema from './Course';
import reviewSchema from './Review';
import sectionSchema from './Section';

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
const Section = mongoose.models.Section || mongoose.model('Section', sectionSchema);
const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

export { Course, Review, Section };

