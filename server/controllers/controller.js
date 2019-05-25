const db = require('../models');

module.exports = {
    userCreate: function (req, res) {
        db.UserModel
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};