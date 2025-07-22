import {NgModule} from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    ReactiveFormsModule, FormsModule, CommonModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule,
    MatIconModule, MatButtonModule, MatIconModule,
    MatTabsModule, MatSelectModule, MatAutocompleteModule,
    MatMenuModule, MatCardModule
  ],
  exports: [
    ReactiveFormsModule, FormsModule, CommonModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule,
    MatIconModule, MatButtonModule, 
    MatTabsModule, MatSelectModule, MatAutocompleteModule,
    MatMenuModule, MatCardModule
  ]
})
export class AppMaterialModule {}
