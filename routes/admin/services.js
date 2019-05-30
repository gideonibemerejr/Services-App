const express = require('express');
const router = express.Router();
const adminCtrl = require('../../controllers/admin/admins');
const servicesCtrl = require('../../controllers/admin/services')
const passport = require('passport');
const utils = require('../../utils/utils');

/* Admin Services Access */
router.get('/', servicesCtrl.index);
router.get('/new', servicesCtrl.newService);
// router.get('/services/:id', servicesCtrl.show);

router.post('/', utils.hasInfo, servicesCtrl.create);

// router.put('/services/:id', servicesCtrl.update);
// router.delete('/services/:id', servicesCtrl.deleteService);
// router.get('/services/:id/edit', servicesCtrl.edit);