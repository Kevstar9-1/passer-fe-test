import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogsConnections {
  private readonly GET_OCUPATIONS = '/occupations';
  private readonly GET_COUNTRIES = '/countries';
  private readonly GET_TYPE_ID = '/identificationTypes';
  private urlCatalogs = environment.serverUrlCatalogs;

  constructor(private http: HttpClient) { }

  async getOccupations(): Promise<any[]> {
    const response$ = this.http.get<any>(
      `${this.urlCatalogs}${this.GET_OCUPATIONS}`
    );
    const result = await lastValueFrom(response$);
    return result?.data ?? [];
  }

  async getCountries(): Promise<any[]> {
    const response$ = this.http.get<{ success: boolean; data: any[] }>(
      this.urlCatalogs + this.GET_COUNTRIES
    );
    const res = await lastValueFrom(response$);
    return res.data;
  }
  async getIdentificationTypes(): Promise<any[]> {
    const response$ = this.http.get<any>(`${this.urlCatalogs}${this.GET_TYPE_ID}`);
    const result = await lastValueFrom(response$);
    return result?.data ?? [];
  }


}
