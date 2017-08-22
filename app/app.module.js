"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var myapp_component_1 = require("./components/myapp.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var search_component_1 = require("./components/search/search.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var currentWeather_component_1 = require("./components/currentWeather/currentWeather.component");
var app_routes_1 = require("./app.routes");
var getWeather_service_1 = require("./services/getWeather.service");
var forecast_component_1 = require("./components/forecast/forecast.component");
var app_store_1 = require("./app.store");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routes_1.routing
            ],
            declarations: [
                myapp_component_1.MyAppComponent,
                navbar_component_1.default,
                search_component_1.default,
                currentWeather_component_1.default,
                forecast_component_1.default
            ],
            providers: [
                getWeather_service_1.GetWeatherService,
                app_store_1.AppStore
            ],
            bootstrap: [myapp_component_1.MyAppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map