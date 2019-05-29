const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/users/:id/show', usersCtrl.show);

module.exports = router;
