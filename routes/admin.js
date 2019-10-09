const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-report', adminController.postSendReport);

router.post('/add-item', adminController.postItem);

router.get('/get-item', adminController.getItem);

module.exports = router;