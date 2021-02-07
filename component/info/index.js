'use strict'

const router = require('express').Router();
const si = require("systeminformation");

router.get('/cpu',          (_, res) => si.cpu().then(i => res.send(i)));
router.get('/mb',           (_, res) => si.baseboard().then(i => res.send(i)));
router.get('/ch',           (_, res) => si.chassis().then(i => res.send(i)));
router.get('/temp',         (_, res) => si.cpuTemperature().then(i => res.send(i)));
router.get('/mem',          (_, res) => si.mem().then(i => res.send(i)));
router.get('/mem-layout',   (_, res) => si.memLayout().then(i => res.send(i)));
router.get('/disk',         (_, res) => si.fsSize().then(i => res.send(i)));
router.get('/os',           (_, res) => si.osInfo().then(i => res.send(i)));

module.exports = router;