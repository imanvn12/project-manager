
const { hashPassword } = require("../../modules/functions");
const { usermodel } = require("../../models/user.model");
const { hashSync } = require("bcrypt");

class Authcontroller {
    async regiser(req, res, next) {
        try {
            const { username, password, email, phone_number } = req.body;
            const hashPasswordd = hashSync(password, 10);
            const user = await usermodel.create({
                username,
                email,
                phone_number,
                password: hashPasswordd
            })
            return res.json(user)
        } catch (error) {
            next(error);
        }
    }
    login() {

    }
    resetPassword() {

    }
}

module.exports = {
    Authcontrollerr: new Authcontroller()
}