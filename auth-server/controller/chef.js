const Chef = require('../model/Chef');

const createChef = async(req,res) => {
    try {
        // const {name, description, category, experience, chefImage} = req.body;
        const newChef = new Chef(req.body);



        const saveChef = newChef.save();
        res.status(200).json({
            message: "Chef added successfully",
            success: true,
            data:{
                chef: saveChef,
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


const getAllChefs = async(req, res) => {
    try {
        const {category} = req.query;
        if(category==='all') {
            const chefItems = await Chef.find();
            res.status(200).json({
            message: "Chef added successfully",
            success: true,
            data:{
                chef: chefItems,
            },
        });
        } else {
            const chefItems = await Chef.find({category: category});
            res.status(200).json({
            message: "Chef added successfully",
            success: true,
            data:{
                chef: chefItems,
            },
        });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error",
            success: false,
        });
    }
};

const getNewChefs = async(req, res) => {
    try {
        
            const chefItems = await Chef.find().sort({ createdAt: -1 }).limit(12);
            res.status(200).json({
            message: "register chef showing",
            success: true,
            data:{
                chef: chefItems,
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

const getChefById = async(req, res) => {
    try {
        const {id} = req.params;
        
        const chefItems = await Chef.findById(id);
        
        res.status(200).json({
        message: "Chef details",
        success: true,
        data:{
            chef: chefItems,
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



module.exports = {createChef, getAllChefs, getChefById, getNewChefs};