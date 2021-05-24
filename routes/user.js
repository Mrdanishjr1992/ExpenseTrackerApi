const router = require('express').Router();
const controllers = require('../controllers');

// User Create
router.post('/', controllers.user.create);

// User login
router.post('/login', controllers.user.login);

module.exports = router;
