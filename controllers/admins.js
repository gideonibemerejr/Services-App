const Service = require('../models/service');

module.exports = {
  index,
  services,
  tasks,
  appts,
  revenue
};

function index(req, res, next) {
  Service.find({}, (err, services) => {
    res.render('admin/index', {
      title: 'Dashboard | Service App',
      heading: 'Dashboard',
      services
    });
  });
}

function services(req, res, next) {
  Service.find({}, (err, services) => {
    res.render('admin/services/index', {
      title: 'Dashboard | Services',
      heading: 'Services',
      services
    });
  });
}

function appts(req, res, next) {
  Service.find({}, (err, services) => {
    res.render('admin/appts/index', {
      title: 'Dashboard | Services',
      heading: 'Appointments',
      services
    });
  });
}

function tasks(req, res, next) {
  Service.find({}, (err, services) => {
    res.render('admin/services/index', {
      title: 'Dashboard | Services',
      heading: 'Services',
      services
    });
  });
}

function revenue(req, res, next) {
  Service.find({}, (err, services) => {
    res.render('admin/services/index', {
      title: 'Dashboard | Services',
      heading: 'Services',
      services
    });
  });
}
