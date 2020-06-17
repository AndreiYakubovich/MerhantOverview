import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FullMerchantData } from '../Interfaces/FullMerchantData';
import { TransactionsService } from '../Services/transactions.service';


@Injectable()
export class GetFullMerchantDataResolver implements Resolve<FullMerchantData> {

    constructor(private service: TransactionsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<FullMerchantData> {
        let id = route.params.id;
        return this.service.getTransactions(id);
    }
}
