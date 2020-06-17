import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsService } from './Services/transactions.service';
import { MerchantsService } from './Services/merchants.service';
import { TransactionsComponent } from './Transactions/transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GetFullMerchantDataResolver } from './Resolvers/GetFullMerchantDataResolver';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    FlexLayoutModule,
    NgApexchartsModule
  ],
  providers: [TransactionsService, MerchantsService, GetFullMerchantDataResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
