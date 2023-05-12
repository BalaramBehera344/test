import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrencyConverterService {
  private apikey: string = 'V7RJMCO5JASADEYJ';
  private to: string = 'JPY';
  private from: string = 'INR';

  constructor(private httpClient: HttpClient) { }

  public get(to: string, from: string) {
    return this.httpClient.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${to}&to_currency=${from}&apikey=${this.apikey}`);

  }
}



