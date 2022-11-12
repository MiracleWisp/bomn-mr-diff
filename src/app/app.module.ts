import {
  TuiButtonModule, TuiDataListModule, TuiLoaderModule,
  TuiPrimitiveTextfieldModule,
  TuiRootModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule} from "@taiga-ui/kit";
import {HttpClientModule} from "@angular/common/http";
import { DiffViewerComponent } from './components/diff-viewver/diff-viewer.component';
import { FileSelectorComponent } from './components/file-selector/file-selector.component';
import {TuiLetModule} from "@taiga-ui/cdk";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiffViewerComponent,
    FileSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiInputModule,
    TuiButtonModule,
    TuiPrimitiveTextfieldModule,
    HttpClientModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiLoaderModule,
    TuiLetModule,
    ReactiveFormsModule,
    TuiDataListWrapperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
