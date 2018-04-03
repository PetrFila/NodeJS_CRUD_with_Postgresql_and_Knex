const express = require ('express');
const router = express.Router();
const clientController = require('../controllers/client.controller')

router.get('/', clientController.getAllClients)

router.get('/:id', clientController.getOneClient);

router.post('/', clientController.postNewClient)

router.put('/:id', clientController.updateClients)

router.delete('/:id', clientController.deleteClients)

module.exports = router;