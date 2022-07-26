import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../toDo.service';

@Component({
  selector: 'app-toDoList',
  templateUrl: './toDoList.component.html'
})

export class ToDoListComponent implements OnInit {
  tasks: {name: string}[] = [];

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    //this.tasks = this.toDoService.tasks;
    this.toDoService.addEvent.subscribe((added) => {
        this.onTaskAdd();
    })
    this.toDoService.fetchTasks().subscribe(posts =>
      this.tasks = posts
    )
  }

  onTaskAdd(){
    this.toDoService.fetchTasks().subscribe(posts => {
      console.log("Event");
      this.tasks = posts;
    })
  }
}