const mongoose = require('mongoose');

const BookingForMonthSchema = new mongoose.Schema(
    {

     user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
      },
       name: {
           type: String,
           required: true,
       },
       email: {
           type: String,
           required: true,
       },
       street: {
            type: String,
            required: true,
       },
       city: {
        type: String,
        required: true,
       },
       state: {
            type: String,
            required: true,
       },
       zipCode: {
        type: String,
        required: true,
       },
       country: {
            type: String,
            required: true,
       },
       mobile: {
            type: String,
            required: true,
       },
       date: {
            type: Date,
            required: true,
       },
       time_slot: {
            type: String,
            required: true,
       },
       price: {
            type: Number,
            default: 5000,
       },
       payment: {
            type: Boolean,
            default: false,
       },
       status: {
            type: String,
            enum: ["Pending", "Confirmed"],
            default: 'Pending',
       },
       service_type: {
            type: String,
            default: 'Cook for a Month',
       },
    },
    {
        timestamps: true,
    }
);

module.exports=mongoose.model("BookingForMonth", BookingForMonthSchema);