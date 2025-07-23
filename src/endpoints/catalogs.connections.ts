import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogsConnections {
  private readonly GET_OCUPATIONS = '/occupations';
  private urlCatalogs = environment.serverUrlCatalogs;

  constructor(private http: HttpClient) {}

  async getOccupations(): Promise<any[]> {
    const response$ = this.http.get<any>(
      `${this.urlCatalogs}${this.GET_OCUPATIONS}`
    );
    const result = await lastValueFrom(response$);
    return result?.data ?? [];
  }
}
