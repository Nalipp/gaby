const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvailabilitySchema = new Schema({
  day: {
    type: String,
    lowercase: true,
    required: [true, 'Day string is required'],
    enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  },
  startTime: Date,
  endTime: Date
});

module.exports = AvailabilitySchema;
