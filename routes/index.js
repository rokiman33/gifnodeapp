const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/jwtVerify');
const tokenController = require('../controllers/token');
const uploadController = require('../controllers/upload');

const customerRouter = require('./customer');
const documentRouter = require('./document');
const usersRouter = require('./users');


router.post('/token', tokenController.authLogin);
router.post('/upload', checkAuth, uploadController.uploadFile);

router.use('/customer', customerRouter);
router.use('/document', documentRouter);
router.use('/users', usersRouter);

module.exports = router;
