import { Component } from '@angular/core';
//import { NgForm }    from '@angular/common';
import { NavController, Alert } from 'ionic-angular';
import {FirebaseListObservable, FirebaseDatabase} from 'angularfire2';
/*
  Generated class for the PaginaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/pagina/pagina.html',
})
export class PaginaPage {

  
tasks: FirebaseListObservable<any>;

  constructor(private navCtrl: NavController , 
              private database: FirebaseDatabase
              ) {
      this.tasks = this.database.list('/tasks')
  }

  createTask(){
    let newTaskModal = Alert.create({
      title: 'Nueva Tarea',
      message: "Ingrese un titulo para tu nueva tarea",
      inputs: [
        {
          name: 'title',
          placeholder: 'Titulo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => { 
            console.log('Cancel clicked'); 
          } 
        }, 
        { text: 'Guardar',
          handler: data => {
            this.tasks.push({
              title: data.title,
              done: false
            });
          }
        }
      ]
    });
    this.navCtrl.present( newTaskModal );
  }

  updateTask( task ){
    setTimeout(()=>{
      this.tasks.update(
         task.$key,{
           title: task.title,
           done: task.done
         });
    },1);
  }

  removeTask ( task ){
    this.tasks.remove( task );
  }

}
