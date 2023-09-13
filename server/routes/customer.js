const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController'); 

router.get('/', customerController.homepage);
router.get('/add', customerController.addCustomer);
router.post('/add', customerController.postCustomer);

router.get('/view/:id', customerController.view);


module.exports = router;