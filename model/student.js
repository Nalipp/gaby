const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const NeighborhoodSchema = require('./neighborhoodSchema');
const AvailabilitySchema = require('./availabilitySchema');

const studentSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2 && name.length < 30,
      message: 'Name must be a valid length'
    }
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
  neighborhood: [NeighborhoodSchema],
  availability: [AvailabilitySchema]
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
