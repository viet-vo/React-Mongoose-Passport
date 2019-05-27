const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const { UserModel } = require('../models');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ username: 'username' }, (username, password, done) => {
            UserModel.findOne({
                username: username
            })
            .then(user => {
                if(!user) {
                    return done(null, false, { message: 'That username is not found' });
                };

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, { message: 'Password does not match the username given' });
                    }
                });
            });
        })        
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        UserModel.findById(id, function(err, user) {
            done(err, user);
        });
    });
};