import { Component, signal } from '@angular/core';
import { TodoList } from "../../components/todolist.component";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoList],
  template: `
  <h1 class="bg-blue-500 text-white p-2 justify-center flex">Ma TodoList</h1>
  <todolist class="flex flex-col items-center m-3"></todolist> 
  
  `
})
export class App {

}

