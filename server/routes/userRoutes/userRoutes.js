const router = require('express').Router();
const userController = require('../../controllers/controller');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
require('../../config/passport');

router.route("/newUser")
    .get(function(req, res) {
        res.json({test: "this get request from user/newUser works"})
    })
    .post(userController.userCreate);

router.route("/checkLogin")
    .post((req, res, next) => {
        passport.authenticate('local', {
          successRedirect: '/dashboard',
          failureRedirect: '/users/login',
          failureFlash: true
        })(req, res, next)});

module.exports = router;