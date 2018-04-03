const express = require ('express');
const router = express.Router();
const clientController = require('../controllers/client')

router.get('/', clientController.getAllClients)

router.get('/:id', clientController.getOneClient);

router.post('/new', clientController.postNewClients)

router.put('/update/:id', clientController.updateClients)

router.delete('/delete/:id', clientController.deleteClients)

module.exports = router;