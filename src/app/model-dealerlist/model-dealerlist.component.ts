import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { DealerAccounts } from '../create-bcr2/create-bcr2.component';

@Component({
  selector: 'app-model-dealerlist',
  standalone: true,
  imports: [MatDialogContent, MatLabel, MatDialogActions, MatFormField, MatTableModule],
  templateUrl: './model-dealerlist.component.html',
  styleUrl: './model-dealerlist.component.css'
})
export class ModelDealerlistComponent {

  displayedColumns: string[] = ['id', 'name', 'created','territory' ,'action'];

  dataSource = new MatTableDataSource<DealerAccounts[]>();
  constructor(
    public dialogRef: MatDialogRef<ModelDealerlistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.dataSource.data = data.dataSource;
    console.log(data);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  onSelected(selectedRec: number): void {
    console.log(selectedRec);
  }

}
