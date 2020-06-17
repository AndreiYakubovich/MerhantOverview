import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MerchantsService } from './Services/merchants.service';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let fakeMerchantService;

  beforeEach(async(() => {
    fakeMerchantService = jasmine.createSpyObj('MerchantsService', ['getMerchants']);
    fakeMerchantService.getMerchants.and.returnValue();
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],providers: [{provide: MerchantsService, useValue: fakeMerchantService}],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularChallenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularChallenge');
  });

});
