const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: String,
    avatar: String,
    email: String,
    Street: String,
    Zip: Number,
    Phone: String,
    appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
    isAdmin: {
      type: Boolean,
      default: false
    },
    googleId: String,
    facebookId: String
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', function (next) {
  let user = this;
  let pwd = this.password;
  if (!user.isAdmin) next();
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(pwd, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    })
  })
})

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, res) {
    if (err) {
      console.log(err);
      return cb(err);
    }
    console.log(res);
    cb(null, res);
  });
};

module.exports = mongoose.model('User', userSchema);
