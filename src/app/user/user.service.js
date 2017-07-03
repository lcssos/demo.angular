"use strict";
var user_1 = require("./user");
var UserService = (function () {
    function UserService() {
    }
    Object.defineProperty(UserService.prototype, "user", {
        // private _user: User;
        get: function () {
            return new user_1.User('zhangsan', true);
        },
        enumerable: true,
        configurable: true
    });
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map