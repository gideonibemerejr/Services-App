const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admins');
const passport = require('passport');
const utils = require('../utils/utils');

/* ADMIN LOGIN */


router.get('/', utils.isLoggedIn, adminCtrl.index);
router.get('/services', adminCtrl.services);

module.exports = router;