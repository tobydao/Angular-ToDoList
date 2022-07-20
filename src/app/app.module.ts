import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ToDoElementComponent } from './toDo/toDoElement/toDoElement.component';
import { ToDoListComponent } from './toDo/toDoList/toDoList.component';

@NgModule({
  imports:
  [ 
    BrowserModule,
    FormsModule
  ],
  declarations: 
  [ 
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ToDoElementComponent,
    ToDoListComponent
  ],
  bootstrap:
  [ 
    AppComponent
  ]
})
export class AppModule { }
