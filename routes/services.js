const express = require('express');
const router = express.Router();
const passport = require('passport');
const utils = require('../utils/utils');
const servicesCtrl = require('../controllers/services');

router.get('/', servicesCtrl.index);
router.get('/:id', servicesCtrl.show);

module.exports = router;