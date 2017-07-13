const assert = require('assert')
const Teacher = require('../../model/teacher');

describe('Teacher Read', () => {

  it('Should find a Teacher record', (done) => {
    const jane = new Teacher({name: 'jane', email: 'mail@mail.com'})
    jane.save()
    .then(() => Teacher.findOne({_id: jane._id}))
      .then((result) => {
        assert(String(result._id) === String(jane._id));
        done();
      });
  });
});
