"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="./hero/hero.service.ts"/>
///<reference path="../../node_modules/angular-in-memory-web-api/in-memory-web-api.module.d.ts"/>
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var app_component_1 = require("./app.component");
var hero_form_component_1 = require("./hero/hero-form.component");
var logger_service_1 = require("./logger.service");
var hero_list_component_1 = require("./hero/hero-list.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var hero_search_component_1 = require("./hero/hero-search.component");
var highlight_directive_1 = require("./attribute-directives/highlight.directive");
var default_request_options_service_1 = require("./default-request-options.service");
var contact_module_1 = require("./contact/contact.module");
var core_module_1 = require("./core/core.module");
var crisis_center_module_1 = require("./crisis-center/crisis-center.module");
var compose_message_component_1 = require("./message/compose-message.component");
var admin_module_1 = require("./admin/admin.module");
var login_routing_module_1 = require("./login/login-routing.module");
var login_component_1 = require("./login/login.component");
var router_1 = require("@angular/router");
var AppModule = (function () {
    // 审查路由配置
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService), core_module_1.CoreModule, contact_module_1.ContactModule, crisis_center_module_1.CrisisCenterModule, admin_module_1.AdminModule, login_routing_module_1.LoginRoutingModule],
        declarations: [app_component_1.AppComponent, hero_form_component_1.HeroFormComponent, hero_list_component_1.HeroListComponent, dashboard_component_1.DashboardComponent, hero_search_component_1.HeroSearchComponent, highlight_directive_1.HighlightDirective, compose_message_component_1.ComposeMessageComponent, login_component_1.LoginComponent],
        providers: [logger_service_1.Logger, default_request_options_service_1.requestOptionsProvider],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map