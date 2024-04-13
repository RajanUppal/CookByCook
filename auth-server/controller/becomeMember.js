const Member = require('../model/BecomeMember');

const createMember = async(req,res) => {
    try {
        // const {name, description, category, experience, chefImage} = req.body;
        const newMember = new Member(req.body);
        const saveMember = await newMember.save();
        res.status(200).json({
            message: "Your information is saved successfully. Please wait until our team connects with you.",
            success: true,
            data:{
                member: saveMember,
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

module.exports = {createMember};