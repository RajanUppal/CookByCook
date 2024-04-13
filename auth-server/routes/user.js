const express = require('express');
const bodyParser = require('body-parser');
const { registerController, authController, loginController, verifyOtpController, updateUserProfile } = require('../controller/user');
const protect = require("../middleware/authMiddleware")

router=express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post("/register", registerController);
router.post("/get-user", protect, authController);
router.post("/login", loginController);
router.post("/verify-otp", verifyOtpController);
router.put("/update", protect, updateUserProfile);


module.exports=router;