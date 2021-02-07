'use strict'

const router = require('express').Router();

router.use('/', require('../component/front'))
router.use('/info', require('../component/info'));

module.exports = router;
