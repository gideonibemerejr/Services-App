module.exports = {
  isLoggedIn
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) return next();
  res.redirect('/');
}
