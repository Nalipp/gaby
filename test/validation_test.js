const Teacher = require('../model/teacher');
const assert = require('assert');

describe('Validates models', () => {

  it('Should validate Teacher name as required', () => {
    const teacher = new Teacher({
      name: undefined,
      email: 'email@mail.com',
    });
    const validationResult = teacher.validateSync();
    const message = validationResult.errors.name.message;
    assert(message === 'Name is required.');
  });

  it('Should validate Teacher name as valid length', () => {
    const teacher = new Teacher({
      name: 'Al',
      email: 'email@mail.com'
    });
    const validationResult = teacher.validateSync();
    const message = validationResult.errors.name.message;
    assert(message === 'Name must be a valid length');
  });

  it('Should validate Teacher email as valid', () => {
    const teacher = new Teacher({ 
      name: 'Jane',
      email: 'mm.'
    });
    const validationResult = teacher.validateSync();
    const message = validationResult.errors.email.message;
    assert(message === 'Email must be valid');
  });

  it('Should validate Teacher email as unique', (done) => {
    const teacher1 = new Teacher({ 
      name: 'Jane',
      email: 'm@mail.com',
    });
    const teacher2 = new Teacher({ 
      name: 'Bill',
      email: 'm@mail.com',
    });

    Promise.all([teacher1.save(), teacher2.save()])
      .then(() => {
        Teacher.findOne({name: 'Bill'}, (result) => {
          assert(result === null);
          done();
        })
      })
  });

  it('Should validate NeighborhoodSchema as valid name', (done) => {
    const teacher = new Teacher({ 
      name: 'Jane',
      email: 'm@m.mail.com',
      neighborhood: [{name: 'Iongpa'}]
    });
    teacher.save()
      .then()
      .catch((err) => {
        Teacher.findOne({name: 'Jane'}, (teacher) => {
          assert(teacher === null);
          done();
        });
      });
  });
  
  it('Should validate AvailabilitySchema as valid name', (done) => {
    const teacher = new Teacher({ 
      name: 'Jane',
      email: 'm@m.mail.com',
      availability: [{day: 'monderday'}]
    });
    teacher.save()
      .then(() => Teacher.findOne({name: 'Jane'}))
      .then()
      .catch((err) => {
        Teacher.findOne({name: 'Jane'}, (teacher) => {
          assert(teacher === null);
          done();
        });
      });
  });

});
