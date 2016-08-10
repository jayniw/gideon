import {Component, ViewChild } from '@angular/core';
import {Platform, ionicBootstrap, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
/*Para manejo y conexion a firebase*/
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
/*Importar las paginas del proyecto*/
import {HomePage} from './pages/home/home';
import {MisionesPage} from './pages/misiones/misiones';
import {GestasPage} from './pages/gestas/gestas';
import {GuerrasPage} from './pages/guerras/guerras';

@Component({
  //template: '<ion-nav #content [root]="rootPage"></ion-nav>'
  templateUrl: 'build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, af: AngularFire) {
    this.initializeApp();
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Misiones', component: MisionesPage },
      { title: 'Gestas', component: GestasPage },
      { title: 'Guerras', component: GuerrasPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
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
