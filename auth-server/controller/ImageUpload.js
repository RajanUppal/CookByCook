const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: "djnqvulkv",
    api_key: "639332779958669",
    api_secret: "wEc6E74e4V69Qypx0Yx9yNYwLrI",
    
})

const imageUploadController = async(req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.files.image.path)
        res.json({
            url: result.secure_url,
            public_id: result.public_id,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { imageUploadController };