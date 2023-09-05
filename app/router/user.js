

const { usercontroller } = require('../http/controllers/user.controller');
const { userValidator } = require('../http/validations/user');
const { checkLogin } = require('../middlewares/autologin');
const { validserror } = require('../middlewares/validserror');
const { uoload_multer } = require('../modules/multer');

const router = require('express').Router();

router.get('/profile', checkLogin, usercontroller.getProfile);
router.post('/profile', checkLogin, usercontroller.editProfile);
router.post('/profile-image',
    uoload_multer.single('image'),
    userValidator(),
    validserror,
    checkLogin,
    usercontroller.uploadFile);

module.exports = {
    userRoute: router
}