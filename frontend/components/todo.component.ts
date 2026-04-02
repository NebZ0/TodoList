import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/Task.model';
import { ApiService } from '../services/api.service';

@Component({
    selector: "todo-item",
    standalone: true,
    imports: [CommonModule],
    template:  `<li class = "m-2 p-2 border rounded" [class.text-gray-400]="task.completed">
                    {{task.title}}
                    <input type = "checkbox" [checked] = "task.completed" (change) = "toggleCompleted()">
                </li>`
})

export class Todo{
    @Input() task!: Task;

    constructor(private api: ApiService) {}

    toggleCompleted() {
        const newState = !this.task.completed;
        this.task.completed = newState;

        this.api.taskDone(this.task.id).subscribe(updatedTask => {
            this.task.completed = updatedTask.completed; 
            console.log(this.task);
        },
        ()=> {
            this.task.completed = !newState;
        }
);
}
}