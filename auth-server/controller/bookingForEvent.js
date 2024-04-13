const BookingForEvent = require('../model/BookingForEvent');

const createBookingForEvent = async(req,res) => {
    try {
        // const {name, description, category, experience, chefImage} = req.body;
        const newBookingForEvent = new BookingForEvent(req.body);

        const saveBookingForEvent = await newBookingForEvent.save();
        // console.log(await saveBookingForEvent);

        res.status(200).json({
            message: "Booking added successfully",
            success: true,
            data:{
                bookingForEvent: saveBookingForEvent,
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


const getBookingForEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const bookingForEventItem = await BookingForEvent.findById(id);
        if (!bookingForEventItem) {
            return res.status(404).json({
                error: "Booking not found",
                success: false,
            });
        }
        res.status(200).json({
            message: "Booking details",
            success: true,
            data: {
                bookingForEvent: bookingForEventItem,
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

const getBookingForEventByUser = async(req, res) => {
    try {
        const {id} = req.params;
        
        const myBookingForEventItem = await BookingForEvent.find( { user: id } );
        console.log(myBookingForEventItem);
        res.status(200).json({
        message: "My Booking For Event details",
        success: true,
        data:{
            bookingForEvent: myBookingForEventItem,
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

module.exports = {createBookingForEvent, getBookingForEventById, getBookingForEventByUser};