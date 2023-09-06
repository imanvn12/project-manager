const { projectcontroller } = require('../http/controllers/project.controller');
const { projectValidation } = require('../http/validations/project');
const { validserror } = require('../middlewares/validserror');
const { checkLogin } = require('../middlewares/autologin');
const fileUpload = require('express-fileupload');
const { uploadFile } = require('../modules/file-upload');

const router = require('express').Router();

router.post('/create', fileUpload(), uploadFile, projectValidation(), validserror, checkLogin, projectcontroller.createProject)
router.get('/create', checkLogin, projectcontroller.getAllProjects)

module.exports = {
    projectRoute: router
}