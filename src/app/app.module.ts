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
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { provideStorage, getStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC4d97xPbYWpN3o66avG3G9_KPozdeveyY',
  authDomain: 'file-upload-crud.firebaseapp.com',
  projectId: 'file-upload-crud',
  storageBucket: 'file-upload-crud.appspot.com',
  messagingSenderId: '372859072809',
  appId: '1:372859072809:web:42ffba2f90409c4e458738',
  measurementId: 'G-CJZRSG3GDB',
};
@NgModule({
  declarations: [AppComponent, InputTypesComponent, ViewDataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
