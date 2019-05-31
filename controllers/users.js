const User = require('../models/user');
const Service = require('../models/service');


module.exports = {
  index,
  show
};

function index(req, res, next) {
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {};

  let sortKey = re.query.sor || 'name';
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('admin/users/index', { users });
  });
}

function show(req, res, next) {
  User.findById(req.params.id, (err, user) => {
    if (err) return next(err);
    Service.find({}, (err, services) => {
      if (err) return next(err);
      res.render('users/show', { user: req.user, services });
    })


  });
}


