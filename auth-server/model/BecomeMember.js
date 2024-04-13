const mongoose = require('mongoose');

const BecomeMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    cookingStyle: {
        type: String,
        required: true,
    },
    aboutYou: {
        type: String,
        required: true,
    },
    memberImage: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);

module.exports=mongoose.model("BecomeMember", BecomeMemberSchema);