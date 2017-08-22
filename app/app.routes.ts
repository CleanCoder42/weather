import {RouterModule, Routes} from "@angular/router";
import CurrentWeatherComponent from "./components/currentWeather/currentWeather.component";
import {ModuleWithProviders} from "@angular/core";
import ForecastComponent from "./components/forecast/forecast.component";

const routes: Routes = [
    {path: "", component: CurrentWeatherComponent},
    {path: "currentWeather", component: CurrentWeatherComponent},
    {path: "forecast", component:  ForecastComponent}
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);