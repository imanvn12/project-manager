const fileUpload = require('express-fileupload');
const path = require('path');
const { createPathDirectory } = require('./functions');

const uploadFile = async (req, res, next) => {
    try {
        let image = req?.files?.image;
        let fileUploadPath = path.join(__dirname, '..', '..', createPathDirectory(), image.name);
        await image.mv(fileUploadPath, (err) => {
            if (err) throw { status: 400, message: err.message };
            next();
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    uploadFile
}
