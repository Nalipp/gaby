const assert = require('assert');
const Teacher = require('../../model/teacher');

describe('Teacher Destroy', () => {

  it('Should delete a Teacher', (done) => {
    const jane = new Teacher({
      name: 'jane',
      email: 'jane@mail.com',
    })
      .save()
      .then(() => Teacher.find({}))
      .then((result) => assert(result.length === 1))
      .then(() => Teacher.remove({name: 'jane'}))
      .then(() => Teacher.find({}))
      .then((result) => {
        assert(result.length === 0)
        done()
      });
  });
});
