import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CatalogsConnections } from 'src/endpoints/catalogs.connections'; 

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss']
})
export class OccupationComponent implements OnInit {
  occupationControl = new FormControl('');
  occupations: any[] = [];
  filteredOccupations$: Observable<any[]> = new Observable();

  constructor(private catalogs: CatalogsConnections) {}

  async ngOnInit(): Promise<void> {
    this.occupations = await this.catalogs.getOccupations();

    this.filteredOccupations$ = this.occupationControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.occupations.filter(o => o.name.toLowerCase().includes(filterValue));
  }
}
