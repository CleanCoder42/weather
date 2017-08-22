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
var ForecastComponent = (function () {
    function ForecastComponent(appStore) {
        var _this = this;
        this.appStore = appStore;
        this.dailyForecast = appStore.getState().dailyForecast;
        this.appStore.changes.subscribe(function (value) {
            _this.dailyForecast = value.dailyForecast;
        });
    }
    ForecastComponent.prototype.forecastExists = function () {
        return (this.dailyForecast.city && this.dailyForecast.city.name && this.dailyForecast.city.name !== "");
    };
    ForecastComponent.prototype.getTimeStamp = function (unixUtxTime) {
        return new Date(unixUtxTime * 1000);
    };
    ForecastComponent = __decorate([
        core_1.Component({
            selector: 'weather-forecast',
            templateUrl: 'app/components/forecast/forecast.component.html',
            styleUrls: ['app/components/forecast/forecast.component.css']
        }),
        __metadata("design:paramtypes", [app_store_1.AppStore])
    ], ForecastComponent);
    return ForecastComponent;
}());
exports.default = ForecastComponent;
//# sourceMappingURL=forecast.component.js.map