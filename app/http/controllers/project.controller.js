const { projectmodel } = require("../../models/project.model");

class projectcontroller {
    async createProject(req, res, next) {
        try {
            const { title, text, image, tags } = req.body;
            // console.log(req?.body?.tags);
            const owner = req.user._id;
            const result = await projectmodel.create({ title, text, owner, image, tags });
            if (!result) throw { status: 400, message: 'project creation failed' }
            return res.status(201).json({
                status: 201,
                success: true,
                message: 'project created successfully'
            })
        } catch (error) {
            next(error);
        }
    }
    async getAllProjects(req, res, next) {
        try {
            const owner = req.user._id;
            const projects = await projectmodel.find({ owner });
            if (!projects) throw { status: 400, message: 'project not found' };
            return res.status(200).json({
                status: 200,
                success: true,
                projects
            })
        } catch (error) {
            next(error);
        }
    }
    getProjectByID() {

    }
    getProjectOfTeam() {

    }
    getProjectOfUser() {

    }
    uploadProject() {

    }
    removeProject() {

    }
}

module.exports = {
    projectcontroller: new projectcontroller()
}