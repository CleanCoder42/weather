import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

const state = {
    currentWeather: {},
    dailyForecast: {}
};

const store = new BehaviorSubject<openWeatherApi>(state as openWeatherApi);

export class AppStore {
    store = store;
    changes: Observable<openWeatherApi> = store.asObservable();
    
    getState() {
        return this.store.value as openWeatherApi;
    }
    
    setState(state: openWeatherApi) {
        this.store.next(state);
    }
}
