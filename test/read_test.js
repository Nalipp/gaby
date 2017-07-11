const assert = require('assert')
const Teacher = require('../model/teacher');
const Student = require('../model/student');

describe('Reads records', () => {
  let jane, tad;

  beforeEach((done) => {
    jane = new Teacher({
      name: 'jane',
      email: 'jane@mail.com'
    }); 

    tad = new Student({
      name: 'tad',
      email: 'tad@mail.com'
    }); 

    Promise.all([jane.save(), tad.save()])
      .then(() => done());
  });

  it('finds a teachers with the name jane', (done) => {
    Teacher.find({name: 'jane'})
      .then((teachers) => {
        assert(String(jane._id) === String(teachers[0]._id));
        assert(teachers.length === 1);
        done();
      });
  });

  it('finds a student with the email tad@mail.com', (done) => {
    Student.findOne({email: 'tad@mail.com'})
      .then((student) => {
        assert(String(tad.email) === String(student.email));
        done();
      });
  });
});
