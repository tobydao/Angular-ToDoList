import { Component } from '@angular/core';

import { todo } from '../todo.model'

@Component({
  selector: 'app-toDoList',
  templateUrl: './toDoList.component.html',
})

export class ToDoListComponent  {

  toDoElements: todo[] = [
    new todo("vacuum")
  ]
  
}