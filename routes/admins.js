const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admins');

router.get('/', adminCtrl.index);
router.get('/services', adminCtrl.services);

module.exports = router;