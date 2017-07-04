"use strict";
var hero_service_1 = require("./hero.service");
var logger_service_1 = require("../logger.service");
var user_service_1 = require("../user/user.service");
var heroServiceFactory = function (logger, userService, http) {
    return new hero_service_1.HeroService(logger, userService.user.isAuthorized, http);
};
exports.heroServiceProvider = {
    provide: hero_service_1.HeroService,
    useFactory: heroServiceFactory,
    deps: [logger_service_1.Logger, user_service_1.UserService]
};
//# sourceMappingURL=hero.service.provider.js.map