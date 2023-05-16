import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyconComponent } from './currency-converter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyconComponent;
  let fixture: ComponentFixture<CurrencyconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,FormsModule],
      declarations: [ CurrencyconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
