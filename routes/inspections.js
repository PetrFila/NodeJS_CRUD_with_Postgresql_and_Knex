const express = require('express');
const router = express.Router();
const inspectionController = require('../controllers/inspection.controller')

/* GET home page. */
router.get('/', inspectionController.getAllInspections);

router.get('/:id', inspectionController.getOneInspection);

router.post('/', inspectionController.postNewInspections);

router.put('/:id', inspectionController.updateInspections);

router.delete('/:id', inspectionController.deleteInspections);

module.exports = router;
