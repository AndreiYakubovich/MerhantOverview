import { TestBed } from '@angular/core/testing';

import { MerchantsService } from './merchants.service';
import { HttpClient } from '@angular/common/http';

describe('MerchantsService', () => {
  let service: MerchantsService;
  let fakeHtttpClient;
  let getSpy;

  beforeEach(() => {
    fakeHtttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    getSpy = fakeHtttpClient.get.and.returnValue( [] );
    TestBed.configureTestingModule({  providers: [
      { provide: HttpClient, useValue: fakeHtttpClient }
    ]});
    service = TestBed.inject(MerchantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
