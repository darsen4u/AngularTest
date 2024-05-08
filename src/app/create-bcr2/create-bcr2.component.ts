import { Component } from '@angular/core';
import { JsonPipe, NgFor } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators,FormArray } from '@angular/forms';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModelDealerlistComponent } from '../model-dealerlist/model-dealerlist.component';



export interface DealerAccounts {
  id: number;
  name: string;
  created: string;
  account_number: string;
  good_receiving_address: string;
  husq_mbdm_territory_num: string | null;
  account_active_yes_no: number;
  company_code: string;
}



@Component({
  selector: 'app-create-bcr2',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe],
  templateUrl: './create-bcr2.component.html',
  styleUrl: './create-bcr2.component.css'
})

export class CreateBcr2Component {

  
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

   dealerAccounts: DealerAccounts[] = [
    {
      "id": 23890,
      "name": "NORFOLK POWER EQUIPMENT",
      "created": "2005-04-11 18:04:30",
      "account_number": "12345",
      "good_receiving_address": "00001",
      "account_active_yes_no": 1,
      "husq_mbdm_territory_num": "51",
      "company_code": "USF"
    },
    {
      "id": 46781,
      "name": "NORFOLK POWER EQUIPMENT",
      "created": "2005-08-12 17:12:59",
      "account_number": "12345",
      "good_receiving_address": "00002",
      "account_active_yes_no": 1,
      "husq_mbdm_territory_num": "51",
      "company_code": "USF"
    },
    {
      "id": 225327,
      "name": "NORFOLK POWER EQUIPMENT",
      "created": "2012-06-08 05:14:23",
      "account_number": "12345",
      "good_receiving_address": "00003",
      "account_active_yes_no": 1,
      "husq_mbdm_territory_num": "51",
      "company_code": "USF"
    },
    {
      "id": 309851,
      "name": "POWER TEST - GRN 1",
      "created": "2017-12-08 05:20:18",
      "account_number": "12345",
      "good_receiving_address": "00001",
      "account_active_yes_no": 1,
      "husq_mbdm_territory_num": "911",
      "company_code": "CDA"
    },
    {
      "id": 309979,
      "name": "POWER TEST - GRN 2",
      "created": "2018-01-19 11:08:53",
      "account_number": "12345",
      "good_receiving_address": "00002",
      "account_active_yes_no": 1,
      "husq_mbdm_territory_num": null,
      "company_code": "CDA"
    }
  ];


  profileForm = this.formBuilder.group({
    fromDealer: ['', Validators.required],
    toDealer: [''],
    selTransferType: [1],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  updateProfile() {
    this.profileForm.patchValue({
      fromDealer: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  openDialog() {
    this.profileForm.patchValue({
      toDealer: "From Dealer Lookup Clicked"
    });

    this.dialog.open(ModelDealerlistComponent, {
      width: "700px",
      data: {dataSource: this.dealerAccounts},
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
