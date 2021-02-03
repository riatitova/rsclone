const express = require('express');
const router = express.Router();
const boards = require('../controllers/boards');
const auth = require('../utils/authantiction');

<<<<<<< HEAD
router.post('/', (req, res) => {
=======

router.post('/', (req, res, next) => auth.authantiction(req, res, next), (req, res) => {
>>>>>>> feat: rest API
    boards.createBoard(req,res);
});

router.put('/', (req, res, next) => auth.authantiction(req, res, next), (req, res) => {
    boards.updateBoardById(req, res);
});

<<<<<<< HEAD
router.get('/:boardId', (req, res) => {
    boards.getBoardById(req,res);  
=======
router.get('/', (req, res, next) => auth.authantiction(req, res, next), (req, res) => {
    boards.getBoardById(req,res);
>>>>>>> feat: rest API
});

router.delete('/', (req, res, next) => auth.authantiction(req, res, next), (req, res) => {
    boards.deleteBoardById(req,res);
});

module.exports = router;