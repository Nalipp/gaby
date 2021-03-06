const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  completed: { type: Boolean, default: false },
  teacherNoShow: { type: Boolean, default: false },
  studentNoShow: { type: Boolean, default: false },
  date: Date,
  startTime: Date,
  endTime: Date,
  frequency: {
    type: String,
    enum: ['weekly', 'biweekly', 'once']
  } 
});

const Session = mongoose.model('session', sessionSchema);

module.exports = Session;
