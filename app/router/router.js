const { authRoute } = require('./auth');
const { projectRoute } = require('./project');
const { teamRoute } = require('./team');
const { userRoute } = require('./user');

const router = require('express').Router();

router.use('/auth', authRoute)
router.use('/user', userRoute)
router.use('/team', teamRoute)
router.use('/project', projectRoute)

module.exports = {
    ALLRoute: router
}