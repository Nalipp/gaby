const Student = require('../model/student');

module.exports = {

  getStudents(cb) {
    Student.find({}, (err, students) => {
      const result = {err: err, data: students}
      cb(result);
    });
  },

  createStudent(student, cb) {
    Student.create(student, (err, student) => {
      const result = {err: err, data: student}
      cb(result);
    });
  },

  getStudent(id, cb) {
    Student.findById(id, (err, student) => {
      const result = {err: err, data: student}
      cb(result);
    });
  },

  updateTeacher(id, student, cb) {
    Student.findByIdAndUpdate(id, student, (err, teacher2) => {
      const result = {err: err, data: teacher2}
      cb(result);
    });
  },

  deleteStudent(id, cb) {
    Student.findByIdAndRemove(id, (err, student) => {
      const result = {err: err, data: student}
      cb(result);
    });
  }
}
