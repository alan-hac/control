'use strict'

const router = require('express').Router();

router.use('/', require('../component/front'))
router.use('/info', require('../component/info'));
try {
    router.use('/raspberry', require('../component/raspberry'));
} catch(_) {
    console.log("Módulo Raspberry nâo disponível neste dispositivo");
    router.get('/raspberry', (_, res) => res.send(false));
}

module.exports = router;
