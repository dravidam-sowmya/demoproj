
import { Component } from '@angular/core';
import{CdkDragDrop,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
// import { DialogData } from './DialogData';
import {ColumnFilterComponent} from '../app/column-filter/column-filter.component'
import { of } from 'rxjs';
interface employee {
  [key: string]: string;
}
interface emp {
  [key: string]: employee;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  title = 'POC';
  employeeColumnDetails:employee={
    Name : 'employeeName',
    Address : 'employeeAddress',
    MobileNumber : 'employeeMobileNumber',
    Id:'employeeId',
    Designation : 'employeeDesignation',
    Department : 'employeeDept',
    Report : 'employeeReportingTo',
    DOJ : 'employeeDoj',
    DOB:'employeeDob',
    Experience:'employeeExperience',
  }
selectedColumsList:string[] = Object.keys(this.employeeColumnDetails);
listOfColumnsToDisplay = of(this.selectedColumsList);
employeeDataList:employee[] = [
  {
    employeeName: 'sam',
    employeeAddress: ' 23-s-20',
    employeeMobileNumber: '12345678',
    employeeId: 'Y123',
    employeeDesignation: 'DeveOps',
    employeeDept: 'IT',
    employeeReportingTo: 'Sow',
    employeeDoj: '12-12-20',
    employeeDob: '12-12-95',
    employeeExperience: '25 years',
  }
]
  openDialog(): void {
    const dialogRef = this.dialog.open(ColumnFilterComponent, {
      width: '300px',
      data: {columDetails:this.selectedColumsList}
    });
    this.listOfColumnsToDisplay = dialogRef.afterClosed();
    
   
  }

}
