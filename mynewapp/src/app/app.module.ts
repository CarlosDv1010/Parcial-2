import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RestauranteModule } from './restaurante/restaurante.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RestauranteModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }