const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/:id/show', usersCtrl.show);
router.get('/:id/appts', usersCtrl.appts);

module.exports = router;
