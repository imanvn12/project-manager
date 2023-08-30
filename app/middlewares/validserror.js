const { validationResult } = require("express-validator")

function validserror(req, res, next) {
    let messages = {}
    const result = validationResult(req)
    if (result?.errors?.length > 0) {
        result?.errors?.forEach((err) => {
            // path = "email"
            messages[err?.path] = err?.msg
        });
        return res.status(400).json({
            status: 400,
            messages
        })
    }
    next()
}



module.exports = {
    validserror
}