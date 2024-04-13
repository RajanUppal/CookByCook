const mongoose = require('mongoose');

const BookingForEventSchema = new mongoose.Schema(
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
            default: 2000,
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
            default: 'Cook for an Event',
       },
    },
    {
        timestamps: true,
    }
);

module.exports=mongoose.model("BookingForEvent", BookingForEventSchema);