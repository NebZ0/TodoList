import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Todo } from "./todo.component";
import { Task } from '../models/Task.model';
import {TodoAdd } from "../components/toDoAdd.components"


@Component({
    selector: "todolist",
    standalone: true,
    imports: [CommonModule, FormsModule ,Todo, TodoAdd],
    template:  `
    <ul class="justify-center max-w-md flex-col gap-2 border-6 rounded border-black">
        @for (task of tasks();track $index){
            <todo-item [task] = "task"></todo-item>
        }
    </ul>
    
     <todo-add (taskAdded)="onTaskAdded($event)"></todo-add>
     
     <div class="mb-4 flex gap-2 items-center">
        <label for="filter" class="font-medium">Filtrer :</label>
        <select id="filter" [(ngModel)]="filter" (change)="loadTasks()" class="p-2 border rounded">
            <option value="all">Toutes</option>
            <option value="done">Faites</option>
            <option value="pending">À faire</option>
        </select>
</div>`
})

export class TodoList{

    tasks = signal<Task[]>([]);
    filter = 'all';

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.getTasks().subscribe(data => {
            this.tasks.set(data);
        });
    }

    loadTasks() {
        let query = this.filter === 'all' ? '' : `?state=${this.filter}`;
        this.api.getTasks(query).subscribe(data => this.tasks.set(data));
    }

    onTaskAdded(task: Task) {
        console.log(task);
        this.tasks.update(list => [...list, task]);
}}