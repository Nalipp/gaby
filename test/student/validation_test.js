const Student = require('../../model/student');
const assert = require('assert');

describe('Validates Student models', () => {

  it('Should validate Student name as valid length', () => {
    const student = new Student({
      name: 'Al',
      email: 'email@mail.com'
    });
    const validationResult = student.validateSync();
    const message = validationResult.errors.name.message;
    assert(message === 'Name must be a valid length');
  });

  it('Should validate Student Email as required', () => {
    const student = new Student({
      email: undefined
    });
    const validationResult = student.validateSync();
    const message = validationResult.errors.email.message;
    assert(message === 'Email is requried');
  });

  it('Should validate Student email as valid', () => {
    const student = new Student({ 
      email: 'mm.'
    });
    const validationResult = student.validateSync();
    const message = validationResult.errors.email.message;
    assert(message === 'Email must be valid');
  });

  it('Should validate Student email as unique', (done) => {
    const teacher1 = new Student({ 
      email: 'm@mail.com',
    });
    const teacher2 = new Student({ 
      name: 'Bill',
      email: 'm@mail.com',
    });

    Promise.all([teacher1.save(), teacher2.save()])
      .then(() => {
        Student.findOne({name: 'Bill'}, (result) => {
          assert(result === null);
          done();
        })
      })
  });

  it('Should validate Student NeighborhoodSchema as valid name', (done) => {
    const student = new Student({ 
      email: 'm@m.com',
      neighborhood: [{name: 'Iongpa'}]
    })
      .save()
      .then()
      .catch((err) => {
        Student.findOne({email: 'm@mail.com'}, (student) => {
          assert(student === null);
          done();
        });
      });
  });
  
  it('Should validate Student AvailabilitySchema as valid day', (done) => {
    const student = new Student({ 
      email: 'm@mail.com',
      availability: [{day: 'monderday'}]
    })
      .save()
      .then(() => Student.findOne({email: 'm@mail.com'}))
      .catch((err) => {
        Student.findOne({email: 'm@mail.com'}, (student) => {
          assert(student === null);
          done();
        });
      });
  });

  it('Should validate Student Availability startTime as date', (done) => {
    const student = new Student({ 
      email: 'm@m.com',
      availability: [{day: 'monday', startTime: '10:00'}]
    })
      .save()
      .catch((err) => {
        const { message } = err.errors['availability.0.startTime']
        assert(message.includes('Cast to Date failed'));
        done();
      });
  });

  it('Should validate Student Availability endTime as date', (done) => {
    const student = new Student({ 
      email: 'm@m.com',
      availability: [{day: 'monday', endTime: '10:00'}]
    })
      .save()
      .catch((err) => {
        const { message } = err.errors['availability.0.endTime']
        assert(message.includes('Cast to Date failed'));
        done();
      });
  });

});
