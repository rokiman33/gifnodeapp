const express = require('express');
const checkAuth = require('../middleware/jwtVerify');
const controller = require('../controllers/users');
const bodyValidator = require("../middleware/bodyValidator");
const createDto = require('../dto/users.dto');
const router = express.Router();

router.get('/', checkAuth, controller.getAll);
router.post('/', checkAuth, bodyValidator(createDto), controller.create);
router.get('/:Id', checkAuth, controller.getById);
router.patch('/:Id', checkAuth, controller.update);
router.delete('/:Id', checkAuth, controller.remove);
router.get('/search/:searchKey', checkAuth, controller.search);

module.exports = router;
