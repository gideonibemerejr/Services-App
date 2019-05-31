const User = require('../models/user');
const Service = require('../models/service');
const Appt = require('../models/appt');


module.exports = {
  appts,
  show
};

function appts(req, res, next) {
  User.findById(req.params.id).populate('appointments').exec((err, user) => {
    if (err) return next(err);
    Service.find({}, (err, services) => {
      if (err) return next(err);
      Appt.find({ user: req.params.id }, (err, appts, next) => {
        if (err) return next(err);
        res.render('users/appts', { user: req.user, services, appts });
      })

    })
    console.log(user);
  })
}

function show(req, res, next) {
  User.findById(req.params.id).populate('appointments').exec((err, user) => {
    if (err) return next(err);
    Service.find({}, (err, services) => {
      if (err) return next(err);
      res.render('users/show', { user: req.user, services });
    })
    console.log(user);
  });
}


