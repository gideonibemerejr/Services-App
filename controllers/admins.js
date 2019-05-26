
module.exports = {
    index,
}

function index(req, res, next) {
    res.render('admin/index', {
        title: 'Dashboard'
    });
}