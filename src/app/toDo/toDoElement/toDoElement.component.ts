import { Component, Input } from '@angular/core';

import { ToDoService } from '../../toDo.service';

@Component({
  selector: 'app-toDoElement',
  templateUrl: './toDoElement.component.html',
})

export class ToDoElementComponent  {
  @Input() id: string;
  @Input() element: string;

  constructor(private toDoService: ToDoService){}

  onDeleteItem() {
    //this.toDoService.removeTask(this.id)
    this.toDoService.deleteTask(this.id);
    this.toDoService.taskDeleted.emit();
  }
}