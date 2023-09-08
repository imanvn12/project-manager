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
    async getProjectByID(req, res, next) {
        try {
            const owner = req.user._id;
            const projectID = req.params.id;
            const result = await projectmodel.findOne({ owner, _id: projectID });
            if (!result) throw { status: 400, message: 'project not found' };
            return res.status(200).json({
                status: 200,
                success: true,
                result
            })
        } catch (error) {
            next(error);
        }
    }
    async removeProject(req, res, next) {
        try {
            const owner = req.user._id;
            let projectID = req.params.id;
            console.log(projectID);
            const result = await projectmodel.findOne({ owner, _id: projectID });
            if (!result) throw { status: 400, message: 'project not found' };
            const project = await projectmodel.deleteOne({ _id: projectID });
            // if (!project) throw { status: 400, message: 'project did not delete' };
            if (project.deletedCount == 0) throw { status: 400, message: 'project did not delete' }
            return res.status(200).json({
                status: 200,
                success: true,
                message: 'project deleted successfully'
            })
        } catch (error) {
            next(error);
        }
    }
    getProjectOfTeam(req, res, next) {

    }
    getProjectOfUser(req, res, next) {

    }
    uploadProject(req, res, next) {

    }
    updateProject(req, res, next) {

    }
}

module.exports = {
    projectcontroller: new projectcontroller()
}