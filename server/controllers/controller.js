const { UserModel } = require('../models');
const { forwardAuthenticated } = require('../config/auth');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = {
    userCreate: function (req, res) {
        UserModel
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // userLogin: function (req, res, next) {
    //     passport.authenticate('local', {
    //         successRedirect: '/',
    //         failureRedirect: '/login',
    //         failureFlash: true,
    //     })(req, res, next);
    // },
};