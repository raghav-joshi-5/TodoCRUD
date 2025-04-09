import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../model/student';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss'],
})
export class StdtableComponent implements OnInit {
  @Input() studentData!: Array<Istd>;
  @Output() sendEditObj: EventEmitter<Istd> = new EventEmitter<Istd>();
  constructor(private _stdService: StudentService) {}

  ngOnInit(): void {}

  onRemove(std: Istd) {
    let getconfirm = confirm('Are you sure you want to remove this student');
    if (getconfirm) {
      this._stdService.onRemove(std);
    }
  }

  onEdit(std: Istd) {
    this.sendEditObj.emit(std);
  }
}
