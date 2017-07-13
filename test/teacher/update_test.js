const assert = require('assert');
const Teacher = require('../../model/teacher');

describe('Teacher Update', () => {
  let jane;

  beforeEach((done) => {
    jane = new Teacher({
      name: 'jane',
      email: 'jane@mail.com',
      neighborhood: [{name: 'mapo'}],
      availability: [{day: 'monday'}]
    })
      jane.save()
      .then(() => done());
  });

  it('Should update Teacher name', (done) => {
    jane.set('name', 'Janie')
    jane.save()
      .then(() => Teacher.findOne({email: 'jane@mail.com'}))
      .then((result) => {
        assert(result.name === 'Janie');
        done();
      });
  });

  it('Should update Teacher email', (done) => {
    jane.set('email', 'janie@mail.com')
    jane.save()
      .then(() => Teacher.findOne({name: 'jane'}))
      .then((result) => {
        assert(result.email === 'janie@mail.com');
        done();
      });
  });

  it('Should update Teacher neighborhood', (done) => {
    jane.neighborhood = [{name: 'jongno'}]
    jane.save()
      .then(() => Teacher.findOne({name: 'jane'}))
      .then((result) => {
        assert(result.neighborhood[0].name === 'jongno');
        done();
      });
  });

  it('Should update Teacher availability', (done) => {
    jane.availability = [{day: 'tuesday'}]
    jane.save()
      .then(() => Teacher.findOne({name: 'jane'}))
      .then((result) => {
        assert(result.availability[0].day === 'tuesday');
        done();
      });
  });

});

