"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
    }
    res.status(403).send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session) {
        if (req.session.loggedIn && req.session.loggedIn) {
            res.send("\n      <div>\n      <div>You are logged in</div>\n      <a href=\"/logout\">Logout</a>\n      </div>\n      ");
        }
        else {
            res.send("\n      <div>\n      <div>You are not logged in</div>\n      <a href=\"/login\">Login</a>\n      \n      </div>\n      ");
        }
    }
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route');
});
