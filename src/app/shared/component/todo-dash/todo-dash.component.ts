import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss'],
})
export class TodoDashComponent implements OnInit {
  todoData!: Array<Itodo>;
  constructor(private _todoArrService: TodoService) {}

  ngOnInit(): void {
    this.todoData = this._todoArrService.fetchAllTodo();
  }
  gettodoItem(event: Itodo) {
    this._todoArrService.addtoArray(event);
  }
}
