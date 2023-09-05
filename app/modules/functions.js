const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

function hashPassword(password) {
    const salt = genSaltSync(10)
    return hashSync(password, salt)
}

function compareHashPassword(password, hashed) {
    return compareSync(password, hashed)
}

function genetatorToken(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY)
}

function verifyToken(token) {
    const result = jwt.verify(token, process.env.SECRET_KEY)
    if (!result) throw { status: 401, message: 'please login to accountttttt' }
    return result
}

function createPathDirectory() {
    let d = new Date();
    const year = "" + d.getFullYear();
    const month = "" + d.getMonth();
    const day = "" + d.getDate();
    const uploadPath = path.join(__dirname, '..', '..', 'public', 'upload');
    fs.mkdirSync(uploadPath, { recursive: true });
    // return path.join('public', 'upload', year, month, day);
    // return path.join('upload');
    return uploadPath
}

module.exports = {
    hashPassword,
    compareHashPassword,
    genetatorToken,
    verifyToken,
    createPathDirectory
}
