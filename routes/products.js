const express = require('express')
const router = express.Router()

const {indexStatic, index} = require('../controllers/products')

router.route('/').get(index)
router.route('/static').get(indexStatic)

module.exports = router