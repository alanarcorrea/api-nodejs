const express = require('express');
const router = express.Router();
const CandidatesController = require('../controllers/candidates');

router.get('/', CandidatesController.index);
router.get('/:id', CandidatesController.show);
router.post('/', CandidatesController.store);
router.put('/:id', CandidatesController.update);
router.delete('/:id', CandidatesController.destroy);

module.exports = router;