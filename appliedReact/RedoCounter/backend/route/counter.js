const express = require('express');
const router = express.Router();
const showCount = require('../controller/controller')

router.get('/', showCount.showCount)
router.put('/', showCount.addCount)

module.exports = router