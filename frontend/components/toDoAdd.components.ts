import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Task } from '../models/Task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="m-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
      <input  type="text" [(ngModel)]="title" placeholder="Nouvelle tâche" />
      <button class= "p-1 text-blue-500 border-gray-400 rounded hover:text-blue-700 cursor-pointer" (click)="addTask()">Ajouter</button>
    </div>
  `
})

export class TodoAdd {
    @Output() taskAdded = new EventEmitter<Task>();

    title = '';

    constructor(private api: ApiService) {}

    addTask(){
        if(this.title.trim()){

          this.api.addTask({title: this.title, completed:false}).subscribe(task =>{
            this.taskAdded.emit(task);
            console.log("task added") ;         
            console.log(task);
            this.title = '';
          });
    }}

}