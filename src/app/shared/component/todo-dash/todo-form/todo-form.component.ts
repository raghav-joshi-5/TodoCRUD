import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/shared/model/todo';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm!: NgForm;
  @Output() sendObj: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  constructor(private _uuidService: UuidService) {}

  ngOnInit(): void {}

  onSubmit() {
    let todoObj = {
      todoItem: this.todoForm.controls['todoItem'].value,
      // to get the specific control value from form use above code
      todoId: this._uuidService.generateUuid(),
    };
    this.sendObj.emit(todoObj);
  }
}
