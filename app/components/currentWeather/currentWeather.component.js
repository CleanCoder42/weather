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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_store_1 = require("../../app.store");
var weatherUtility_service_1 = require("../../services/weatherUtility.service");
var CurrentWeatherComponent = (function () {
    function CurrentWeatherComponent(appStore, weatherUtilityService) {
        var _this = this;
        this.appStore = appStore;
        this.weatherUtilityService = weatherUtilityService;
        this.currentWeather = appStore.getState().currentWeather;
        this.appStore.changes.subscribe(function (value) {
            _this.currentWeather = value.currentWeather;
        });
    }
    CurrentWeatherComponent.prototype.weatherExists = function () {
        return (this.currentWeather.name && this.currentWeather.name !== "");
    };
    CurrentWeatherComponent.prototype.getWeatherDescription = function () {
        if (this.currentWeather && this.currentWeather.weather.length > 0) {
            var aux = this.currentWeather.weather[0].description;
            return aux[0].toUpperCase() + aux.substring(1);
        }
        return "";
    };
    CurrentWeatherComponent.prototype.getTimeStamp = function () {
        if (this.currentWeather && this.currentWeather.dt) {
            return new Date(this.currentWeather.dt * 1000);
        }
        return "";
    };
    CurrentWeatherComponent.prototype.getWindDirection = function () {
        if (this.currentWeather && this.currentWeather.wind) {
            return this.weatherUtilityService.getWindDirection(this.currentWeather.wind.deg);
        }
        return '';
    };
    CurrentWeatherComponent.prototype.getHeatIndex = function () {
        if (this.currentWeather && this.currentWeather.main) {
            return this.weatherUtilityService.getHeatIndex(this.currentWeather.main.temp, this.currentWeather.main.humidity);
        }
        return 0;
    };
    CurrentWeatherComponent = __decorate([
        core_1.Component({
            selector: 'current-weather',
            templateUrl: 'app/components/currentWeather/currentWeather.component.html',
            styleUrls: ['app/components/currentWeather/currentWeather.component.css']
        }),
        __metadata("design:paramtypes", [app_store_1.AppStore, weatherUtility_service_1.WeatherUtilityService])
    ], CurrentWeatherComponent);
    return CurrentWeatherComponent;
}());
exports.default = CurrentWeatherComponent;
//# sourceMappingURL=currentWeather.component.js.map