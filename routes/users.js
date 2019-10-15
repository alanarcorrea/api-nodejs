'use strict';

const express = require('express');
const router = express.Router();
const UsersController = require('../app/controllers/users');

router.get('/', UsersController.index);
router.get('/:id', UsersController.show);
router.post('/', UsersController.store);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.destroy);


module.exports = router;


