const assert = require('assert');
const Student = require('../../model/student');

describe('Student Destroy', () => {

  it('Should delete a Student', (done) => {
    new Student({
      name: 'tad',
      email: 'tad@mail.com',
    })
      .save()
      .then(() => Student.find({}))
      .then((result) => assert(result.length === 1))
      .then(() => Student.remove({name: 'tad'}))
      .then(() => Student.find({}))
      .then((result) => {
        assert(result.length === 0)
        done()
      });
  });
});
