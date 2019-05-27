const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');
const { UserModel } = require('../models');


module.exports = function(passport) {
    passport.use(
        new LocalStrategy(
            function(username, password, done) {
                UserModel.findOne({ username: username })
                .then(user => {
                    if (err) { return done(err); };
                    if (!user) { return done(null, false); };
                        
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false);
                        };
                    });
                });
            }
        )
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