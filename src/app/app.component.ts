import { Component, OnInit } from '@angular/core';
import { MerchantsService } from './Services/merchants.service';
import {Merchant} from './Interfaces/merchant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  merchants : Merchant[];
  title = 'AngularChallenge';

constructor(private merchantsService: MerchantsService) { }

ngOnInit(): void { 
  this.getMerchants();
}  

  getMerchants(): void {
    this.merchantsService.getMerchants()
    .subscribe(merchants => 
      {
        this.merchants = merchants
        });  
  }
}
