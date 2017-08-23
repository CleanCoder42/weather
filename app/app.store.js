"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var state = {
    currentWeather: {},
    dailyForecast: {},
    hourlyForecast: {}
};
var store = new BehaviorSubject_1.BehaviorSubject(state);
var AppStore = (function () {
    function AppStore() {
        this.store = store;
        this.changes = store.asObservable();
    }
    AppStore.prototype.getState = function () {
        return this.store.value;
    };
    AppStore.prototype.setState = function (state) {
        this.store.next(state);
    };
    return AppStore;
}());
exports.AppStore = AppStore;
//# sourceMappingURL=app.store.js.map