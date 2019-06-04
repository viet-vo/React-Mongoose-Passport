const router = require('express').Router();
const userController = require('../../controllers/controller');

router.route("/")
    .get(userController.userLoggedIn);

router.route("/newUser")
    .post(userController.userCreate);

router.route("/checkLogin")
    .post(userController.checkLogin);

router.route("/logout")
    .post(userController.userLoggedOut);

module.exports = router;