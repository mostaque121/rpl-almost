import mongoose from 'mongoose';

// Define the user schema
const happyClientSchema = new mongoose.Schema({

    image: { type: String, required: true, default: '' },
    imagePublicId: { type: String, required: true, default: '' },

}, {
    timestamps: true,
});


const HappyClient = mongoose.models.HappyClient || mongoose.model('HappyClient', happyClientSchema);

export default HappyClient;
