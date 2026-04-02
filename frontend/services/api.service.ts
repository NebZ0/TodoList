import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/Task.model';

@Injectable({
    providedIn: "root"
})

export class ApiService {
    host = "http://localhost:3000";
    private url = this.host + '/tasks/'

    constructor(private http: HttpClient) {}

    getTasks(query: string = ''){
        return this.http.get<Task[]>(this.url+query);
    }

    taskDone(taskId: number){
        return this.http.patch<Task>(`${this.url}${taskId}`, null);
    }

    addTask(task: Partial<Task>) {
        return this.http.post<Task>(`${this.url}`, task);
    }

}

