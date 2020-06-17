import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';
import { HttpClient } from '@angular/common/http';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let fakeHtttpClient;
  let getSpy;

  beforeEach(() => {
    fakeHtttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    getSpy = fakeHtttpClient.get.and.returnValue( [] );
    TestBed.configureTestingModule({  providers: [
      { provide: HttpClient, useValue: fakeHtttpClient }
    ]});
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get summary correct', () => {
    var transactions = [ {
      description: 'Granite Keyboard',
      date: new Date('2019-02-20T15:06:32.153Z'),
      price: 1
  },
  {
      description: 'Generic Wooden Bacon',
      date: new Date('2019-03-08T17:58:17.636Z'),
      price: 2
  },
  {
      description: 'Pants',
      date: new Date('2019-03-11T11:48:04.699Z'),
      price: 3
  }]
    expect(service.getSummary(transactions).total).toBe(6);
  });
});
