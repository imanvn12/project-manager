const multer = require('multer');
const path = require('path');
const { createPathDirectory } = require('./functions');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, createPathDirectory());

    },
    filename: (req, file, cb) => {
        const extname = path.extname(file?.originalname || '');
        cb(null, Date.now() + extname);
    }
    
})
const uoload_multer = multer({ storage });

module.exports = {
    uoload_multer
}