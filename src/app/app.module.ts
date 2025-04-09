import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashComponent } from './shared/component/todo-dash/todo-dash.component';
import { TodoListComponent } from './shared/component/todo-dash/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/component/todo-dash/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { StdtableComponent } from './shared/component/stdtable/stdtable.component';
import { StdformComponent } from './shared/component/stdform/stdform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashComponent,
    TodoListComponent,
    TodoFormComponent,
    StdtableComponent,
    StdformComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
