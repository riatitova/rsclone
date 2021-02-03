const User = require('../models/user');

exports.authantiction = (req, res, next) => {
    const name = req?.body?.name || req?.query?.name;
    const password = req?.body?.password || req?.query?.password;
    const id = req?.body?.id || req?.query?.id;

    console.log(name, password);

    if (name && password) {
        User.find({ name: name, password: password }).exec((err, user) => {
            if (err) {
                return res.send(500, err);
            }
            return next();
        })
    } else {
        return res.status(401).send('notAuthorise');   
    }
};