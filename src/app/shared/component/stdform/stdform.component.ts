import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../model/student';
import { StudentService } from '../../service/student.service';
import { UuidService } from '../../service/uuid.service';
import { flatMap } from 'rxjs';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss'],
})
export class StdformComponent implements OnInit {
  constructor(
    private _stdService: StudentService,
    private _uuid: UuidService
  ) {}
  @ViewChild('stdForm') stdForm!: NgForm;
  studentArr!: Array<Istd>;
  editStdId!: string;
  isinEditMode: boolean = false;
  ngOnInit(): void {
    this.studentArr = this._stdService.fetchAllStd();
  }

  onSubmit() {
    if (this.stdForm.valid) {
      let stdObj: Istd = {
        fname: this.stdForm.controls['fname'].value,
        lname: this.stdForm.controls['lname'].value,
        email: this.stdForm.controls['email'].value,
        contact: this.stdForm.controls['contact'].value,
        id: this._uuid.generateUuid(),
      };
      this.stdForm.resetForm();
      this._stdService.addstd(stdObj);
    }
  }
  onUpdate() {
    let updateObj = {
      fname: this.stdForm.controls['fname'].value,
      lname: this.stdForm.controls['lname'].value,
      email: this.stdForm.controls['email'].value,
      contact: this.stdForm.controls['contact'].value,
      id: this.editStdId,
    };
    console.log(updateObj);
    this._stdService.onUpdate(updateObj);
    this.stdForm.resetForm();
    this.isinEditMode = false;
  }
  onEdit(event: Istd) {
    this.editStdId = event.id;
    this.stdForm.form.patchValue(event);
    this.isinEditMode = true;
  }
}
