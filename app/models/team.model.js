const mongoose = require('mongoose');
const teamSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    discription: { type: String },
    owner: { type: mongoose.Types.ObjectId, required: true, unique: true },
    users: { type: String, default: [] }
})

const teammodel = mongoose.model('User', teamSchema)
module.exports = {
    teammodel
}