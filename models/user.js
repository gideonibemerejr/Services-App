const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: String,
    avatar: String,
    email: String,
    Street: String,
    City: String,
    Zip: Number,
    Phone: String,
    appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
    isAdmin: {
      type: Boolean,
      default: false
    },
    googleId: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
