import { Component, Input } from '@angular/core';

import { ToDoService } from '../../toDo.service';

@Component({
  selector: 'app-toDoElement',
  templateUrl: './toDoElement.component.html',
})

export class ToDoElementComponent  {
  @Input() id: number;
  @Input() element: string;

  constructor(private toDoService: ToDoService){}
}