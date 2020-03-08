import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NamesService {
  
  namesURL = 'http://localhost:3000/names/search/';

  constructor(private http: HttpClient) { }

  getData = (searchTerm: string) => {
    return this.http.get(`${this.namesURL}${searchTerm}` );
  }
}