import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/model/todo';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todoArr!: Array<Itodo>;
  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}
  onRemove(todoObj: Itodo) {
    this._todoService.removeTod(todoObj);
  }
}
