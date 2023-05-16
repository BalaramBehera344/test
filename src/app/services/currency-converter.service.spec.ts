
import { TestBed } from '@angular/core/testing';

import { CurrencyConverterService } from './currency-converter.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CurrencyConverterService', () => {
  let service: CurrencyConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CurrencyConverterService);
    
    providers: [CurrencyConverterService]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
