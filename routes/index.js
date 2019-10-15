'use strict';

const express = require('express');
const router = express.Router();

router.use('/users', require("./users"));
router.use('/candidates', require("./candidates"));
router.use('/opportunities', require("./opportunities"));
router.use('/applications', require("./applications"));

module.exports = router;
