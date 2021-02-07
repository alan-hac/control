'use strict'

const express = require('express');
const router = express.Router();

router.use(express.static(process.cwd() + "/app/dist/app/"));
router.get('/', (_, res) => res.sendFile(process.cwd() + "/app/dist/app/index.html"));

module.exports = router;