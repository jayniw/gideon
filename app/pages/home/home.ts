import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PaginaPage} from '../pagina/pagina';
import {FirebaseListObservable, FirebaseDatabase} from 'angularfire2';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  tasks: FirebaseListObservable<any>;

  constructor(private navCtrl: NavController, 
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
         }
      )
    }

    )
  }

  goToPaginaPage(){
    this.navCtrl.push( PaginaPage );
  }
}
