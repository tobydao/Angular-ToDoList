import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../toDo.service';

@Component({
  selector: 'app-toDoList',
  templateUrl: './toDoList.component.html'
})

export class ToDoListComponent implements OnInit {
  tasks: string[] = [];

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.tasks = this.toDoService.tasks;
  }
}