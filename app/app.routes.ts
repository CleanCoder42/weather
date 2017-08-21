import {RouterModule, Routes} from "@angular/router";
import CurrentWeatherComponent from "./components/currentWeather/currentWeather.component";
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
    {path: "", component: CurrentWeatherComponent},
    {path: "currentWeather", component: CurrentWeatherComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);