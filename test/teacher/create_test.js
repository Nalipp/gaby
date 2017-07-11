const assert = require('assert');
const Teacher = require('../../model/teacher');
const Student = require('../../model/student');

describe('Creates records', () => {

  it('Should save a Teacher record', (done) => {
    const jane = new Teacher({
      name: 'jane',
      email: 'jane@mail.com',
    });
    jane.save()
      .then(() => {
        assert(!jane.isNew);
        done();
      })
  });

  it('saves a student', (done) => {
    const student = new Student({
      name: 'tad',
      email: 'tad@mail.com',
    });
    student.save()
      .then(() => {
        assert(!student.isNew);
        done();
      })
  });
});
