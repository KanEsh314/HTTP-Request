import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GetFitProvider } from '../providers/get-fit/get-fit';
import { MainPage } from '../pages/main/main';
import { GetTypeProvider } from '../providers/get-type/get-type';
import { DetailPage } from '../pages/detail/detail'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetFitProvider,
    GetTypeProvider
  ]
})
export class AppModule {}
