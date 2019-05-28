var express = require('express');
var router = express.Router();
var passport = require('passport');

const indexCtrl = require('../controllers/index');
/* GET home page. */
router.get('/', indexCtrl.index);

/*GET Google OAuth login route */
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

/* GET Google OAuth callback route */

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/services'
  })
);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

/* GET services page. */
router.get('/services', indexCtrl.services);
/* GET login and register pages. */
router.get('/login', indexCtrl.login);

router.get('/register', indexCtrl.register);

module.exports = router;
