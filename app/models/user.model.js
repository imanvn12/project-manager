const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    skill: { type: [String], default: [] },
    team: { type: [mongoose.Types.ObjectId], default: [] },
    role: { type: [String], default: ["user"] }
})

const usermodel = mongoose.model('User', userSchema);
module.exports = {
    usermodel
}