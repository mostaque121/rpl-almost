import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
    required: true,
  },
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
  description: {
    type: String,
    required: true,
  },
  jobOpportunity: {
    type: String,
    required: true,
  },
  entryRequirement: {
    type: String,
    required: true,
  },
  packagingRule: {
    type: String,
    required: true,
  },
  coreUnits: {
    type: String,
    required: true,
  },
  electiveUnits: {
    type: String,
    required: true,
  },
}, { timestamps: true });

courseSchema.pre('save', function (next) {
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

export default courseSchema;
