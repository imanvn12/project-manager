const { genSaltSync, hashSync, compareSync } = require("bcrypt");

function hashPassword(password){
    const salt = genSaltSync(10)
    hashSync(password, salt)
}

function compareHashPassword(password, hashed){
    compareSync(password, hashed)
} 
// console.log(hashPassword("12345678"));

module.exports = {
    hashPassword,
    compareHashPassword
}
// const crypto = require("crypto");

// function hashPasswordd(password) {
//     salt = crypto.randomBytes(16);
//     crypto.createHash('sha256', salt).update(password).digest('hex')
// }
//  module.exports = {
//     hashPasswordd
// }