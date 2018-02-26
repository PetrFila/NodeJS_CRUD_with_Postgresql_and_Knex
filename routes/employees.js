const express = require ('express');
const router = express.Router();
const employee = require('../controllers/employee')

router.get('/', employee.getAllEmployees)

router.get('/:id', employee.getOneEmployee);

router.post('/new', employee.postNewEmployees)

router.put('/update/:id', employee.updateEmployees)

router.delete('/delete/:id', employee.deleteEmployees)

module.exports = router;