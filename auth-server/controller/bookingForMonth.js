const BookingForMonth = require('../model/BookingForMonth');

const createBookingForMonth = async(req,res) => {
    try {
        // const {name, description, category, experience, chefImage} = req.body;
        const newBookingForMonth = new BookingForMonth(req.body);

        const saveBookingForMonth = await newBookingForMonth.save();
        // console.log(await saveBookingForMonth);

        res.status(200).json({
            message: "Booking added successfully",
            success: true,
            data:{
                bookingForMonth: saveBookingForMonth,
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


const getBookingForMonthById = async (req, res) => {
    try {
        const { id } = req.params;
        const bookingForMonthItem = await BookingForMonth.findById(id);
        if (!bookingForMonthItem) {
            return res.status(404).json({
                error: "Booking not found",
                success: false,
            });
        }
        res.status(200).json({
            message: "Booking details",
            success: true,
            data: {
                bookingForMonth: bookingForMonthItem,
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

const getBookingForMonthByUser = async(req, res) => {
    try {
        const {id} = req.params;
        
        const myBookingForMonthItem = await BookingForMonth.find( { user: id } );
        console.log(myBookingForMonthItem);
        res.status(200).json({
        message: "My Booking For Month details",
        success: true,
        data:{
            bookingForMonth: myBookingForMonthItem,
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



module.exports = {createBookingForMonth, getBookingForMonthById, getBookingForMonthByUser};