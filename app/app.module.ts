import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {MyAppComponent} from "./components/myapp.component";
import NavbarComponent from "./components/navbar/navbar.component";
import SearchComponent from "./components/search/search.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        MyAppComponent,
        NavbarComponent,
        SearchComponent
    ],
    bootstrap: [MyAppComponent]
})

export class AppModule {}
