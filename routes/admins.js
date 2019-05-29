const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admins');
const apptsCtrl = require('../controllers/appts');
const passport = require('passport');
const utils = require('../utils/utils');

/* ADMIN LOGIN */

router.get('/', utils.isLoggedIn, adminCtrl.index);
router.post(
  '/', utils.hasInfo,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);
router.get('/services', adminCtrl.services);
router.get('/appointments', adminCtrl.appts);
router.get('/calendarJSON', apptsCtrl.data);
router.get('/tasks', adminCtrl.tasks);
router.get('/revenue', adminCtrl.revenue);

module.exports = router;
