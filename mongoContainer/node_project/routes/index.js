const express = require('express');
const router = express.Router();
const path = require('path');
const boards = require('./boards');
const users = require('./users');

// router.use ((req,res,next) => {
//   console.log('/' + req.method);
//   consoele.log('if not auth, then dont use next() here');
//   next();
// });

router.get('/',(req,res) => {
  res.sendFile(path.resolve('views/index.html'));
});

router.use('/users', users);

router.use('/boards', boards);



module.exports = router;
