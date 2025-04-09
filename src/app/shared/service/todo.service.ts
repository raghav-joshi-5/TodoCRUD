import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoArr: Array<Itodo> = [
    {
      todoItem: 'javascript',
      todoId: '1',
    },
  ];
  constructor() {}

  fetchAllTodo() {
    return this.todoArr;
  }

  addtoArray(todoObj: Itodo) {
    this.todoArr.push(todoObj);
  }
  removeTod(todoObj: Itodo) {
    let getIndex = this.todoArr.findIndex(
      (find) => find.todoId === todoObj.todoId
    );
    this.todoArr.splice(getIndex, 1);
  }
}
