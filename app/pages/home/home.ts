import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PaginaPage} from '../pagina/pagina';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  goToPaginaPage(){
    this.navCtrl.push( PaginaPage );
  }
}
