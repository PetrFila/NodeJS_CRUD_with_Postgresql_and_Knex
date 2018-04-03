const express = require('express');
const router = express.Router();
const inspectionController = require('../controllers/inspection.controller')

/* GET home page. */
router.get('/', inspectionController.getAllInspections);

router.get('/:id', inspectionController.getOneInspection);

router.post('/', inspectionController.postNewInspection);

router.put('/:id', inspectionController.updateInspection);

router.delete('/:id', inspectionController.deleteInspection);

module.exports = router;
