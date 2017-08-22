const Repo = require('../../src/studentRepo');
const Student = require('../../model/student');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Student Repo routes', () => {
  let jane;

  beforeEach( (done) => {
    jane = new Student({
      name: 'jane',
      email: 'jane@mail.com'
    });
    jane.save( () => {
      done();
    });
  });

  afterEach( (done) => {
    Student.collection.drop();
    done();
  });

  it('should list all students with getStudents()', (done) => {
    Repo.getStudents(students => {
      students.data.should.be.a('array');
      students.data[0].should.have.property('_id');
      students.data[0].should.have.property('name').eql('jane');
      students.data[0].should.have.property('email').eql('jane@mail.com');
      students.data.length.should.be.eql(1);
      done();
    });
  });

  it('should add new student with createUser()', (done) => {
    const joe = new Student({name: 'joe', email: 'joe@mail.com'});
    Repo.createStudent(joe, newTeacher => {
      newTeacher.data.should.have.property('name').eql('joe');
      newTeacher.data.should.have.property('email').eql('joe@mail.com');
      Repo.getStudents(students => {
        students.data.should.be.a('array');
        students.data.length.should.be.eql(2);
        done();
      });
    });
  });

  it('should list single student with getStudent()', (done) => {
    Repo.getStudent(jane._id, student => {
      student.data.should.have.property('name').eql('jane');
      done()
    });
  });

  it('should update existing student with updateTeacher()', (done) => {
    jane.email = 'm@m.com';
    Repo.updateTeacher(jane._id, jane, student => {
      Repo.getStudent(jane._id, teacher2 => {
        teacher2.data.email.should.be.equal('m@m.com');
        done();
      });
    })
  });

  it('should delete existing student with deleteStudent()', (done) => {
    Repo.getStudents(students => {
      students.data.length.should.be.eql(1);
      Repo.deleteStudent(jane._id, result => {
        Repo.getStudents(students => {
          students.data.length.should.be.eql(0);
          done();
        });
      });
    });
  });
});
