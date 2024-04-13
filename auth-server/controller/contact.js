const Contact = require('../model/Contact');

const createContact = async(req,res) => {
    try {
        // const {name, description, category, experience, chefImage} = req.body;
        const newContact = new Contact(req.body);
        const saveContact = await newContact.save();
        res.status(200).json({
            message: "Message saved successfully",
            success: true,
            data:{
                contact: saveContact,
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

module.exports = {createContact};