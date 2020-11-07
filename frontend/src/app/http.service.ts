import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HttpService {
  apiUrl = environment.API_URL;
  newlyAddedCity$ = new BehaviorSubject({});

	constructor(private httpClient: HttpClient) {}

	getAllCities(): Observable<any> {
		return this.httpClient.get(`${this.apiUrl}/city`);
	}

	createCity(payload: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/city`, payload);
  }

	updateCity(cityId: number, payload: any): Observable<any> {
		return this.httpClient.put(`${this.apiUrl}/city/${cityId}`, payload);
	}

	deleteCity(cityId: number): Observable<any> {
		return this.httpClient.delete(`${this.apiUrl}/city/${cityId}`);
	}
}
