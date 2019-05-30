const Service = require('../../models/service');


module.exports = {
    index,
    newService,
    create,

};
function newService(req, res, next) {
    res.render('admin/services/new',
        {
            title: 'New Service',
            heading: 'New Service'
        }
    );
}
function create(req, res, next) {
    console.log(req.body.serviceName);
    Service.create(req.body);
    res.redirect('/ceo/services');
}

function index(req, res, next) {
    Service.find({}, (err, services) => {
        res.render('admin/services/index', {
            title: 'Dashboard | Services',
            heading: 'Services',
            services
        });
    });
}