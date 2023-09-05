const { usermodel } = require("../models/user.model")
const { verifyToken } = require("../modules/functions")

const checkLogin = async(req, res, next) => {
    try {
        const authorization = req?.headers?.authorization
        if (!authorization) throw { status: 401, message: 'please login to account' }
        let token = authorization?.split(' ')?.[1];
        if (!token) throw { status: 401, message: 'please login to account' }
        const result = verifyToken(token);
        if (!result) throw { status: 401, message: 'please login to account' }
        let { username } = result;
        username = 'iman_vn';
        const user = await usermodel.findOne({ username });
        if (!user) throw { status: 401, message: 'please login to accountt' }
        req.user = user;
        return next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkLogin
}