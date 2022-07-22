import { Component } from '@angular/core';
import { ToDoService } from './toDo.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ToDoService]
})
export class AppComponent  {
  
  constructor(private toDoService: ToDoService) {}

}
