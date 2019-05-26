// Dependency List
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const expressSession = require('express-session');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const MONGOURI = process.env.MONGODB_URI;
const SESSION_SEC = process.env.SESSION_SECRET;
const db = require("./models");

// Passport Setup
passport.use(new Strategy(
    function(username, password, cb) {
        //
    }
));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(expressSession({ secret: SESSION_SEC, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Conditional Middleware
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

mongoose.connect(MONGOURI, { useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

app.use(routes);

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});
