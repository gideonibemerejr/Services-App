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

/*GET Facebook OAuth login route */
router.get(
  '/auth/twitter',
  passport.authenticate('facebook', { scope: ['email', 'public_profile'] })
);

/* GET Google OAuth callback route */
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

/* GET Google OAuth callback route */
router.get(
  '/twitter/oauth2callback',
  passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


/* GET login and register pages. */
router.get('/login', indexCtrl.login);

router.get('/register', indexCtrl.register);

router.get('/contact', indexCtrl.contact);

module.exports = router;
