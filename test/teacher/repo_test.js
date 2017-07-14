const Repo = require('../../src/teacherRepo');
const Teacher = require('../../model/teacher');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const should = chai.should();
chai.use(chaiHttp);

describe('Teacher Repo routes', () => {
  let jane;

  beforeEach( (done) => {
    jane = new Teacher({
      name: 'jane',
      email: 'jane@mail.com'
    });
    jane.save( (err) => {
      done();
    });
  });

  afterEach( (done) => {
    Teacher.collection.drop();
    done();
  });

  it('should list all teachers with getTeachers()', (done) => {
    Repo.getTeachers(teachers => {
      teachers.data.should.be.a('array');
      teachers.data[0].should.have.property('_id');
      teachers.data[0].should.have.property('name').eql('jane');
      teachers.data[0].should.have.property('email').eql('jane@mail.com');
      teachers.data.length.should.be.eql(1);
      done();
    });
  });

  it('should add new teacher with createUser()', (done) => {
    const joe = new Teacher({name: 'joe', email: 'joe@mail.com'});
    Repo.createTeacher(joe, newTeacher => {
      newTeacher.data.should.have.property('name').eql('joe');
      newTeacher.data.should.have.property('email').eql('joe@mail.com');
      Repo.getTeachers(teachers => {
        teachers.data.should.be.a('array');
        teachers.data.length.should.be.eql(2);
        done();
      });
    });
  });

  it('should list single teacher with getTeacher()', (done) => {
    Repo.getTeacher(jane._id, teacher => {
      teacher.data.should.have.property('name').eql('jane');
      done()
    });
  });

  it('should update existing teacher with updateTeacher()', (done) => {
    jane.email = 'm@m.com';
    Repo.updateTeacher(jane._id, jane, teacher => {
      Repo.getTeacher(jane._id, teacher2 => {
        teacher2.data.email.should.be.equal('m@m.com');
        done();
      });
    })
  });

  it('should delete existing teacher with deleteTeacher()', (done) => {
    Repo.getTeachers(teachers => {
      teachers.data.length.should.be.eql(1);
      Repo.deleteTeacher(jane._id, result => {
        Repo.getTeachers(teachers => {
          teachers.data.length.should.be.eql(0);
          done();
        });
      });
    });
  });
});
