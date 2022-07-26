import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDoService } from '../../toDo.service';

@Component({
  selector: 'app-toDoList',
  templateUrl: './toDoList.component.html'
})

export class ToDoListComponent implements OnInit, OnDestroy {
  tasks: {name: string, id: string}[] = [];
  isLoading = false;
  error = null;

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    //this.tasks = this.toDoService.tasks;
    this.isLoading = true;

    this.toDoService.taskDeleted.subscribe( () => this.onTaskDeleted());
    this.toDoService.taskAdded.subscribe( () => this.onTaskAdded());

    this.toDoService.fetchTasks().subscribe(posts => {
      this.tasks = posts;
      this.isLoading = false;
    }, error => { this.error = error.message
    })
  }

  ngOnDestroy() {
    this.toDoService.taskDeleted.unsubscribe();
    this.toDoService.taskAdded.unsubscribe();
  }

  onTaskAdded(){
    console.log("Task added");
    this.ngOnInit();
  }
  onTaskDeleted(){  
    console.log("Task deleted");
    this.ngOnInit();
  }
}