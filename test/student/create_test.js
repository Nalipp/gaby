const Student = require('../../model/student');
const assert = require('assert');

describe('Student Create', () => {
  let tad;

  beforeEach((done) => {
    tad = new Student({
      email: 'tad@mail.com'
    });
    tad.save()
      .then(() => done());
  });

  afterEach((done) => {
    Student.collection.drop();    
    done();
  });

  it('Should add a name to an existing record', (done) => {
    tad.name = 'tad';
    tad.save()
      .then(() => Student.findOne({_id: tad._id}))
      .then((result) => {
        assert(result.name === 'tad');
        done();
      });
  });

  it('Should add a neighborhood to existing record', (done) => {
    tad.neighborhood = [{name: 'mapo'}];
    tad.save()
      .then(() => Student.findOne({_id: tad._id}))
      .then((result) => {
        assert(result.neighborhood[0].name === 'mapo');
        done();
      });
  });

  it('Should add a availability to existing record', (done) => {
    tad.availability = [
      {
        day: 'monday',
        startTime: Date.now(),
        endTime: Date.now()
      }, 
      {
        day: 'friday',
        startTime: Date.now(),
        endTime: Date.now()
      }
    ];
    tad.save()
      .then(() => Student.findOne({_id: tad._id}))
      .then((result) => {
        assert(result.availability.length === 2);
        assert(result.availability[0].day === 'monday');
        assert(result.availability[1].day === 'friday');
        assert(result.availability[0].startTime instanceof Date);
        assert(result.availability[0].endTime instanceof Date);
        done();
      });
  });

});
