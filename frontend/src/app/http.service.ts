import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getAllCities(): Observable<any> {

  }

  createCity(): Observable<any> {

  }

  updateCity(): Observable<any> {

  }

  deleteCity(): Observable<any> {

  }
}
