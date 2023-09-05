const { usermodel } = require("../../models/user.model");
class usercontroller {
    getProfile(req, res, next) {
        try {
            const user = req.user;
            user.image_profile = `${req.protocol}://${req.hostname}:4000/${user.image_profile.replace(/[\\\\]/gm, "/")}`;
            console.log(req.image_profile);
            return res.json({
                status: 200,
                succes: true,
                user
            })
        } catch (error) {
            next(error);
        }
    }
    async editProfile(req, res, next) {
        try {
            let data = req.body;
            let userID = req.user._id;
            console.log(userID);
            let fields = ["first_name", "last_name", "skill"];
            let badValue = ["", " ", null, 0, -1, NaN];
            Object.entries(data).forEach(([key, value]) => {
                if (!fields.includes(key)) delete data[key]
                if (!badValue.includes(value)) delete data[value]
            })
            console.log(data);
            const result = await usermodel.updateOne({ _id: userID }, { $set: data });

            console.log(result);
            if (result.modifiedCount > 0) {
                return res.status(200).json({
                    status: 200,
                    succes: true,
                    message: 'User updated successfully'
                })
            }
            throw ({ status: 400, message: 'User did not updated successfully' })
            // return res.status(400).json({
            //     status: 400,
            //     succes: true,
            //     message: 'User did not updated successfully'
            // })
        } catch (error) {
            next(error);
        }
    }
    async uploadFile(req, res, next) {
        try {
            const pathFile = req?.file?.path?.replace(/[\\\\]/gm, "/").substring(53);
            const result = await usermodel.updateOne({ _id: req.user.id }, { $set: { image_profile: pathFile } });
            if (result.modifiedCount == 0) throw { status: 400, message: 'didnt upload image' };
            return res.status(200).json({
                status: 200,
                succes: true,
                message: "image uploaded succesfuly"
            })

        } catch (error) {
            next(error);
        }
    }
    addSkill() {

    }
    editSkill() {

    }
    acceptInviteToTeam() {

    }
    rejectInviteToTeam() {

    }

}

module.exports = {
    usercontroller: new usercontroller()
}