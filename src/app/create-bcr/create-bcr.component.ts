import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-bcr',
  templateUrl: './create-bcr.component.html',
  styleUrl: './create-bcr.component.css'

})
export class CreateBcrComponent {
  name = new FormControl('');
}
