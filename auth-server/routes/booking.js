const express = require('express');
const bodyParser = require('body-parser');

const protect = require("../middleware/authMiddleware");
const { createBookingOneTime, getBookingOneTimeById, getBookingOneTimeByUser } = require('../controller/bookingOneTime');
const { createBookingForMonth, getBookingForMonthById, getBookingForMonthByUser } = require('../controller/bookingForMonth');
const { createBookingForEvent, getBookingForEventById, getBookingForEventByUser } = require('../controller/bookingForEvent');

router=express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post("/for-one-time", protect, createBookingOneTime);
router.post("/for-month", protect, createBookingForMonth);
router.post("/for-event", protect, createBookingForEvent);
router.post("/pay-OneTime", protect, createBookingOneTime);
router.post("/pay-ForMonth", protect, createBookingForMonth);
router.post("/pay-ForEvent", protect, createBookingForEvent);
router.get("/getBookingOneTime/:id", getBookingOneTimeById);
router.get("/getBookingForMonth/:id", getBookingForMonthById);
router.get("/getBookingForEvent/:id", getBookingForEventById);

router.get("/myBookingOneTime/:id", getBookingOneTimeByUser);
router.get("/myBookingForMonth/:id", getBookingForMonthByUser);
router.get("/myBookingForEvent/:id", getBookingForEventByUser);



// router.post("/get-user", protect, authController);
// router.post("/login", loginController);
// router.post("/verify-otp", verifyOtpController);
// router.put("/update", protect, updateUserProfile);


module.exports=router;