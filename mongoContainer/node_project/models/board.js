const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Board = new Schema ({
        boardId: { type: String, required: true },
        boardName: { type: String, required: true },
        boardColumns: [{
            columnId: { type: String, required: false },
            columnName: { type: String, required: false },
            columnTasks: [{
                taskId: { type: String, required: false },
                taskName: { type: String, required: false },
            }],
        }],
});

module.exports = mongoose.model('Board', Board);