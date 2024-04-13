const express = require('express');
const bodyParser = require('body-parser');

const protect = require("../middleware/authMiddleware");
const { createMember } = require('../controller/becomeMember');

router=express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json()); 


router.post("/savemember", protect, createMember);

module.exports=router;