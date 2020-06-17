import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './Transactions/transactions.component';
import { GetFullMerchantDataResolver } from './Resolvers/GetFullMerchantDataResolver';


const routes: Routes = [ 
  {path: 'transactions/:id', component: TransactionsComponent,
resolve: {fullMerchantData: GetFullMerchantDataResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
