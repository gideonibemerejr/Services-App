const User = require('../models/user');

module.exports = {
    index,
}

function index(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = re.query.sor || 'name';
    User.find({}, (err, users) => {
        if (err) return next(err);
        res.render('admin/users/index', {users, });
    })
}