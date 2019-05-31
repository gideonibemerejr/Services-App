const Service = require('../../models/service');


module.exports = {
  index,
};

function index(req, res, next) {
  Service.find({}, (err, services) => {
    res.render('admin/index', {
      title: 'Dashboard | Service App',
      heading: 'Dashboard',
      services,
      user: req.user
    });
  });
}




// function tasks(req, res, next) {
//   Service.find({}, (err, services) => {
//     res.render('admin/services/index', {
//       title: 'Dashboard | Services',
//       heading: 'Services',
//       services
//     });
//   });
// }

// function revenue(req, res, next) {
//   Service.find({}, (err, services) => {
//     res.render('admin/services/index', {
//       title: 'Dashboard | Services',
//       heading: 'Services',
//       services
//     });
//   });
// }
