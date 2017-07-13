const Teacher = require('../../model/teacher');
const assert = require('assert');

describe('Teacher Create', () => {
  let jane;

  beforeEach((done) => {
    jane = new Teacher({
      name: 'jane',
      email: 'jane@mail.com',
    });
    jane.save()
      .then(() => done());
  });

  afterEach((done) => {
    Teacher.collection.drop();    
    done();
  });

  it('Should save add a neighborhood to existing record', (done) => {
    jane.neighborhood = [{name: 'mapo'}];
    jane.save()
      .then(() => Teacher.findOne({_id: jane._id}))
      .then((result) => {
        assert(result.neighborhood[0].name === 'mapo');
        done();
      });
  });

  it('Should save add a availability to existing record', (done) => {
    jane.availability = [
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
    jane.save()
      .then(() => Teacher.findOne({_id: jane._id}))
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
