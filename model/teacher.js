const NeighborhoodSchema = require('./neighborhoodSchema');
const AvailabilitySchema = require('./availabilitySchema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const teacherSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    validate: {
      validator: (name) => name.length > 2 && name.length < 30,
      message: 'Name must be a valid length'
    }
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, 'Email must be unique'],
    required: [true, 'Email is requried'],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Email must be valid'
    }
  },
  neighborhood: [NeighborhoodSchema],
  availability: [AvailabilitySchema]
});

const Teacher = mongoose.model('teacher', teacherSchema);

module.exports = Teacher;
