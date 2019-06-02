const router = require('express').Router();
const userController = require('../../controllers/controller');

router.route("/newUser")
    .get(function(req, res) {
        res.json({test: "this get request from user/a works"})
    })
    .post(userController.userCreate);

module.exports = router;