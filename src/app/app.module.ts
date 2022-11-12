import {TuiButtonModule, TuiPrimitiveTextfieldModule, TuiRootModule} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {TuiInputModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiInputModule,
    TuiButtonModule,
    TuiPrimitiveTextfieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
