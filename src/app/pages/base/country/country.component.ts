import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  displayedColumns: string[] = ['name', 'sugef', 'risk'];
  dataSource = new MatTableDataSource([
    { name: 'Costa Rica', sugef: 5, risk: 2 },
    { name: 'Afganistán', sugef: 1, risk: 3 },
    { name: 'Estados Unidos', sugef: 10, risk: 1 }
  ]);

  selectedRow: any = null;
  countryFilter = new FormControl('');

  constructor() {
    this.dataSource.filterPredicate = (data, filter: string) =>
      data.name.toLowerCase().includes(filter.trim().toLowerCase());

    this.countryFilter.valueChanges.subscribe(value => {
      this.applyFilter(value ?? '');
    });
  }

  selectRow(row: any): void {
    this.selectedRow = row;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue;
  }
}
