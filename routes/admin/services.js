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


router.delete('/:id', servicesCtrl.deleteService);
router.get('/:id/edit', servicesCtrl.edit);
router.put('/:id', servicesCtrl.update);

module.exports = router;