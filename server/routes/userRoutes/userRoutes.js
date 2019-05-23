const router = require('express').Router();
const userController = require('../../controllers');

router.route("/a")
    .post(userController.create);

module.exports = router;