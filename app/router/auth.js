const { Authcontrollerr} = require('../http/controllers/auth.controller');
const { registerValidator, loginValidator } = require('../http/validations/auth');
const { validserror } = require('../middlewares/validserror');

const router = require('express').Router();

router.post('/register', registerValidator(), validserror, Authcontrollerr.regiser)
router.post('/login', loginValidator(), validserror, Authcontrollerr.login)

module.exports = {
    authRoute: router
}