const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin/admins');
const servicesCtrl = require('../controllers/admin/services')
const apptsCtrl = require('../controllers/admin/appts');
const passport = require('passport');
const utils = require('../utils/utils');

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

/* Admin Services Access */
router.get('/services', servicesCtrl.index);
router.get('/services/new', servicesCtrl.newService);
// router.get('/services/:id', servicesCtrl.show);

router.post('/services', utils.hasInfo, servicesCtrl.create);

// router.put('/services/:id', servicesCtrl.update);
// router.delete('/services/:id', servicesCtrl.delete);
// router.get('/services/:id/edit', servicesCtrl.edit);


// /* Admin Appts Access */
// router.get('/appointments', apptsCtrl.index);
// router.get('/calendarJSON', apptsCtrl.data);

// /* Admin Tasks Access */
// router.get('/tasks', tasksCtrl.index);

// /* Admin Tasks Access */
// router.get('/revenue', revenueCtrl.index);

module.exports = router;
