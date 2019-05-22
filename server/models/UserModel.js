const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
require("dotenv").config();
const SALT = parseInt(process.env.SALT, 10);

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: false
    },
    firstname: {
      type: String,
      require: false
    },
    lastname: {
      type: String,
      require: false
    }
  },
  {
    versionKey: false
  }
);

userSchema.pre("save", function(next) {
    var user = this;
    if (!user.isModified("password")) {
      return next();
    }
    bcrypt.hash(user.password, SALT).then(hashedPassword => {
      user.password = hashedPassword;
      next();
    });
  },
  function(err) {
    next(err);
  }
);

userSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

const User = mongoose.model("Users", userSchema);

module.exports = User;