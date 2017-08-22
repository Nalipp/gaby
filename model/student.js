const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const NeighborhoodSchema = require('./neighborhoodSchema');
const AvailabilitySchema = require('./availabilitySchema');
const uniqueValidator = require('mongoose-unique-validator')

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
    unique: [true, 'That email is already used'],
    required: [true, 'Email is requried'],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Email must be valid'
    }
  },
  neighborhood: [NeighborhoodSchema],
  availability: [AvailabilitySchema]
});

studentSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
