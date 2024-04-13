const BookingOneTime = require('../model/BookingOneTime');
const jwt = require('jsonwebtoken');

const createBookingOneTime = async(req,res) => {
    try {
        // const {name, description, category, experience, chefImage} = req.body;
        const newBookingOneTime = new BookingOneTime(req.body);

        const saveBookingOneTime = await newBookingOneTime.save();
        // console.log(await saveBookingOneTime);


        res.status(200).json({
            message: "Booking added successfully",
            success: true,
            data:{
                bookingOneTime: saveBookingOneTime,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error",
            success: false,
        });
    }
};


const getBookingOneTimeById = async (req, res) => {
    try {
        const { id } = req.params;
        const bookingOneTimeItem = await BookingOneTime.findById(id);
        if (!bookingOneTimeItem) {
            return res.status(404).json({
                error: "Booking not found",
                success: false,
            });
        }
        res.status(200).json({
            message: "Booking details",
            success: true,
            data: {
                bookingOneTime: bookingOneTimeItem,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error",
            success: false,
        });
    }
};

const getBookingOneTimeByUser = async(req, res) => {
    try {
        const {id} = req.params;
        
        const myBookingOneTimeItem = await BookingOneTime.find( { user: id } );
        console.log(myBookingOneTimeItem);
        res.status(200).json({
        message: "My Booking One Time details",
        success: true,
        data:{
            bookingOneTime: myBookingOneTimeItem,
        },
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error",
            success: false,
        });
    }
};


module.exports = {createBookingOneTime, getBookingOneTimeById, getBookingOneTimeByUser};