const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lectureSchema = new Schema({
  completed: { type: Boolean, default: false },
  teacherNoShow: { type: Boolean, default: false },
  studentNoShow: { type: Boolean, default: false },
  date: Date,
  startTime: Date,
  endTime: Date
});

const Lecture = mongoose.model('lecture', lectureSchema);

module.exports = Lecture;
