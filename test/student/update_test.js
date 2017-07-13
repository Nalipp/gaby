const assert = require('assert');
const Student = require('../../model/student');

describe('Student Update', () => {
  let tad;

  beforeEach((done) => {
    tad = new Student({
      name: 'tad',
      email: 'tad@mail.com',
      neighborhood: [{name: 'mapo'}],
      availability: [{day: 'monday'}]
    })
      tad.save()
      .then(() => done());
  });

  afterEach((done) => {
    Student.collection.drop();
    done();
  });

  it('Should update Student name', (done) => {
    tad.set('name', 'thaddeus')
    tad.save()
      .then(() => Student.findOne({email: 'tad@mail.com'}))
      .then((result) => {
        assert(result.name === 'thaddeus');
        done();
      });
  });

  it('Should update Student email', (done) => {
    tad.set('email', 'thaddeus@mail.com')
    tad.save()
      .then(() => Student.findOne({name: 'tad'}))
      .then((result) => {
        assert(result.email === 'thaddeus@mail.com');
        done();
      });
  });

  it('Should update Student neighborhood', (done) => {
    tad.neighborhood = [{name: 'jongno'}]
    tad.save()
      .then(() => Student.findOne({name: 'tad'}))
      .then((result) => {
        assert(result.neighborhood[0].name === 'jongno');
        done();
      });
  });

  it('Should update Student availability', (done) => {
    tad.availability = [{day: 'tuesday'}]
    tad.save()
      .then(() => Student.findOne({name: 'tad'}))
      .then((result) => {
        assert(result.availability[0].day === 'tuesday');
        done();
      });
  });

});

