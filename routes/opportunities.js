'use strict';

const express = require('express');
const router = express.Router();
const OpportunitiesController = require('../app/controllers/opportunities');

router.get('/', OpportunitiesController.index);
router.get('/:id', OpportunitiesController.show);
router.post('/', OpportunitiesController.store);
router.put('/:id', OpportunitiesController.update);
router.delete('/:id', OpportunitiesController.destroy);


module.exports = router;