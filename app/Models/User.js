import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  password: { type: String },
  image: { type: String, default: '' },
  role: { type: String, default: 'user' },
}, {
  timestamps: true,
});

userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
