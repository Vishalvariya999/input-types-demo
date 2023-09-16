import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTypesComponent } from './features/components/input-types/input-types.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDataComponent } from './features/components/view-data/view-data.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HttpClientModule } from '@angular/common/http';
import 'firebase/storage';

@NgModule({
  declarations: [AppComponent, InputTypesComponent, ViewDataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: environment.firebaseConfig.apiKey,
      authDomain: environment.firebaseConfig.authDomain,
      projectId: environment.firebaseConfig.projectId,
      storageBucket: environment.firebaseConfig.storageBucket,
    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
