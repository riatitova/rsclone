const generator = require('../utils/idGenerator');

const path = require('path');
const User = require('../models/user');


exports.getUserDataById = (req, res) => {
    const userId = req.query.id;
    console.log('get data by userId:', userId);
    User.find({ id: userId }).exec((err, user) => {
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

    User.update({ id: userData.id }, {...userData}, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(200).send(result);
        }
    });
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
};
