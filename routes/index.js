const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/session', function(req, res) {
  res.render('sessions/new', {session: req.query});
});

module.exports = router;
