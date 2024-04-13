const express = require('express');
const bodyParser = require('body-parser');

const protect = require("../middleware/authMiddleware");
const { createContact } = require('../controller/contact');

router=express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json()); 


router.post("/savemessage", protect, createContact);

module.exports=router;