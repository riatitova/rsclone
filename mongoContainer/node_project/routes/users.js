const express = require('express');
const router = express.Router();
const user = require('../controllers/users');
<<<<<<< HEAD
=======
const auth = require('../utils/authantiction');
>>>>>>> feat: rest API

router.post('/', (req, res) => {
    user.createUser(req,res);
});

router.put('/', (req, res, next) => auth.authantiction(req, res, next), (req, res) => {
    user.updateUser(req, res);
});

router.get('/', auth.authantiction, (req, res) => {
    user.getUserDataByName(req,res);
});

router.delete('/', (req, res) => user.deleteUserById(req, res));

module.exports = router;