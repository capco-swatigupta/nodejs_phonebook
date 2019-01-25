const express = require('express')
const router = express.Router()
const phonebook_controller = require('../controllers/phonebook.controller')

router.get('/getPhoneByName/:name', phonebook_controller.getPhoneByName);
router.get('/getPhones', phonebook_controller.getPhones);
router.post('/insertPhone', phonebook_controller.insertPhone);

module.exports = router;