
const { usermodel } = require("../../models/user.model");
const { hashSync, compareSync } = require("bcrypt");
const { genetatorToken } = require("../../modules/functions");


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
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const user = await usermodel.findOne({ username });
            if (!user) throw ({ status: 401, message: "username or password not found" });
            const compareHash = compareSync(password, user.password)
            if(!compareHash) throw ({ status: 401, message: "username or password not found" });
            const token = genetatorToken(user.username);
            user.token = token;
            user.save()
            return res.json({
                status: 200,
                succes: true,
                message: "you logined succesfuly",
                token
            })

        } catch (error) {
            next(error);
        }
    }
    resetPassword() {

    }
}

module.exports = {
    Authcontrollerr: new Authcontroller()
}