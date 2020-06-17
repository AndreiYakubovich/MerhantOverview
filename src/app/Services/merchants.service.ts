import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Merchant } from '../Interfaces/merchant';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MerchantsService {

  private merchantUrl = `${environment.apiUrl}/merchants.json`

  constructor(
    private http: HttpClient) { }

  getMerchants(): Observable<Merchant[]> {    
    return this.http.get<Merchant[]>(this.merchantUrl);
  }
}