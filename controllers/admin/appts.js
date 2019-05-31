const Appt = require('../../models/appt');
const Service = require('../../models/service');

module.exports = {
  index,

};


function index(req, res, next) {
  Service.find({}, (err, services) => {
    res.render('appts/index', {
      title: 'Appointments | Dashboard',
      heading: 'Appointments',
      services
    });
  });
}


