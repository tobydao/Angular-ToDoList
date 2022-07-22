import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toDoElement',
  templateUrl: './toDoElement.component.html',
})

export class ToDoElementComponent  {
  @Input() id: number;
  @Input() element: string;
}