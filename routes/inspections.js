const express = require('express');
const router = express.Router();
const inspection = require('../controllers/inspection')

/* GET home page. */
router.get('/', inspection.getAllInspections);

router.get('/:id', inspection.getOneInspection);

router.post('/', inspection.postNewInspections);

router.put('/:id', inspection.updateInspections);

router.delete('/:id', inspection.deleteInspections);

module.exports = router;
