const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const imageRoute = require('./routes/image');
const userRoute = require('./routes/user');
const chefRoute = require('./routes/chef');
const bookingRoute = require('./routes/booking');
const contactRoute = require('./routes/contact');
const memberRoute = require('./routes/becomeMember');

const app = express();
dotenv.config()
const cors = require('cors');
const port = process.env.PORT || 8000;
app.use(cors());
app.get('/', (req,res) => {
    res.send("Hello World");
});




const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("Connected");
    } catch (error) {
        throw error
    }
};

mongoose.connection.on("disconnected",() => {
    console.log("Disconnected");
});

mongoose.connection.on("connected",() => {
    console.log("Connected");
});

app.use('/api/v1/all', imageRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/chefs', chefRoute);
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/contact', contactRoute);
app.use('/api/v1/become-member', memberRoute);

app.use(express.json({ limit: "3mb"}));

app.listen(port, () => {
    connect();
    console.log(`Listening from ${port}`);
});