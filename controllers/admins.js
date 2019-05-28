const Service = require('../models/service');


module.exports = {
    index,
    services
}

function index(req, res, next) {
    Service.find({}, (err, services) => {
        res.render('admin/index', {
            title: 'Dashboard | Service App',
            heading: 'Dashboard',
            services

        });
    })
   
}

function services(req, res, next) {
    Service.find({}, (err, services) => {
        res.render('admin/services/index', {
            title: 'Dashboard | Services',
            heading: 'Services',
            services
        });
    })
}