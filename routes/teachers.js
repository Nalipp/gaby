const express = require('express');
const router = express.Router();

const teacherRepo = require('../src/teacherRepo');

router.get('/', (req, res) => {
  teacherRepo.getTeachers(result => {
    if (result.err) return console.log(result.err); 
    res.render('teachers/index', { teachers: result.data });
  });
});

router.get('/new', (req, res) => {
  res.render('teachers/new');
});

router.post('/new', (req, res) => {
  teacherRepo.createTeacher(req.body, result => {
    if (result.err) return console.log(result.err); 
    res.redirect('/teachers/index');
  });
});

router.get('/:id', (req, res) => {
  teacherRepo.getTeacher(req.params.id, (result) => {
    if (result.err) return console.log(result.err); 
    res.render('teachers/show', { teacher: result.data });
  });
});

router.post('/:id', (req, res) => {
  teacherRepo.updateTeacher(req.params.id, req.body, (result) => {
    if (result.err) return console.log(result.err); 
    res.redirect('/teachers/' + req.params.id);
  });
});

router.get('/edit/:id', (req, res) => {
  teacherRepo.getTeacher(req.params.id, (result) => {
    if (result.err) return console.log(result.err); 
    res.render('teachers/edit', { teacher: result.data });
  });
});

router.post('/delete/:id', (req, res) => {
  teacherRepo.deleteTeacher(req.params.id, (result) => {
    if (result.err) return console.log(result.err); 
    res.redirect('/teachers/index');
  });
});


module.exports = router;
