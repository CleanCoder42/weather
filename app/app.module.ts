import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {MyAppComponent} from "./components/myapp.component";
import NavbarComponent from "./components/navbar/navbar.component";
import SearchComponent from "./components/search/search.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import CurrentWeatherComponent from "./components/currentWeather/currentWeather.component";
import {routing} from "./app.routes";
import {GetWeatherService} from "./services/getWeather.service";
import ForecastComponent from "./components/forecast/forecast.component";
import {AppStore} from "./app.store";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        MyAppComponent,
        NavbarComponent,
        SearchComponent,
        CurrentWeatherComponent,
        ForecastComponent
    ],
    providers: [
        GetWeatherService,
        AppStore
    ],
    bootstrap: [MyAppComponent]
})

export class AppModule {}
