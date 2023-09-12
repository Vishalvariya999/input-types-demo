import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTypesComponent } from './features/components/input-types/input-types.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDataComponent } from './features/components/view-data/view-data.component';

@NgModule({
  declarations: [AppComponent, InputTypesComponent, ViewDataComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
