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

  private transctionsUrl = environment.apiUrl;
  
  constructor(
    private http: HttpClient) { }

    getTransactions(id: string): Observable<FullMerchantData> {
      const url = `${this.transctionsUrl}/${id}.json`;
      // return this.http.get<FullMerchantData>(url);
      return new Observable<FullMerchantData>(subscriber => {
        let data = new FullMerchantData();
        data.name = 'dataName';
        data.transactions = this.setStubs(id);
        data.pricing = {subsidy: 250};

        subscriber.next(data);
        setTimeout(() => {
          subscriber.complete();
        }, 500);
      });
      
    }

    getSummary(transactions: Transaction[]) : Summary {
      let summary = new Summary();
      summary.count = transactions.length;
      summary.total = transactions.map(x=> x.price).reduce((a,b)=>a+b);
      return summary;
    }

    setStubs(id : string): Transaction[] {
      if(id == "A1201")
      {
      return [ {
                description: 'Granite Keyboard',
                date: new Date('2019-02-20T15:06:32.153Z'),
                price: 1675
                },
                {
                description: 'Generic Wooden Bacon',
                date: new Date('2019-03-08T17:58:17.636Z'),
                price: 2540
                },
                {
                description: 'Pants',
                date: new Date('2019-03-11T11:48:04.699Z'),
                price: 1558
                }]
              }
              else{
                return [ 
                  {
                    description: "Unbranded Frozen Shoes",
                    date: new Date("2019-02-16T04:23:29.761Z"),
                    price: 501
                },
                {
                    description: "Gorgeous Shoes",
                    date: new Date("2019-03-13T20:39:23.811Z"),
                    price: 940
                },
                {
                    description: "Handcrafted Frozen Cheese",
                    date: new Date("2019-03-14T07:45:47.731Z"),
                    price: 2752
                },
                {
                    description: "Soft Pants",
                    date: new Date("2019-02-23T22:31:12.262Z"),
                    price: 1783
                },
                {
                    description: "Incredible Wooden Gloves",
                    date: new Date("2019-03-07T01:47:42.134Z"),
                    price: 1118
                },
                {
                    description: "Practical Rubber Towels",
                    date: new Date("2019-03-13T07:08:57.915Z"),
                    price: 298
                },
                {
                    description: "Soft Car",
                    date: new Date("2019-03-10T02:00:14.211Z"),
                    price: 1682
                },
                {
                    description: "Sleek Concrete Mouse",
                    date: new Date("2019-03-10T14:47:36.852Z"),
                    price: 1402.03
                },
                {
                    description: "Incredible Concrete Bike",
                    date: new Date("2019-03-13T11:26:11.118Z"),
                    price: 1857
                },
                {
                    description: "Refined Bike",
                    date:  new Date("2019-03-08T17:51:13.496Z"),
                    price: 1340
                },
                {
                    description: "Intelligent Steel Pants",
                    date:  new Date("2019-03-07T22:34:46.087Z"),
                    price: 1462
                },]
              }
    }
}
