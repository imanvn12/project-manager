const { body } = require('express-validator');
const { usermodel } = require('../../models/user.model');

function registerValidator() {
    return [
        body("username").isLength({ min: 4, max: 12 }).custom(async username => {
            const user = await usermodel.findOne({ username });
            if (user) throw ({ status: 400, message: "username already registered before" });
            return true
        }),
        body("password").isLength({ min: 8, max: 12 }).withMessage("length must be between 8 and 12"),

        body("email").isEmail().withMessage("Please enter a valid email").custom(async email => {
            const user = await usermodel.findOne({ email });
            if (user) throw ({ status: 400, message: "email already registered before" });
            return true
        }),
        body("phone_number").isMobilePhone("fa-IR").withMessage("must be iranian number").custom(async phone_number => {
            const user = await usermodel.findOne({ phone_number });
            if (user) throw ({ status: 400, message: "phone number already registered before" });
            return true
        }),
    ]
}

function loginValidator() {
    return [
        body("username").notEmpty().withMessage('username must not be empty'),
        body("password").notEmpty().isLength({ min: 8, max: 12 }).withMessage("length must be between 8 and 12")

    ]
}

module.exports = {
    registerValidator,
    loginValidator
}