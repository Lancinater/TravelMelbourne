let checkToken = require('../controller/auth').checkToken;

function checkAuth(req, resp, next) {
    let token = req.cookies['auth_token'];
    if (token && checkToken(token)) {
        next();
    } else {
        resp.status(403).send(`
            <html>
                <head>
                    <title>Access Denied</title>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                        h1 { color: red; }
                        button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
                    </style>
                </head>
                <body>
                    <h1>You are not authorized to view this page</h1>
                    <button onclick="window.location.href='/'">Go Back</button>
                </body>
            </html>
        `);
    }
}


module.exports = {roleAuth: checkAuth};