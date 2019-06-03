// Dependency List
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const MONGOURI = process.env.MONGODB_URI;
const SECRET = process.env.SESSION_SECRET;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
// Conditional Middleware
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

app.use(session({
    secret: SECRET,
    store: new MongoStore({ 
        mongooseConnection: mongoose.connect(MONGOURI, { useNewUrlParser: true}) 
    }),
    resave: false, //required
    saveUninitialized: false //required
}));
mongoose.set('useCreateIndex', true);

app.use(routes);

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});
