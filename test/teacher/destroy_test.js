const assert = require('assert');
const Teacher = require('../../model/teacher');

describe('Destroys records', () => {

  it('Should delete a Teacher with the name jane', (done) => {
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
