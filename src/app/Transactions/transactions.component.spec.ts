import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FullMerchantData } from '../Interfaces/FullMerchantData';
import { Observable } from 'rxjs';
import {
  NgApexchartsModule, ChartComponent
} from "ng-apexcharts";

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let fakeHtttpClient;


  beforeEach(() => {
    fakeHtttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [NgApexchartsModule],
      declarations: [TransactionsComponent,ChartComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { data: new Observable<FullMerchantData>() } },
        { provide: HttpClient, useValue: fakeHtttpClient }, 
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Transactions" as headline', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toEqual('Transactions');
  });
});
