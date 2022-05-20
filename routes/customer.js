const express = require('express');
const checkAuth = require('../middleware/jwtVerify');
const controller = require('../controllers/customer');
const bodyValidator = require("../middleware/bodyValidator");
const createDto = require('../dto/customer.dto');
const router = express.Router();

router.get('/', checkAuth, controller.getAll);
router.post('/', checkAuth, bodyValidator(createDto), controller.create);
router.get('/:CustomerId', checkAuth, controller.getById);
router.patch('/:CustomerId', checkAuth, controller.update);
router.delete('/:CustomerId', checkAuth, controller.remove);
router.get('/search/:searchKey', checkAuth, controller.search);

module.exports = router;
