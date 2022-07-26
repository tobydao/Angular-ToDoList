import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter, Output } from "@angular/core";
import { map } from 'rxjs/operators';

@Injectable()
export class ToDoService {

  url: string = 'https://todoapp-c409d-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';
  isFetching: boolean;
  @Output() addEvent = new EventEmitter<boolean>();
  
  constructor(private http: HttpClient){}

  /*
  // Data without Firebase
  tasks: {name: string}[] = [
    {name: "vaccum"}, 
    {name: "order book"},
    {name: "exercise"} 
  ]

  removeTask(taskId: number) {
    this.tasks.splice(taskId, 1);
  }

  addTask(task: {name: string}) {
    this.tasks.push(task);
  }
   */ 

  sendTask(task: {name: string}){
    this.http.post(
      this.url,
      task
    ).subscribe(responseData => {
      console.log(responseData);
    })
  }

  fetchTasks() {
    this.isFetching = true;
    return this.http
      .get(this.url)
      .pipe(map(responseData => {
        const taskArray = [];
        for (const key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            taskArray.push(responseData[key])
          }
        }
        return taskArray;
      }));
  }
}