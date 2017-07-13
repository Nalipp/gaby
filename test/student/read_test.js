const assert = require('assert')
const Student = require('../../model/student');

describe('Student Read', () => {

  it('Should find a Student record', (done) => {
    const tad = new Student({email: 'mail@mail.com'})
    tad.save()
    .then(() => Student.findOne({_id: tad._id}))
      .then((result) => {
        assert(String(result._id) === String(tad._id));
        done();
      });
  });
});
