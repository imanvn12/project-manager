const { Authcontrollerr} = require('../http/controllers/auth.controller');
const { registerValidator } = require('../http/validations/auth');
const { validserror } = require('../middlewares/validserror');

const router = require('express').Router();

router.post('/register', registerValidator(), validserror, Authcontrollerr.regiser)

module.exports = {
    authRoute: router
}