'use strict';

const express = require('express');
const router = express.Router();
const ApplicationsController = require('../app/controllers/applications');

router.get('/', ApplicationsController.index);
router.get('/:id', ApplicationsController.show);
router.post('/', ApplicationsController.store);
router.put('/:id', ApplicationsController.update);
router.delete('/:id', ApplicationsController.destroy);


module.exports = router;