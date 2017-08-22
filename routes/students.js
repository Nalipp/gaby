const express = require('express');
const router = express.Router();

const studentRepo = require('../src/studentRepo');

router.get('/index', (req, res) => {
  res.redirect('/students');
});

router.get('/', (req, res) => {
  studentRepo.getStudents(result => {
    res.render('students/index', { students: result.data, 
                                   message: result.err });
  });
});

router.get('/new', (req, res) => {
  res.render('students/new');
});

router.post('/new', (req, res) => {
  studentRepo.createStudent(req.body, result => {
    if (result.err) res.render('students/new', { message: result.err });
    else res.redirect('/students/index');
  });
});

router.get('/:id', (req, res) => {
  studentRepo.getStudent(req.params.id, (result) => {
    res.render('students/show', { student: result.data,
                                  message: result.err });
  });
});

router.post('/:id', (req, res) => {
  studentRepo.updateTeacher(req.params.id, req.body, (result) => {
    if (result.err) 
      res.render('students/edit/' + req.params.id, { message: result.err });
    else res.redirect('/students/' + req.params.id);
  });
});

router.get('/edit/:id', (req, res) => {
  studentRepo.getStudent(req.params.id, (result) => {
    if (result.err) 
      res.render('students/edit/' + req.params.id, { message: 'something went wrong' }); 
    else res.render('students/edit', { student: result.data });
  });
});

router.post('/delete/:id', (req, res) => {
  studentRepo.deleteStudent(req.params.id, (result) => {
    if (result.err) 
      res.render('students/edit' + req.params.id, { message: 'something went wrong' });
    else res.redirect('/students/index');
  });
});


module.exports = router;
