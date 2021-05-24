const router = require('express').Router();
const controllers = require('../controllers');

// User Create
router.post('/', controllers.user.create);

// User login
router.post('/login', controllers.user.login);

// User Delete
router.delete('/delete',  controllers.user.destroy);


module.exports = router;
