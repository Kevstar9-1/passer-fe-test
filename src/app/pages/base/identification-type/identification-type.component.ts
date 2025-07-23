import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-identification-type',
  templateUrl: './identification-type.component.html',
  styleUrls: ['./identification-type.component.scss']
})
export class IdentificationTypeComponent {
  identificationControl = new FormControl('');
  identifications: string[] = ['Cédula', 'Pasaporte', 'Residencia'];
}
