import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomepageComponent } from './homepage.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { CurrencyconComponent } from '../currency-converter/currency-converter.component';
 
describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule], 
      declarations: [ HomepageComponent,SearchBoxComponent,CurrencyconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
