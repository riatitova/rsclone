const generator = require('../utils/idGenerator');

const path = require('path');
const User = require('../models/user');


exports.getUserDataByName = (req, res) => {
    const name = req.query.name;
    console.log('get data by name:', name);
    User.find({ name: name }).exec((err, user) => {
        if (err) {
            return res.send(500, err);
        }
        res.status(200).send(user);
    })
};

exports.createUser = (req, res) => {
    console.log(req.body);
    const newId = generator.generateId();

    const userData = { 
        ...req.body,
        id: newId,
    };
    
    const newUser = new User(userData);
    console.log('new user data:', userData);
    newUser.save((err) => {
        if (err) {
            res.status(400).send('Unable to save user to database');
        } else {
            res.status(200).send(userData);
        }
    });
};

exports.updateUser = (req, res) => {
    const userData = { ...req.body };

    console.log('updated user:', userData);

    User.updateOne({ id: userData.id }, {...userData}, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(200).send(result);
        }
    });
<<<<<<< HEAD
};

exports.deleteUserById = (req, res) => {
    const userId = req.query.id;

    console.log('get data by userId:', userId);

    User.deleteOne({ id: userId }, () => {
        if (err) {
            return res.send(500, err);
        }
        res.status(200).send(userId);
    })
=======
>>>>>>> feat: rest API
};

exports.deleteBoardById = (req, res) => {
    const { boardId } = req.query;

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