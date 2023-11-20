import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp({"projectId":"partidosfutbol-60d17","appId":"1:952226329221:web:ff09a64469e632cbeaefec","storageBucket":"partidosfutbol-60d17.appspot.com","apiKey":"AIzaSyD3cFGJBnPlqA2dgCx_dUdqPDJy1XCt-gw","authDomain":"partidosfutbol-60d17.firebaseapp.com","messagingSenderId":"952226329221","measurementId":"G-5D0CQFCK80"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
