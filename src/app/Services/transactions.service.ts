import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Transaction } from '../Interfaces/transaction';
import { Summary } from '../Interfaces/Summary';
import { FullMerchantData } from '../Interfaces/FullMerchantData';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {  
  constructor(
    private http: HttpClient) { }

    getTransactions(id: string): Observable<FullMerchantData> {
      const url = `${environment.apiUrl}/${id}.json`;

      return this.http.get<FullMerchantData>(url);    
      
    }

    getSummary(transactions: Transaction[]) : Summary {
      let summary = new Summary();
      summary.count = transactions.length;
      summary.total = transactions.map(x=> x.price).reduce((a,b)=>a+b);
      return summary;
    }   
}
