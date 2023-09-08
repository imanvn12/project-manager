const { projectcontroller } = require('../http/controllers/project.controller');
const { projectValidation } = require('../http/validations/project');
const { validserror } = require('../middlewares/validserror');
const { checkLogin } = require('../middlewares/autologin');
const fileUpload = require('express-fileupload');
const { uploadFile } = require('../modules/file-upload');
const { mongoIDvalidator } = require('../http/validations/public');

const router = require('express').Router();

router.post('/create', fileUpload(), uploadFile, projectValidation(), validserror, checkLogin, projectcontroller.createProject)
router.get('/list', checkLogin, projectcontroller.getAllProjects)
router.get('/:id', checkLogin, mongoIDvalidator(), validserror, projectcontroller.getProjectByID)
router.delete('/remove/:id', checkLogin, projectcontroller.removeProject)
router.put('/update/:id', checkLogin, projectcontroller.updateProject)

module.exports = {
    projectRoute: router
}