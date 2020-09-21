import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OtakuService {
  arrayAnimes: any[];
  arrayMangas: any[];
  token = JSON.parse(sessionStorage.getItem('token'));

  constructor(
    private httpClient: HttpClient) { }

  getAllAnimes(): Promise<any[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${1234}`);


    return this.httpClient.get<any[]>('http://localhost:5500/api/animes/', { headers: headers }).toPromise();
  }
  getAllMangas(): Promise<any[]> {
    return this.httpClient.get<any[]>('http://localhost:5500/api/mangas/').toPromise();

  }

  userLogin(pUserData): Promise<any> {
    const httpHeaders = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return this.httpClient
      .post<any>(
        'http://localhost:5500/api/users/login',
        JSON.stringify(pUserData),
        httpHeaders
      )
      .toPromise();
  }

  createUser(pUserData): any {
    fetch('http://localhost:5500/api/users', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(pUserData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log('RESPONSE', json);
        return json;
      });
  }

}
