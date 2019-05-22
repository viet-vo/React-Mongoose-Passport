const router = require('express').Router();
// controller path

router.route("/a")
    .get(function(req, res) {
        res.json({test: "the subroute's test passed"})
    });

module.exports = router;