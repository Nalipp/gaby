const NeighborhoodSchema = require('./neighborhoodSchema');
const AvailabilitySchema = require('./availabilitySchema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const studentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'Email is requried'],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Email must be valid'
    }
  },
  neightborhood: [NeighborhoodSchema],
  availability: [AvailabilitySchema]
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
