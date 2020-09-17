import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtakuService {
  arrayAnimes: any[];

  constructor(
    private httpClient: HttpClient) { }

  getAllAnimes(): Promise<any[]> {
    return this.httpClient.get<any[]>('http://localhost:5500/api/animes/').toPromise();
  }


}
