const Teacher = require('../model/teacher');

module.exports = {

  getTeachers(cb) {
    Teacher.find({}, (err, teachers) => {
      const result = {err: err, data: teachers}
      cb(result);
    });
  },

  createTeacher(teacher, cb) {
    Teacher.create(teacher, (err, teacher) => {
      const result = {err: err, data: teacher}
      cb(result);
    });
  },

  getTeacher(id, cb) {
    Teacher.findById(id, (err, teacher) => {
      const result = {err: err, data: teacher}
      cb(result);
    });
  },

  updateTeacher(id, teacher, cb) {
    Teacher.findOneAndUpdate(id, teacher, (err, teacher2) => {
      const result = {err: err, data: teacher2}
      cb(result);
    });
  },

  deleteTeacher(id, cb) {
    Teacher.findByIdAndRemove(id, (err, teacher) => {
      const result = {err: err, data: teacher}
      cb(result);
    });
  }
}
