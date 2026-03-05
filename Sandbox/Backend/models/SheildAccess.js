import mongoose from 'mongoose';
const { Schema } = mongoose;

const shieldAccessSchema = new Schema({
  shield_id: { type: Schema.Types.ObjectId, ref: 'ShieldIdentity', required: true },
  device_id: { type: String },
  ip_address: { type: String, required: true },
  location: {
    country: String,
    region: String,
    city: String,
    latitude: Number,
    longitude: Number
  },
  accessed_at: { type: Date, default: Date.now }
});

const ShieldAccess = mongoose.model('ShieldAccess', shieldAccessSchema);

export default ShieldAccess;
