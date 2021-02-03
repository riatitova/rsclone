const express = require('express');
const router = express.Router();
const boards = require('../controllers/boards');
const auth = require('../utils/authantiction');


router.post('/', (req, res, next) => auth.authantiction(req, res, next), (req, res) => {
    boards.createBoard(req,res);
});

router.put('/', (req, res, next) => auth.authantiction(req, res, next), (req, res) => {
    boards.updateBoardById(req, res);
});

router.get('/', (req, res, next) => auth.authantiction(req, res, next), (req, res) => {
    boards.getBoardById(req,res);
});

router.delete('/', (req, res, next) => auth.authantiction(req, res, next), (req, res) => {
    boards.deleteBoardById(req,res);
});

module.exports = router;