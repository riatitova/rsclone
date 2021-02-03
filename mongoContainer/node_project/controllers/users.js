const generator = require('../utils/idGenerator');

const path = require('path');
const User = require('../models/user');


exports.getUserDataByName = (req, res) => {
    const name = req.query.name;
    console.log('get data by name:', name);
    User.find({ name: name }).exec((err, user) => {
        if (err) {
            console.log(1);
            return res.send(500, err);
        }
        res.status(200).send(user);
        console.log(2);
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
            return res.status(400).send('Unable to save user to database');
        } else {
            return res.status(200).send(2);;
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
};

exports.deleteUserById = (req, res) => {
    const userId = req.query.id;

    console.log('get data by userId:', userId);

    User.deleteOne({ id: userId }, (err) => {
        if (err) {
            return res.send(500, err);
        }
        res.status(200).send(userId);
    })
};