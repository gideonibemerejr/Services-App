const Service = require('../models/service');

module.exports = {
    index,
    services,
    login,
    register
}
function register(req, res, next) {
res.render('register',{title: 'Register'});
}

function login(req, res, next){
    res.render('login', { title: 'Login' });
}

function index(req, res, next) {
    Service.find({}, (err, services) => {
        res.render('index', {
            title: 'Service App | Quality Detailing',
            heading: 'Home',
            services,
            user: req.user,

        });
    })

}

function services(req, res, next) {
    Service.find({}, (err, services) => {
        res.render('services/index', {
            title: 'Dashboard | Services',
            heading: 'Services',
            services,
            user: req.user,

        });
    })
}