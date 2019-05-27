const passport = require('passport');
const db = require('../models');

module.exports = {
    userCreate: function (req, res) {
        db.UserModel
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userLogin: 
        passport.authenticate('local'),
        function(req, res) {
            res.resdirect('/users/' + req.user.username)
        }
};