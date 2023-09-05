const { body } = require("express-validator");

function userValidator() {
    return [
        body("image").custom((image, { req }) => {
            const ext = req.file.mimetype.split("/")[1];
            const trueExt = ["jpg", "png", "jpeg"];
            if(!trueExt.includes(ext)) throw 'Invalid image';
            const size = 2 * 1024 ;
            if(req.file.size > size) throw "image must be less than 2MB";
            return true
        })
    ]
}

module.exports = { userValidator }