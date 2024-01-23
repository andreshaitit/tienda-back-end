const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/detail', productsController.detail);

router.get('/list', productsController.list);

module.exports = router