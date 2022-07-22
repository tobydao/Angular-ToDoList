import { Component, ViewChild, ElementRef } from '@angular/core';

import { ToDoService } from '../toDo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})

export class EditComponent  {
  @ViewChild('taskInput', { static: false }) taskInputRef: ElementRef;

  constructor(private toDoService: ToDoService) {}

  onAddTask() {
    var task = this.taskInputRef.nativeElement.value;
    this.toDoService.addTask(task)
  }
  
}