const express = require('express');
const bodyParser = require('body-parser');

const protect = require("../middleware/authMiddleware");
const { createChef, getAllChefs, getChefById, getNewChefs } = require('../controller/chef');

router=express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json()); 


router.post("/addchef", protect, createChef);
router.get("/getAllChefs", getAllChefs);
router.get("/getNewChefs", getNewChefs);
router.get("/getChef/:id", getChefById);


module.exports=router;