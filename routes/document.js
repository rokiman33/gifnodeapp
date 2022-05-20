const express = require('express');
const checkAuth = require('../middleware/jwtVerify');
const controller = require('../controllers/document');
const bodyValidator = require("../middleware/bodyValidator");
const createDto = require('../dto/document.dto');
const router = express.Router();

router.get('/', checkAuth, controller.getAll);
router.post('/', checkAuth, bodyValidator(createDto), controller.create);
router.get('/:DocumentId', checkAuth, controller.getById);
router.patch('/:DocumentId', checkAuth, controller.update);
router.delete('/:DocumentId', checkAuth, controller.remove);
router.get('/search/:searchKey', checkAuth, controller.search);

router.get('/getby/Customerid/:CustomerId', checkAuth, controller.getByCustomerid);
module.exports = router;
