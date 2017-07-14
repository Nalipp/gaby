var express = require('express');
var router = express.Router();

var teacherRepo = require('../../src/teacherRepo');

router.get('/index', (req, res) => {
  teacherRepo.getTeachers(result => {
    if (result.err) return console.log(err); 
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


// router.get('/signup', (req, res) => {
//   res.render('users/signup');
// });

// router.post('/signup', (req, res) => {
//   console.log('signup...req.body')
//   console.log(req.body)
//   userRepo.getUserByEmail(req.body.email, cb => {
//     if (cb === null) {
//       userRepo.createUser(req.body, cb => {
//         if (cb.err) {
//           const error = 'Unable to create user';
//           res.render('users/signup', {error: cb.err, course: req.body});
//         } else { 
//           const success = 'to the class ' + req.body.name + '!';
//           res.render('users/signup', {success: success, course: req.body});
//         }
//       });
//     } else { 
//       userRepo.createCheckIn(req.body, cb => {
//         const success = 'back to class ' + req.body.name + '!';
//         res.render('users/signup', {success: success, course: req.body});
//       });
//     }
//   });
// });

// router.get('/:id', (req, res) => {
//   userRepo.getUser(req.params.id, user => {
//     res.render('users/show', { user, user });
//   });
// });

// router.get('/:id/edit', (req, res) => {
//   userRepo.getUser(req.params.id, user => {
//     res.render('users/edit', { user: user });
//   });
// });

// router.post('/:id', (req, res) => {
//   userRepo.updateUser(req.params.id, req.body, user => {
//     res.redirect('/users/' + req.params.id);
//   });
// });

// router.post('/:id/delete', (req, res) => {
//   userRepo.deleteUser(req.params.id, result => {
//     res.redirect('/users');
//   });
// });

// module.exports = router;

