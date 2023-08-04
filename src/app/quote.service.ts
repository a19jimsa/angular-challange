import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private sharedObjectSource = new ReplaySubject<Quote>();
  sharedObject$ = this.sharedObjectSource.asObservable();
  constructor(private http: HttpClient) {}

  getAllQuotes() {
    const headers = {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    };
    return this.http.get<any>('https://localhost:7053/Quote/', { headers });
  }

  createQuote(quote: Quote) {
    const headers = {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    };
    return this.http.post<any>('https://localhost:7053/Quote/', quote, {
      headers,
    });
  }

  updateSharedObject(data: Quote) {
    this.sharedObjectSource.next(data);
  }
}
