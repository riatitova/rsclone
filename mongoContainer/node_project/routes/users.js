const express = require('express');
const router = express.Router();
const user = require('../controllers/users');

router.post('/', (req, res) => {
    user.createUser(req,res);
});

router.put('/', (req, res) => {
    user.updateUser(req, res);
});

router.get('/', (req, res) => {
    user.getUserDataById(req,res);
});

router.delete('/', (req, res) => user.deleteUserById(req, res));

module.exports = router;