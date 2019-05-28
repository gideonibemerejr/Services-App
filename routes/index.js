var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index');
/* GET home page. */
router.get('/', indexCtrl.index);

/* GET services page. */
router.get('/services', indexCtrl.services);
/* GET login and register pages. */
router.get('/login', indexCtrl.login);
router.get('/register', indexCtrl.register);


module.exports = router;
