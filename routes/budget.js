const router = require('express').Router();
const controllers = require('../controllers');

// Budget Index
router.post('/index', controllers.budget.index);

// Budget Create
router.post('/', controllers.budget.create);

// Budget Read
router.post('/read', controllers.budget.show);

// Budget Update
router.put('/update', controllers.budget.update);

// Budget Delete
router.delete('/delete', controllers.budget.destroy);

module.exports = router;
