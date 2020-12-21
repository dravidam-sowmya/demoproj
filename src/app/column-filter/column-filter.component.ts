import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{CdkDragDrop,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';

interface DialogData {
  columDetails: string[];
}
@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.scss']
})
export class ColumnFilterComponent implements OnInit {
  columList:string[]=[];
 selectedColumnsToDisplay:string[]=[];
  onDrop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(this.columList,event.previousIndex,event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data, event.container.data,event.previousIndex,event.currentIndex);
    }
  }
  constructor(
    public dialogRef: MatDialogRef<ColumnFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
this.columList = data['columDetails']
    }

    exitDialog(selectedColumns:string[]):void {
    this.dialogRef.close(selectedColumns);
  }

  closeModal():void{
  this.exitDialog(this.selectedColumnsToDisplay);
  }

  ngOnInit(){
  }

}
