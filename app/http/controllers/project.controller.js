const { projectmodel } = require("../../models/project.model");

class projectcontroller {
    async createProject(req, res, next) {
        try {
            const { title, text} = req.body;
            const owner = req.user._id;
            const result = await projectmodel.create({title, text, owner});
            if(!result) throw {status: 400, message: 'project creation failed'}
            return res.status(201).json({
                status: 201,
                success: true,
                message: 'project created successfully'
            })
        } catch (error) {
            next(error);
        }
    }
    getAllProjects() {

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