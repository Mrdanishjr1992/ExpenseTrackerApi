const router = require('express').Router();
const controllers = require('../controllers');

// Budget Index
router.post('/index', controllers.budget.index);

// Budget Create
router.post('/', controllers.budget.create);

// Budget Read
router.get('/:id', controllers.budget.show);

// Budget Update
router.put('/:id', controllers.budget.update);

// Budget Delete
router.delete('/:id', controllers.budget.destroy);

module.exports = router;
