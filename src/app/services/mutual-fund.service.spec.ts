import { TestBed } from '@angular/core/testing';

import { MutualFundService } from './mutual-fund.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MutualFundService', () => {
  let service: MutualFundService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(MutualFundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
