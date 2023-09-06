const { body } = require("express-validator");

function projectValidation() {
    return [
        body('title').notEmpty().withMessage('title must not be empty'),
        body('tags').isArray({min: 2, max: 5}).withMessage('tags must not be between 2 and 5'),
        // body('owner').notEmpty().withMessage('input must not be empty')
        //     .isMongoId().withMessage('they must have mongo id'),
        body('text').isLength({ min: 20 }).withMessage('text must more than 20 characters')
    ]
}

module.exports = { projectValidation }