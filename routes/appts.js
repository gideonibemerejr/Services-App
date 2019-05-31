const express = require('express');
const router = express.Router();
const passport = require('passport');
const utils = require('../utils/utils');
const apptsCtrl = require('../controllers/appts');


router.get('/users/:id/appts/new', apptsCtrl.newAppt);
router.post('/users/:id/appts', apptsCtrl.create);

module.exports = router;