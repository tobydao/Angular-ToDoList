import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

@Injectable()
export class ToDoService {

  url: string = 'https://todoapp-c409d-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';
  isFetching: boolean;
  taskDeleted: EventEmitter<void> = new EventEmitter<void>();
  taskAdded: EventEmitter<void> = new EventEmitter<void>();
  
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

  deleteTask(id: string) {
    this.http.delete('https://todoapp-c409d-default-rtdb.europe-west1.firebasedatabase.app/tasks/' + id + '.json').subscribe();
  }

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
            taskArray.push({ ...responseData[key], id: key})
          }
        }
        return taskArray;
      }));
  }
}