const passport = require('passport');
const db = require('../models');

module.exports = {
    userCreate: function (req, res) {
        db.UserModel
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    checkLogin: function (req, res) {
        passport.authenticate('local'), 
        console.log('logged in', req.user);
        const userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    },
    userLoggedIn: function (req, res) {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        };
    },
    userLoggedOut: function (req, res) {
        if (req.user) {
            req.logout()
            res.send({ msg: 'logging out' })
        } else {
            res.send({ msg: 'no user to log out' })
        };
    },
};