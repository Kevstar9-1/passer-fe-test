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

@NgModule({
  imports: [
    ReactiveFormsModule, FormsModule, CommonModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule,
    MatIconModule, MatButtonModule, MatIconModule,
    MatTabsModule, MatSelectModule, MatAutocompleteModule,
    MatMenuModule
  ],
  exports: [
    ReactiveFormsModule, FormsModule, CommonModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule,
    MatIconModule, MatButtonModule, MatIconModule,
    MatTabsModule, MatSelectModule, MatAutocompleteModule,
    MatMenuModule
  ]
})
export class AppMaterialModule {}
