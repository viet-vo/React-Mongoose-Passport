// Dependency List
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
// const routes = ('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const MONGOURI = process.env.MONGODB_URI;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Conditional Middleware
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
// app.use(routes);
mongoose.connect(MONGOURI, { useNewUrlParser: true});

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});
