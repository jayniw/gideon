import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp,[
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyAfCmIKd4oQlZwd3-T5DVpsAeZPKExbj0s",
    authDomain: "project-6335036855707023643.firebaseapp.com",
    databaseURL: "https://project-6335036855707023643.firebaseio.com",
    storageBucket: "project-6335036855707023643.appspot.com",
  }),
]);
