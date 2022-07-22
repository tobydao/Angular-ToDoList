import { Component } from '@angular/core';
import { ToDoService } from '../toDo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})

export class EditComponent  {

  constructor(private toDoService: ToDoService) {}

  addTask(task: string) {
    this.toDoService.addTask(task)
  }
  
}