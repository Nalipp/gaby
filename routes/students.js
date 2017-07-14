const express = require('express');
const router = express.Router();

const studentRepo = require('../src/studentRepo');

router.get('/index', (req, res) => {
  res.redirect('/students');
});

router.get('/', (req, res) => {
  studentRepo.getStudents(result => {
    console.log('getting new student index...'); 
    if (result.err) return console.log(err); 
    res.render('students/index', { students: result.data });
  });
});

router.get('/new', (req, res) => {
  res.render('students/new');
});

router.post('/new', (req, res) => {
  studentRepo.createStudent(req.body, result => {
    if (result.err) return console.log(result.err); 
    res.redirect('/students/index');
  });
});

router.get('/:id', (req, res) => {
  studentRepo.getStudent(req.params.id, (result) => {
    if (result.err) return console.log(result.err); 
    res.render('students/show', { student: result.data });
  });
});

router.post('/:id', (req, res) => {
  studentRepo.updateTeacher(req.params.id, req.body, (result) => {
    if (result.err) return console.log(result.err); 
    res.redirect('/students/' + req.params.id);
  });
});

router.get('/edit/:id', (req, res) => {
  studentRepo.getStudent(req.params.id, (result) => {
    if (result.err) return console.log(result.err); 
    res.render('students/edit', { student: result.data });
  });
});

router.post('/delete/:id', (req, res) => {
  studentRepo.deleteStudent(req.params.id, (result) => {
    if (result.err) return console.log(result.err); 
    res.redirect('/students/index');
  });
});


module.exports = router;
