import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {firebaseConfig } from "../environments/environment";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFirestore} from "@angular/fire/firestore";
import { ReactiveFormsModule } from '@angular/forms';

import { PreguntaComponent } from "./componentes/pregunta/pregunta.component";




@NgModule({
  declarations: [AppComponent, PreguntaComponent],
  entryComponents: [PreguntaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  
  AngularFireModule.initializeApp(firebaseConfig),
  ReactiveFormsModule,
  AngularFireAuthModule],
 
  providers: [
    StatusBar,
    AngularFirestore,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
