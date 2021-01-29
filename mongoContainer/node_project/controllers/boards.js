const idGenerator = require('../utils/idGenerator');

const path = require('path');
const Board = require('../models/board');

<<<<<<< HEAD
exports.getBoardById = (req, res) => {
    const { boardId } = req.query.id;
=======
exports.getBoardaById = (req, res) => {
    const { boardId } = req.param.id;
>>>>>>> test: fetch
    console.log('get data by boardId:', boardId);

    Board.find({ boardId }).exec((err, board) => {
        if (err) {
            return res.send(500, err);
        }
        res.status(200).send(board);
    })
};

exports.createBoard = (req, res) => {
    const boardData = {
        ...req.body,
        boardId: idGenerator(),
        boardColumns: req.body.boardColumns.map((column) => {
            const newColumnTasks = column.columnTasks.map((task) => ({ ...task, taskId: idGenerator() }));
            const newColumn = { ...column, newColiumnTasks };
            return { ...newColumn, columnId: idGenerator() }
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
    const { boardId } = req.body;
    const boardData = req.body;
    
    console.log('updated board:', boardData);

    Board.findByIdAndUpdate(boardId, { ...boardData }, (err, result) => {
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
};

// getBoardById
// deleteBoardById