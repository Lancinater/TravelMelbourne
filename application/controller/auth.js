let jwt = require('jsonwebtoken');
let secret = 'lancinater'

function generateToken(user){
    let payload = {
        email: user.email,
        password: user.password
    }
    jwt.sign(payload, secret)
}

function checkToken(token){
    return jwt.verify(token, secret)
}

module.exports = {
    generateToken,
    checkToken
}