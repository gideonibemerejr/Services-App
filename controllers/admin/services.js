const Service = require('../../models/service');


module.exports = {
    index,
    create,

};

function create(req, res, next) {

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