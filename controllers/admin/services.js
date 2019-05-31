const Service = require('../../models/service');


module.exports = {
    index,
    deleteService,
    newService,
    create,
    edit,
    update

};

function update(req, res, next) {
    Service.updateOne({ _id: req.params.id }, req.body, (err, service) => {
        res.redirect('/ceo/services');
    })
}

function edit(req, res, next) {
    Service.find({}, (err, services) => {
        Service.findById(req.params.id, (err, service) => {
            res.render('admin/services/edit', { service, services });
        })
    });
}

function newService(req, res, next) {
    Service.find({}, (err, services) => {
        res.render('admin/services/new',
            {
                title: 'New Service | Dashboard',
                heading: 'New Service',
                services
            }
        );
    })

}

function create(req, res, next) {
    console.log(req.body.serviceName);
    Service.create(req.body);
    res.redirect('/ceo/services');
}

function deleteService(req, res, next) {
    Service.findByIdAndDelete(req.params.id, (err, service) => {
        if (err) next(err);
        res.redirect('/ceo/services');
    });
}

function index(req, res, next) {
    Service.find({}, (err, services) => {
        res.render('admin/services/index', {
            title: 'Services | Dashboard',
            heading: 'Services',
            services
        });
    });
}