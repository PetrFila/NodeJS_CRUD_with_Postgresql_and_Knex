const express = require ('express');
const router = express.Router();
const client = require('../controllers/client')

router.get('/', client.getAllClients)

router.get('/:id', client.getOneClient);

router.post('/new', client.postNewClients)

router.put('/update/:id', client.updateClients)

router.delete('/delete/:id', client.deleteClients)

module.exports = router;