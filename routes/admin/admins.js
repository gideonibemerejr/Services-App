const express = require('express');
const router = express.Router();
const adminCtrl = require('../../controllers/admin/admins');
const passport = require('passport');
const utils = require('../../utils/utils');

/* ADMIN LOGIN */

router.get('/', adminCtrl.index);

router.post(
  '/', utils.hasInfo,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

// /* Admin Appts Access */
// router.get('/appointments', apptsCtrl.index);
// router.get('/calendarJSON', apptsCtrl.data);

// /* Admin Tasks Access */
// router.get('/tasks', tasksCtrl.index);

// /* Admin Tasks Access */
// router.get('/revenue', revenueCtrl.index);

module.exports = router;
