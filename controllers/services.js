const Service = require('../models/service');

module.exports = {
    index,
    show
}
function show() {

}
function index(req, res, next) {
    Service.find({}, (err, services) => {
        res.render('services/index', {
            title: 'Services | Services App',
            heading: 'Services',
            services,
            user: req.user
        });
    });
}
