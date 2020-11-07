import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HttpService {
	apiUrl = environment.API_URL;

	constructor(private httpClient: HttpClient) {}

	getAllCities(): Observable<any> {
		return this.httpClient.get(`${this.apiUrl}/city`);
	}

	// createCity(): Observable<any> {}

	updateCity(cityId: number, payload: any): Observable<any> {
		return this.httpClient.put(`${this.apiUrl}/city/${cityId}`, payload);
	}

	// deleteCity(): Observable<any> {}
}
