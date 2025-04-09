import { Injectable } from '@angular/core';
import { Istd } from '../model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}
  studentArr: Array<Istd> = [
    {
      fname: 'john',
      lname: 'doe',
      email: 'johndoe@gmail.com',
      contact: 123456667,
      id: '1',
    },
  ];

  fetchAllStd() {
    return this.studentArr;
  }

  addstd(stdObj: Istd) {
    this.studentArr.push(stdObj);
  }

  onRemove(stdObj: Istd) {
    let getIndex = this.studentArr.findIndex((f) => f.id === stdObj.id);
    this.studentArr.splice(getIndex, 1);
  }

  onUpdate(stdObj: Istd) {
    let getupdatedIndex = this.studentArr.findIndex((f) => f.id === stdObj.id);
    this.studentArr[getupdatedIndex] = stdObj;
  }
}
