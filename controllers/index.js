const Service = require('../models/service');

module.exports = {
  index,
  login,
  register,
  contact

};

function contact(req, res) {
  res.render('contact', { title: 'Contact', user: req.user })
}

function register(req, res, next) {
  res.render('register', { title: 'Register' });
}

function login(req, res, next) {
  res.render('login', { title: 'Login' });
}

function index(req, res, next) {
  Service.find({}, (err, services) => {
    res.render('index', {
      title: 'Service App | Quality Detailing',
      heading: 'Home',
      services,
      user: req.user
    });
  });
}

