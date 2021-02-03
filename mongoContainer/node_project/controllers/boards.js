const generator = require('../utils/idGenerator');

const path = require('path');
const Board = require('../models/board');

<<<<<<< HEAD
<<<<<<< HEAD
exports.getBoardById = (req, res) => {
    const { boardId } = req.query.id;
=======
exports.getBoardaById = (req, res) => {
    const { boardId } = req.param.id;
>>>>>>> test: fetch
=======
exports.getBoardById = (req, res) => {
    const { boardId } = req.query;
>>>>>>> feat: rest API
    console.log('get data by boardId:', boardId);

    Board.find({ boardId: boardId }).exec((err, board) => {
        if (err) {
            return res.send(500, err);
        }
        res.status(200).send(board);
    })
};

exports.createBoard = (req, res) => {
    const rawBoardData = req.body.boardData;

    const boardData = {
        ...rawBoardData,
        boardId: generator.generateId(),
        boardColumns: rawBoardData?.boardColumns?.map((column) => {
            const newColumnTasks = column.columnTasks.map((task) => ({ ...task, taskId: generator.generateId() }));
            const newColumn = { ...column, newColiumnTasks };
            return { ...newColumn, columnId: generator.generateId() }
        }),
    };

    const newBoard = new Board(boardData);
    console.log('new board data:', boardData);
    newBoard.save((err) => {
        if (err) {
            res.status(400).send('Unable to save board to database');
        } else {
            res.status(200).send(boardData);
        }
    });
};

exports.updateBoardById = (req, res) => {
    const { boardId, boardData } = req.body;
    
    console.log('updated board:', boardData);

    Board.findOneAndUpdate(boardId, { ...boardData }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(result);
        }
    });
};

exports.deleteBoardById = (req, res) => {
    const { boardId } = req.query;
<<<<<<< HEAD
};

// getBoardById
// deleteBoardById
=======

    console.log('delete board:', boardId);

    Board.deleteOne(boardId, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(result);
        }
    });
} 
>>>>>>> feat: rest API
