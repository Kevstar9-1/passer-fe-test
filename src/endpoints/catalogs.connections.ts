import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class GeneralMethodsService {
  
  private urlCatalogs: string = '';
  // EXTENTIONS
  private readonly GET_COUNTRIES = '/countries';
  private readonly GET_TYPE_ID = '/identificationTypes';
  private readonly GET_OCUPATIONS = '/occupations';

  constructor(private http: HttpClient) {
    this.urlCatalogs = environment.serverUrlCatalogs;
  }

  // EXAMPLE
//   async methodExample(): Promise<typeResponse> {
//     const response$ = this.http.get<typeResponse>(
//       this.urlCatalogs + this.extention,
//     );

//     return await lastValueFrom(response$);
//   }
}