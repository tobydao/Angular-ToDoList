import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoElementComponent } from './toDo/toDoElement/toDoElement.component';
import { ToDoListComponent } from './toDo/toDoList/toDoList.component';
import { EditComponent } from './edit/edit.component'

@NgModule({
  imports:
  [ 
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  declarations: 
  [ 
    AppComponent,
    HeaderComponent,
    ToDoElementComponent,
    ToDoListComponent,
    EditComponent
  ],
  bootstrap:
  [ 
    AppComponent
  ]
})
export class AppModule { }
