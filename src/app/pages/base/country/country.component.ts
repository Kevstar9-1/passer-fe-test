import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogsConnections } from 'src/endpoints/catalogs.connections'; 

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'sugef', 'risk'];
  dataSource = new MatTableDataSource<any>([]);
  selectedRow: any = null;
  countryFilter = new FormControl('');

  constructor(private catalogs: CatalogsConnections) {
    this.dataSource.filterPredicate = (data, filter: string) =>
      data.name.toLowerCase().includes(filter.trim().toLowerCase());

    this.countryFilter.valueChanges.subscribe(value => {
      this.applyFilter(value ?? '');
    });
  }

  async ngOnInit(): Promise<void> {
    const countries = await this.catalogs.getCountries(); 
    this.dataSource.data = countries;
  }

  selectRow(row: any): void {
    this.selectedRow = row;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue;
  }
}
