import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CatalogsConnections } from 'src/endpoints/catalogs.connections';

@Component({
  selector: 'app-identification-type',
  templateUrl: './identification-type.component.html',
  styleUrls: ['./identification-type.component.scss']
})
export class IdentificationTypeComponent implements OnInit {
  identificationControl = new FormControl('');
  identificationTypes: any[] = [];

  constructor(private catalogs: CatalogsConnections) { }

  async ngOnInit(): Promise<void> {
    this.identificationTypes = await this.catalogs.getIdentificationTypes();
  }
}


