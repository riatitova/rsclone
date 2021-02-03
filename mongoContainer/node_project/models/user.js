const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
        id:  { type: String, required: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
<<<<<<< HEAD
        boardsIds: [{boardName: String, boardId: String}],
=======
        boardsIds: [{ boardName: String, boardId: String }],
>>>>>>> feat: rest API
});

module.exports = mongoose.model('User', User)
