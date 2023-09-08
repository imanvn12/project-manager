const { param } = require("express-validator");

function mongoIDvalidator() {
    return [
        param('id').isMongoId().withMessage('not valid id')
    ]
}

module.exports = { mongoIDvalidator }