module.exports = {
  isLoggedIn,
  hasInfo
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) return next();
  res.redirect('/login');
}

function hasInfo(req, res, next) {
  if (req.body.name !== '' && req.body.password !== '') return next();
  res.redirect('back');
}

