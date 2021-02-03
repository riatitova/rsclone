const express = require('express');
const router = express.Router();
const boards = require('../controllers/boards');

router.post('/', (req, res) => {
    boards.createBoard(req,res);
});

router.put('/', (req, res) => {
    boards.updateBoardById(req, res);
});

router.get('/:boardId', (req, res) => {
    boards.getBoardById(req,res);  
});

router.delete('/:boardId', (req, res) => {
    boards.deleteBoardById(req,res);
});

module.exports = router;